import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { moduleSummaryLine, QuoteStore } from '../quote.store';

/** Correo al que llegan todas las solicitudes de cotización de clientes. */
const SALES_EMAIL = 'arcas-io@yahoo.com';

interface QuoteData {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
}

@Component({
  selector: 'app-quote-form',
  imports: [FormField],
  template: `
    <form class="panel" (submit)="onSubmit($event)">
      <div class="field-row">
        <label class="label">
          Nombre
          <input class="field" type="text" [formField]="quoteForm.nombre" />
          @if (showError(quoteForm.nombre())) {
            <span class="error">{{ messageFor(quoteForm.nombre()) }}</span>
          }
        </label>

        <label class="label">
          Empresa
          <input class="field" type="text" [formField]="quoteForm.empresa" />
          @if (showError(quoteForm.empresa())) {
            <span class="error">{{ messageFor(quoteForm.empresa()) }}</span>
          }
        </label>

        <label class="label">
          Correo
          <input class="field" type="email" [formField]="quoteForm.correo" />
          @if (showError(quoteForm.correo())) {
            <span class="error">{{ messageFor(quoteForm.correo()) }}</span>
          }
        </label>

        <label class="label">
          Teléfono (opcional)
          <input class="field" type="tel" [formField]="quoteForm.telefono" />
        </label>
      </div>

      <button class="btn btn-primary submit" type="submit" [disabled]="store.count() === 0">
        Solicitar cotización
      </button>
      @if (store.count() === 0) {
        <p class="hint">Agregá al menos un módulo para poder solicitar.</p>
      }
    </form>
  `,
  styles: `
    :host {
      display: block;
    }
    .panel {
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--card);
      padding: 24px;
      box-shadow: var(--shadow-card);
    }
    .field-row {
      display: grid;
      gap: 12px;
    }
    .label {
      display: grid;
      gap: 6px;
      font-size: 0.875rem;
      font-weight: 500;
    }
    .error {
      color: oklch(0.577 0.245 27.325);
      font-size: 0.75rem;
      font-weight: 400;
    }
    .submit {
      width: 100%;
      margin-top: 16px;
      padding: 12px;
      font-weight: 600;
    }
    .hint {
      margin: 8px 0 0;
      font-size: 0.75rem;
      color: var(--muted);
    }
  `,
})
export class QuoteForm {
  private readonly store = inject(QuoteStore);

  protected readonly model = signal<QuoteData>({
    nombre: '',
    empresa: '',
    correo: '',
    telefono: '',
  });

  protected readonly quoteForm = form(this.model, (schemaPath) => {
    required(schemaPath.nombre, { message: 'Escribí tu nombre.' });
    required(schemaPath.empresa, { message: 'Escribí el nombre de tu empresa.' });
    required(schemaPath.correo, { message: 'Escribí tu correo.' });
    email(schemaPath.correo, { message: 'Escribí un correo válido.' });
  });

  protected showError(field: { touched: () => boolean; invalid: () => boolean }): boolean {
    return field.touched() && field.invalid();
  }

  protected messageFor(field: { errors: () => { message?: string }[] }): string {
    return field.errors()[0]?.message ?? '';
  }

  protected onSubmit(event: Event): void {
    event.preventDefault();

    submit(this.quoteForm, {
      action: async () => {
        const data = this.model();
        const body =
          `Nombre: ${data.nombre}\n` +
          `Empresa: ${data.empresa}\n` +
          `Correo: ${data.correo}\n` +
          `Teléfono: ${data.telefono}\n\n` +
          `Módulos:\n` +
          this.store
            .selected()
            .map((m) => moduleSummaryLine(m, this.store.isAuto(m.id)))
            .join('\n');

        window.location.href =
          `mailto:${SALES_EMAIL}` +
          `?subject=${encodeURIComponent('Cotización ERP - ' + data.empresa)}` +
          `&body=${encodeURIComponent(body)}`;
      },
    });
  }
}
