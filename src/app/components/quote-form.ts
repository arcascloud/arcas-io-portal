import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { CONTACT } from '../access.config';
import { QuoteContact, QuoteStore } from '../quote.store';

type Channel = 'mail' | 'wa';

@Component({
  selector: 'app-quote-form',
  imports: [FormField],
  template: `
    <form class="panel" (submit)="send('mail', $event)">
      <div class="field-row">
        <label class="label">
          Nombre
          <input class="field" type="text" autocomplete="name" [formField]="quoteForm.nombre" />
          @if (showError(quoteForm.nombre())) {
            <span class="error">{{ messageFor(quoteForm.nombre()) }}</span>
          }
        </label>

        <label class="label">
          Empresa
          <input class="field" type="text" autocomplete="organization" [formField]="quoteForm.empresa" />
          @if (showError(quoteForm.empresa())) {
            <span class="error">{{ messageFor(quoteForm.empresa()) }}</span>
          }
        </label>

        <label class="label">
          Correo
          <input class="field" type="email" autocomplete="email" [formField]="quoteForm.correo" />
          @if (showError(quoteForm.correo())) {
            <span class="error">{{ messageFor(quoteForm.correo()) }}</span>
          }
        </label>

        <label class="label">
          Teléfono (opcional)
          <input class="field" type="tel" autocomplete="tel" [formField]="quoteForm.telefono" />
        </label>
      </div>

      <div class="actions">
        <button class="btn btn-primary submit" type="submit" [disabled]="store.count() === 0">
          Enviar por correo
        </button>
        <button class="btn submit wa" type="button" [disabled]="store.count() === 0" (click)="send('wa')">
          Enviar por WhatsApp
        </button>
      </div>

      @if (store.count() === 0) {
        <p class="hint">Agregá al menos un módulo para poder solicitar.</p>
      }
      @if (enviado(); as canal) {
        <p class="ok" role="status">
          Abrimos {{ canal === 'wa' ? 'WhatsApp' : 'tu aplicación de correo' }} con tu solicitud.
          Si no se abrió, escribinos a {{ contact.email }}.
        </p>
      }
    </form>
  `,
  styles: `
    :host { display: block; }
    .panel { border: 1px solid var(--border); border-radius: var(--radius); background: var(--card); padding: 24px; box-shadow: var(--shadow-card); }
    .field-row { display: grid; gap: 12px; }
    .label { display: grid; gap: 6px; font-size: 0.875rem; font-weight: 500; }
    .error { color: oklch(0.577 0.245 27.325); font-size: 0.75rem; font-weight: 400; }
    .actions { display: grid; gap: 8px; margin-top: 16px; }
    .submit { padding: 12px; font-weight: 600; }
    .wa:not(:disabled) { background: #25d366; border-color: #25d366; color: #fff; }
    .hint, .ok { margin: 12px 0 0; font-size: 0.8rem; color: var(--muted); }
    @media (min-width: 480px) { .actions { grid-template-columns: 1fr 1fr; } }
  `,
})
export class QuoteForm {
  protected readonly store = inject(QuoteStore);
  protected readonly contact = CONTACT;
  protected readonly enviado = signal<Channel | null>(null);

  protected readonly model = signal<QuoteContact>({ nombre: '', empresa: '', correo: '', telefono: '' });

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

  protected send(channel: Channel, event?: Event): void {
    event?.preventDefault();

    submit(this.quoteForm, {
      action: async () => {
        const data = this.model();
        const text = this.store.buildQuoteText(data);

        this.enviado.set(channel);
        window.location.href =
          channel === 'wa'
            ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
            : `mailto:${CONTACT.email}` +
              `?subject=${encodeURIComponent('Cotización ERP - ' + data.empresa)}` +
              `&body=${encodeURIComponent(text)}`;
      },
    });
  }
}
