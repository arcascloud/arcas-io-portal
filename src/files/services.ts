import { Component } from '@angular/core';
import { CONTACT } from '../access.config';
import { devServices, saasService, Service } from '../services.data';

@Component({
  selector: 'app-services',
  template: `
    <section id="servicios" class="wrap">
      <p class="kicker">Servicios</p>
      <h2 class="head">ERP en la nube y desarrollo de software a la medida</h2>

      <article class="saas">
        <div>
          <span class="eyebrow">{{ saas.stack }}</span>
          <h3>{{ saas.name }}</h3>
          <p class="summary">{{ saas.summary }}</p>
          <a class="btn btn-accent" [href]="waLink(saas)" target="_blank" rel="noopener noreferrer">
            Consultar por WhatsApp
          </a>
        </div>
        <ul class="points">
          @for (p of saas.points; track p) {
            <li>{{ p }}</li>
          }
        </ul>
      </article>

      <h3 class="sub">Desarrollo de software a la medida</h3>
      <div class="grid">
        @for (s of dev; track s.id) {
          <article class="card">
            <span class="eyebrow">{{ s.stack }}</span>
            <h4 class="name">{{ s.name }}</h4>
            <p class="summary">{{ s.summary }}</p>
            <ul class="points">
              @for (p of s.points; track p) {
                <li>{{ p }}</li>
              }
            </ul>
            <a class="btn btn-primary cta" [href]="waLink(s)" target="_blank" rel="noopener noreferrer">
              Solicitar este servicio
            </a>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    :host { display: block; padding-bottom: 64px; }
    .kicker { margin: 0; font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); }
    .head { margin-top: 8px; max-width: 720px; font-size: clamp(1.5rem, 3.5vw, 2rem); line-height: 1.2; }
    .saas {
      display: grid;
      gap: 24px;
      margin-top: 32px;
      padding: 32px;
      border-radius: var(--radius);
      background: var(--hero);
      color: var(--primary-fg);
      box-shadow: var(--shadow-card);
    }
    .saas .eyebrow { color: var(--accent); }
    .saas .summary { color: inherit; opacity: 0.85; margin-bottom: 20px; }
    .sub { margin-top: 48px; font-size: 1.3rem; }
    .grid { margin-top: 20px; display: grid; gap: 20px; }
    .card {
      display: flex;
      flex-direction: column;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--card);
      padding: 24px;
      box-shadow: var(--shadow-card);
    }
    .eyebrow { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
    .name, .saas h3 { margin-top: 8px; font-size: 1.2rem; font-weight: 700; }
    .summary { margin: 8px 0 0; font-size: 0.9rem; color: var(--muted); }
    .points { margin: 16px 0 0; padding-left: 18px; font-size: 0.875rem; }
    .points li { margin: 6px 0; }
    .card .points { flex: 1; color: var(--muted); }
    .cta { margin-top: 20px; text-align: center; text-decoration: none; }
    @media (min-width: 768px) {
      .saas { grid-template-columns: 1.2fr 1fr; align-items: center; padding: 40px; }
      .saas .points { margin-top: 0; }
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
  `,
})
export class Services {
  protected readonly saas = saasService;
  protected readonly dev = devServices;

  protected waLink(s: Service): string {
    const text = `Hola, me interesa el servicio: ${s.name}`;
    return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
  }
}
