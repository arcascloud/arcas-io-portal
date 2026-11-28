import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { modules } from '../modules.data';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  template: `
    <header id="inicio" class="hero">
      <div class="wrap hero-body">
        <img ngSrc="/logo.png" width="286" height="10" priority alt="Arcas-IO" class="logo-big" />
        <p class="kicker">ERP modular</p>
        <h1 class="title">Arma el sistema que tu empresa necesita, módulo por módulo.</h1>
        <p class="lead">
          Ventas, inventario, finanzas, contabilidad y personas, en la nube o a tu medida. Además
          desarrollamos software con Angular, Jakarta EE, Spring Boot y microservicios.
        </p>

        <div class="cta">
          <a class="btn btn-accent big" href="#modulos">Armar mi cotización</a>
          <a class="btn ghost big" href="#servicios">Ver servicios</a>
        </div>

        <dl class="stats">
          <div><dt>{{ total }}</dt><dd>módulos integrados</dd></div>
          <div><dt>{{ categories }}</dt><dd>áreas de negocio</dd></div>
          <div><dt>{{ withAccounting }}</dt><dd>con asiento contable automático</dd></div>
        </dl>
      </div>
    </header>
  `,
  styles: `
    :host { display: block; }
    .hero { background: var(--hero); color: var(--primary-fg); }
    .hero-body { padding-top: 56px; padding-bottom: 80px; text-align: center; }
    .logo-big { width: 100%; max-width: 640px; height: auto; margin-bottom: 40px; }
    .kicker { margin: 0; font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); }
    .title { margin: 16px auto 0; max-width: 720px; font-size: clamp(2rem, 5vw, 3rem); line-height: 1.15; font-weight: 700; }
    .lead { margin: 24px auto 0; max-width: 560px; font-size: 1.1rem; opacity: 0.8; }
    .cta { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 32px; }
    .big { padding: 12px 20px; font-size: 1rem; text-decoration: none; }
    .ghost { border-color: oklch(0.98 0.01 85 / 30%); background: transparent; color: var(--primary-fg); }
    .stats {
      display: grid;
      gap: 16px;
      margin: 56px auto 0;
      max-width: 720px;
    }
    .stats div { padding: 16px; border: 1px solid oklch(0.98 0.01 85 / 15%); border-radius: var(--radius); }
    .stats dt { font-family: 'Space Grotesk', system-ui, sans-serif; font-size: 2rem; font-weight: 700; }
    .stats dd { margin: 4px 0 0; font-size: 0.85rem; opacity: 0.75; }
    @media (min-width: 640px) { .stats { grid-template-columns: repeat(3, 1fr); } }
  `,
})
export class Hero {
  protected readonly total = modules.length;
  protected readonly categories = new Set(modules.map((m) => m.tag)).size;
  protected readonly withAccounting = modules.filter((m) => m.accounting).length;
}
