import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  template: `
    <header class="hero">
      <nav class="wrap nav">
        <a class="btn btn-accent" href="#cotizar">Cotizar ({{ count() }})</a>
      </nav>

      <div class="wrap hero-body">
        <img ngSrc="/logo.png" width="286" height="10" alt="Arcas-IO" class="logo-big" />
        <p class="kicker">ERP modular</p>
        <h1 class="title">Arma el sistema que tu empresa necesita, módulo por módulo.</h1>
        <p class="lead">
          13 módulos integrados: ventas, inventario, finanzas, contabilidad y
          personas. Con o sin automatización contable.
        </p>
        <a class="btn ghost" href="#modulos">Ver módulos</a>
      </div>
    </header>
  `,
  styles: `
    :host {
      display: block;
    }
    .hero {
      background: var(--hero);
      color: var(--primary-fg);
    }
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .logo {
      height: 40px;
      width: auto;
      max-width: 60%;
    }
    .hero-body {
      padding-top: 40px;
      padding-bottom: 96px;
      text-align: center;
    }
    .logo-big {
      width: 100%;
      max-width: 640px;
      height: auto;
      margin-bottom: 40px;
    }
    .kicker {
      margin: 0;
      font-size: 0.8rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--accent);
    }
    .title {
      margin: 16px auto 0;
      max-width: 720px;
      font-size: clamp(2rem, 5vw, 3rem);
      line-height: 1.15;
      font-weight: 700;
    }
    .lead {
      margin: 24px auto 0;
      max-width: 560px;
      font-size: 1.1rem;
      opacity: 0.8;
    }
    .ghost {
      display: inline-block;
      margin-top: 32px;
      padding: 12px 20px;
      text-decoration: none;
      border: 1px solid oklch(0.98 0.01 85 / 30%);
      background: transparent;
      color: var(--primary-fg);
      border-radius: var(--radius);
    }
  `,
})
export class Hero {
  readonly count = input(0);
}
