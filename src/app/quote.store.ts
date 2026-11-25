import { Injectable, computed, signal } from '@angular/core';
import { ErpModule, modules } from './modules.data';

/**
 * Estado del cotizador: filtro por categoría, módulos elegidos, si generan
 * asiento contable y qué tarjeta está abierta.
 */
@Injectable({ providedIn: 'root' })
export class QuoteStore {
  private readonly _tag = signal('Todos');
  private readonly _cart = signal<Record<string, boolean>>({});
  private readonly _auto = signal<Record<string, boolean>>({});
  private readonly _open = signal<string | null>(null);

  readonly tag = this._tag.asReadonly();
  readonly open = this._open.asReadonly();

  readonly tags = ['Todos', ...Array.from(new Set(modules.map((m) => m.tag)))];

  readonly visible = computed(() =>
    modules.filter((m) => this._tag() === 'Todos' || m.tag === this._tag()),
  );

  readonly selected = computed(() => modules.filter((m) => this._cart()[m.id]));

  readonly count = computed(() => this.selected().length);

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
}

export function moduleSummaryLine(m: ErpModule, auto: boolean): string {
  if (!m.accounting) return `- ${m.name}`;
  return `- ${m.name}${auto ? ' (GENERA ASIENTO CONTABLE)' : ' (NO GENERA ASIENTO CONTABLE)'}`;
}
