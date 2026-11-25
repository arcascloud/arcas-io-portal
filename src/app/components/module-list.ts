import { Component, inject } from '@angular/core';
import { QuoteStore } from '../quote.store';
import { ModuleCard } from './module-card';

@Component({
  selector: 'app-module-list',
  imports: [ModuleCard],
  template: `
    <section id="modulos" class="wrap">
      <div class="chips">
        @for (t of store.tags; track t) {
          <button
            class="chip"
            [class.chip-on]="store.tag() === t"
            type="button"
            (click)="store.setTag(t)"
          >
            {{ t }}
          </button>
        }
      </div>

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
    </section>
  `,
  styles: `
    :host {
      display: block;
      padding-top: 64px;
      padding-bottom: 64px;
    }
    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
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
    .chip-on {
      background: var(--primary);
      border-color: var(--primary);
      color: var(--primary-fg);
    }
    .grid {
      margin-top: 32px;
      display: grid;
      gap: 20px;
    }
    @media (min-width: 768px) {
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    @media (min-width: 1024px) {
      .grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
  `,
})
export class ModuleList {
  protected readonly store = inject(QuoteStore);
}
