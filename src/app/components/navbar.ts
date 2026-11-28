import { Component, input } from '@angular/core';
import { CONTACT } from '../access.config';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="bar" aria-label="Principal">
      <div class="wrap row">
        <a class="brand" href="#inicio">Arcas<span>-IO</span></a>
        <div class="links">
          <a class="link hide-sm" href="#modulos">Módulos</a>
          <a class="link hide-sm" href="#servicios">Servicios</a>
          <a class="link hide-sm" href="#acceso">Acceso demo</a>
          <a class="link" href="#cotizar">
            Cotizar
            @if (count() > 0) {
              <span class="badge" [attr.aria-label]="count() + ' módulos en la cotización'">{{ count() }}</span>
            }
          </a>
          <a class="wa" [href]="waUrl" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </nav>
  `,
  styles: `
    :host { display: contents; }
    .bar {
      position: sticky;
      top: 0;
      z-index: 20;
      color: var(--primary-fg);
      background: oklch(0.2 0.04 255 / 88%);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid oklch(0.98 0.01 85 / 10%);
    }
    .row { display: flex; align-items: center; justify-content: space-between; gap: 16px; height: 56px; }
    .brand {
      font-family: 'Space Grotesk', system-ui, sans-serif;
      font-size: 1.15rem;
      font-weight: 700;
      text-decoration: none;
    }
    .brand span { color: var(--accent); }
    .links { display: flex; align-items: center; gap: 4px; }
    .link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: var(--radius);
      font-size: 0.875rem;
      text-decoration: none;
    }
    .link:hover { background: oklch(0.98 0.01 85 / 10%); }
    .badge {
      min-width: 20px;
      padding: 0 6px;
      border-radius: 999px;
      background: var(--accent);
      color: var(--accent-fg);
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 20px;
      text-align: center;
    }
    .wa {
      margin-left: 8px;
      padding: 8px 14px;
      border-radius: var(--radius);
      background: #25d366;
      color: #fff;
      font-size: 0.875rem;
      font-weight: 600;
      text-decoration: none;
    }
    @media (max-width: 640px) { .hide-sm { display: none; } }
  `,
})
export class Navbar {
  readonly count = input(0);
  protected readonly waUrl = `https://wa.me/${CONTACT.whatsapp}`;
}
