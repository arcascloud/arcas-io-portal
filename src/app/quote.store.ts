import { Injectable, computed, effect, signal } from '@angular/core';
import { ErpModule, modules } from './modules.data';

const STORAGE_KEY = 'arcas-io:cotizacion';

export interface QuoteContact {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
}

/** Minúsculas y sin tildes, para que "contabilidad" encuentre "Contabilidád" y viceversa. */
const norm = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

/** Texto indexable de cada módulo: nombre, categoría, resumen y todas sus funciones. */
const searchIndex = new Map(
  modules.map((m) => [
    m.id,
    norm([m.name, m.tag, m.summary, ...m.groups.flatMap((g) => [g.title ?? '', ...g.items])].join(' ')),
  ]),
);

/**
 * Estado del cotizador: búsqueda, filtro por categoría, módulos elegidos,
 * si generan asiento contable y qué tarjeta está abierta.
 * La selección se guarda en localStorage para no perderla al recargar.
 */
@Injectable({ providedIn: 'root' })
export class QuoteStore {
  private readonly _tag = signal('Todos');
  private readonly _query = signal('');
  private readonly _cart = signal<Record<string, boolean>>({});
  private readonly _auto = signal<Record<string, boolean>>({});
  private readonly _open = signal<string | null>(null);

  readonly tag = this._tag.asReadonly();
  readonly query = this._query.asReadonly();
  readonly open = this._open.asReadonly();

  readonly tags = ['Todos', ...Array.from(new Set(modules.map((m) => m.tag)))];

  readonly visible = computed(() => {
    const q = norm(this._query().trim());
    return modules.filter(
      (m) =>
        (this._tag() === 'Todos' || m.tag === this._tag()) &&
        (!q || searchIndex.get(m.id)!.includes(q)),
    );
  });

  readonly selected = computed(() => modules.filter((m) => this._cart()[m.id]));

  readonly count = computed(() => this.selected().length);

  constructor() {
    this.restore();
    effect(() => this.persist(this._cart(), this._auto()));
  }

  isCarted(id: string): boolean {
    return !!this._cart()[id];
  }

  isAuto(id: string): boolean {
    return !!this._auto()[id];
  }

  isOpen(id: string): boolean {
    return this._open() === id;
  }

  setTag(tag: string): void {
    this._tag.set(tag);
  }

  setQuery(query: string): void {
    this._query.set(query);
  }

  clearFilters(): void {
    this._tag.set('Todos');
    this._query.set('');
  }

  toggle(id: string): void {
    this._cart.update((c) => ({ ...c, [id]: !c[id] }));
  }

  remove(id: string): void {
    this._cart.update((c) => ({ ...c, [id]: false }));
  }

  setAuto(id: string, value: boolean): void {
    this._auto.update((a) => ({ ...a, [id]: value }));
  }

  toggleOpen(id: string): void {
    this._open.update((o) => (o === id ? null : id));
  }

  /** Mismo texto para correo y WhatsApp. */
  buildQuoteText(c: QuoteContact): string {
    return (
      `Nombre: ${c.nombre}\n` +
      `Empresa: ${c.empresa}\n` +
      `Correo: ${c.correo}\n` +
      `Teléfono: ${c.telefono}\n\n` +
      `Módulos:\n` +
      this.selected()
        .map((m) => moduleSummaryLine(m, this.isAuto(m.id)))
        .join('\n')
    );
  }

  private restore(): void {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as { cart?: Record<string, boolean>; auto?: Record<string, boolean> };
      const valid = new Set(modules.map((m) => m.id));
      const keep = (r?: Record<string, boolean>) =>
        Object.fromEntries(Object.entries(r ?? {}).filter(([id, on]) => valid.has(id) && on === true));
      this._cart.set(keep(saved.cart));
      this._auto.set(keep(saved.auto));
    } catch {
      /* almacenamiento no disponible o JSON dañado: se arranca vacío */
    }
  }

  private persist(cart: Record<string, boolean>, auto: Record<string, boolean>): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ cart, auto }));
    } catch {
      /* modo privado o cuota llena: se ignora */
    }
  }
}

export function moduleSummaryLine(m: ErpModule, auto: boolean): string {
  if (!m.accounting) return `- ${m.name}`;
  return `- ${m.name}${auto ? ' (GENERA ASIENTO CONTABLE)' : ' (NO GENERA ASIENTO CONTABLE)'}`;
}
