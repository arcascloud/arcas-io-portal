import { Component, input, output } from '@angular/core';
import { ErpModule } from '../modules.data';

@Component({
  selector: 'app-module-card',
  template: `
    <article class="card" [class.card-on]="selected()">
      <span class="eyebrow">{{ mod().tag }} · {{ count() }} funciones</span>
      <h3 class="name">{{ mod().name }}</h3>
      <p class="summary">{{ mod().summary }}</p>

      @if (mod().accounting) {
        <p class="note">✓ Disponible con o sin asiento contable automático</p>
      }

      <div class="actions">
        <button class="btn" type="button" (click)="openDetails.emit()">
          {{ open() ? 'Ocultar' : 'Detalles' }}
        </button>
        <button
          class="btn"
          [class.btn-accent]="selected()"
          [class.btn-primary]="!selected()"
          type="button"
          (click)="toggle.emit()"
        >
          {{ selected() ? 'Agregado ✓' : 'Agregar' }}
        </button>
      </div>

      @if (open()) {
        <div class="details">
          @for (g of mod().groups; track $index) {
            <div>
              @if (g.title) {
                <h4>{{ g.title }}</h4>
              }
              <ul>
                @for (item of g.items; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </div>
          }
        </div>
      }
    </article>
  `,
  styles: `
    .card {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--card);
      padding: 24px;
      box-shadow: var(--shadow-card);
    }
    .card-on {
      outline: 2px solid var(--accent);
      outline-offset: -2px;
    }
    .eyebrow {
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .name {
      margin-top: 8px;
      font-size: 1.2rem;
      font-weight: 700;
    }
    .summary {
      flex: 1;
      margin: 8px 0 0;
      font-size: 0.875rem;
      color: var(--muted);
    }
    .note {
      margin: 12px 0 0;
      font-size: 0.75rem;
      color: var(--muted);
    }
    .actions {
      display: flex;
      gap: 8px;
      margin-top: 20px;
    }
    .actions .btn {
      flex: 1;
    }
    .details {
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid var(--border);
      display: grid;
      gap: 16px;
    }
    .details h4 {
      margin-bottom: 4px;
      font-size: 0.875rem;
    }
    .details ul {
      margin: 0;
      padding-left: 18px;
      font-size: 0.875rem;
      color: var(--muted);
    }
    .details li {
      margin: 4px 0;
    }
  `,
})
export class ModuleCard {
  readonly mod = input.required<ErpModule>();
  readonly selected = input(false);
  readonly open = input(false);
  readonly toggle = output<void>();
  readonly openDetails = output<void>();

  protected count(): number {
    return this.mod().groups.reduce((n, g) => n + g.items.length, 0);
  }
}
