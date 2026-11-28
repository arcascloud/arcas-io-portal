import { Component, inject } from '@angular/core';
import { modules } from '../modules.data';
import { QuoteStore } from '../quote.store';
import { ModuleCard } from './module-card';

@Component({
  selector: 'app-module-list',
  imports: [ModuleCard],
  template: `
    <section id="modulos" class="wrap">
      <input
        #q
        class="field search"
        type="search"
        placeholder="Buscá una función: kardex, planilla, cheques, conciliación…"
        aria-label="Buscar módulos o funciones"
        [value]="store.query()"
        (input)="store.setQuery(q.value)"
      />

      <div class="chips">
        @for (t of store.tags; track t) {
          <button
            class="chip"
            [class.chip-on]="store.tag() === t"
            [attr.aria-pressed]="store.tag() === t"
            type="button"
            (click)="store.setTag(t)"
          >
            {{ t }}
          </button>
        }
      </div>

      <p class="count" aria-live="polite">{{ store.visible().length }} de {{ total }} módulos</p>

      <div class="grid">
        @for (m of store.visible(); track m.id) {
          <app-module-card
            [mod]="m"
            [selected]="store.isCarted(m.id)"
            [open]="store.isOpen(m.id)"
            (toggle)="store.toggle(m.id)"
            (openDetails)="store.toggleOpen(m.id)"
          />
        }
      </div>

      @if (store.visible().length === 0) {
        <div class="empty">
          <p>No encontramos módulos para esa búsqueda.</p>
          <button class="btn" type="button" (click)="store.clearFilters()">Limpiar filtros</button>
        </div>
      }
    </section>
  `,
  styles: `
    :host { display: block; padding-top: 64px; padding-bottom: 64px; }
    .search { max-width: 520px; margin-bottom: 16px; }
    .chips { display: flex; flex-wrap: wrap; gap: 8px; }
    .chip {
      border: 1px solid var(--border);
      border-radius: 999px;
      background: var(--card);
      color: var(--fg);
      padding: 6px 16px;
      font: inherit;
      font-size: 0.875rem;
      cursor: pointer;
    }
    .chip-on { background: var(--primary); border-color: var(--primary); color: var(--primary-fg); }
    .count { margin: 16px 0 0; font-size: 0.8rem; color: var(--muted); }
    .grid { margin-top: 16px; display: grid; gap: 20px; }
    .empty { margin-top: 32px; text-align: center; color: var(--muted); }
    @media (min-width: 768px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
  `,
})
export class ModuleList {
  protected readonly store = inject(QuoteStore);
  protected readonly total = modules.length;
}
