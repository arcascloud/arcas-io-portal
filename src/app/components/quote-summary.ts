import { Component, inject } from '@angular/core';
import { QuoteStore } from '../quote.store';

@Component({
  selector: 'app-quote-summary',
  template: `
    <div>
      <h2>Tu cotización</h2>

      @if (store.count() === 0) {
        <p class="empty">Agrega módulos desde el catálogo.</p>
      } @else {
        <ul class="list">
          @for (m of store.selected(); track m.id) {
            <li class="row">
              <div class="head">
                <span class="name">{{ m.name }}</span>
                <button class="link" type="button" (click)="store.remove(m.id)">
                  Quitar
                </button>
              </div>

              @if (m.accounting) {
                <label class="check">
                  <input
                    type="checkbox"
                    [checked]="store.isAuto(m.id)"
                    (change)="store.setAuto(m.id, $any($event.target).checked)"
                  />
                  Con automatización contable (genera asiento)
                </label>
              }
            </li>
          }
        </ul>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
    h2 {
      font-size: 1.9rem;
      font-weight: 700;
    }
    .empty {
      margin-top: 16px;
      color: var(--muted);
    }
    .list {
      margin: 24px 0 0;
      padding: 0;
      list-style: none;
      display: grid;
      gap: 12px;
    }
    .row {
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--card);
      padding: 16px;
    }
    .head {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: baseline;
    }
    .name {
      font-weight: 600;
    }
    .link {
      border: 0;
      background: none;
      color: var(--muted);
      font: inherit;
      font-size: 0.875rem;
      cursor: pointer;
      padding: 0;
    }
    .check {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
      font-size: 0.875rem;
    }
  `,
})
export class QuoteSummary {
  protected readonly store = inject(QuoteStore);
}
