# ERP Arcas - Código Fuente Completo
> Generado automáticamente el 27/11/2026, 6:21:48 p. m.

---

## 📄 angular.json

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "cli": {
    "packageManager": "npm"
  },
  "newProjectRoot": "projects",
  "projects": {
    "arcas-io-portal": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "browser": "src/main.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              {
                "glob": "**/*",
                "input": "public"
              }
            ],
            "styles": ["src/styles.css"]
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "4kB",
                  "maximumError": "8kB"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "arcas-io-portal:build:production"
            },
            "development": {
              "buildTarget": "arcas-io-portal:build:development"
            }
          },
          "defaultConfiguration": "development",
          "options": {
            "port": 4001
          }
        },
        "test": {
          "builder": "@angular/build:unit-test"
        }
      }
    }
  }
}

```

---

## 📄 tsconfig.json

```json
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true
  },
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.spec.json"
    }
  ]
}

```

---

## 📄 package.json

```json
{
  "name": "arcas-io-portal",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "packageManager": "npm@10.9.9",
  "dependencies": {
    "@angular/common": "^22.3.0",
    "@angular/compiler": "^22.3.0",
    "@angular/core": "^22.3.0",
    "@angular/forms": "^22.3.0",
    "@angular/platform-browser": "^22.3.0",
    "@angular/router": "^22.3.0",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0"
  },
  "devDependencies": {
    "@angular/build": "^22.3.0",
    "@angular/cli": "^22.3.0",
    "@angular/compiler-cli": "^22.3.0",
    "jsdom": "^31.0.0",
    "prettier": "^3.8.1",
    "typescript": "~6.0.2",
    "vitest": "^5.0.0"
  }
}

```

---

## 📄 src\app\access.config.ts

```typescript
export const ACCESS_URLS = {
  portal: 'https://arcas-io.vercel.app',
  api: 'https://arcas-io.onrender.com',
  hn: 'https://hn.arcas-io.workers.dev',
} as const;

export const DEMO_CREDENTIALS = {
  usuario: 'demo',
  contraseña: 'demo123',
} as const;

export const ACCESS_SERVICES = [
  { label: 'Portal (Vercel)', url: ACCESS_URLS.portal },
  { label: 'API (Render)', url: ACCESS_URLS.api },
  { label: 'HN (Cloudflare Workers)', url: ACCESS_URLS.hn },
] as const;

```

---

## 📄 src\app\app.config.ts

```typescript
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes)],
};

```

---

## 📄 src\app\app.css

```typescript
.quote {
  background: var(--secondary);
  margin-top: 32px;
}

.quote-grid {
  display: grid;
  gap: 40px;
  padding-top: 64px;
  padding-bottom: 64px;
}

@media (min-width: 768px) {
  .quote-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.foot {
  padding: 32px 0;
  text-align: center;
  font-size: 0.875rem;
  color: var(--muted);
}

.foot a {
  color: inherit;
  font-weight: 600;
  text-decoration: none;
}

```

---

## 📄 src\app\app.html

```typescript
<app-hero [count]="store.count()" />

<main>
  <app-module-list />

  <app-login />

  <section id="cotizar" class="quote">
    <div class="wrap quote-grid">
      <app-quote-summary />
      <app-quote-form />
    </div>
  </section>
</main>

<footer class="foot">
  © {{ year }} Arcas-IO · Contáctenos al WhatsApp:
  <a href="https://wa.me/50494809806" target="_blank" rel="noopener noreferrer">+504 9480-9806</a>
</footer>

```

---

## 📄 src\app\app.routes.ts

```typescript
import { Routes } from '@angular/router';

export const routes: Routes = [];

```

---

## 📄 src\app\app.ts

```typescript
import { Component, inject } from '@angular/core';
import { Hero } from './components/hero';
import { Login } from './components/login';
import { ModuleList } from './components/module-list';
import { QuoteForm } from './components/quote-form';
import { QuoteSummary } from './components/quote-summary';
import { QuoteStore } from './quote.store';

@Component({
  imports: [Hero, ModuleList, Login, QuoteSummary, QuoteForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly store = inject(QuoteStore);
  protected readonly year = new Date().getFullYear();
}

```

---

## 📄 src\app\components\hero.ts

```typescript
import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  template: `
    <header class="hero">
      <nav class="wrap nav">
        <a class="btn ghost" href="#acceso">Acceso demo</a>
        <a class="btn ghost" href="#cotizar">Cotizar ({{ count() }})</a>
        <a class="btn ghost whatsapp" href="https://wa.me/50494809806" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp
        </a>
      </nav>

      <div class="wrap hero-body">
        <img ngSrc="/logo.png" width="286" height="10" alt="Arcas-IO" class="logo-big" />
        <p class="kicker">ERP modular</p>
        <h1 class="title">Arma el sistema que tu empresa necesita, módulo por módulo.</h1>
        <p class="lead">
          14 módulos integrados: ventas, inventario, finanzas, contabilidad y personas. Con o sin
          automatización contable.
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
      justify-content: flex-end;
      gap: 16px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .nav .ghost {
      margin-top: 0;
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
    .whatsapp {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border-color: #25d366;
      background: #25d366;
      color: #fff;
      font-weight: 600;
    }
    .whatsapp svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
      flex: none;
    }
  `,
})
export class Hero {
  readonly count = input(0);
}

```

---

## 📄 src\app\components\login.ts

```typescript
import { Component, signal } from '@angular/core';
import { ACCESS_SERVICES, DEMO_CREDENTIALS } from '../access.config';

@Component({
  selector: 'app-login',
  template: `
    <section id="acceso" class="wrap acceso">
      <h2>Acceso demo</h2>
      <p class="intro">Ingresá con el usuario de demostración para ver los accesos del sistema.</p>

      @if (autenticado()) {
        <div class="panel">
          <p class="ok">Sesión iniciada como {{ DEMO_CREDENTIALS.usuario }}.</p>
          <ul class="links">
            @for (service of services; track service.url) {
              <li>
                <a [href]="service.url" target="_blank" rel="noopener noreferrer">
                  {{ service.label }}
                </a>
                <span class="url">{{ service.url }}</span>
              </li>
            }
          </ul>
          <button class="btn" type="button" (click)="salir()">Cerrar sesión</button>
        </div>
      } @else {
        <form class="panel" (submit)="onSubmit($event)">
          <label class="label">
            Usuario
            <input #usuarioInput class="field" type="text" autocomplete="username"
              [value]="usuario()" (input)="usuario.set(usuarioInput.value)" />
          </label>
          <label class="label">
            Contraseña
            <input #claveInput class="field" type="password" autocomplete="current-password"
              [value]="clave()" (input)="clave.set(claveInput.value)" />
          </label>
          <button class="btn btn-primary submit" type="submit">Ingresar</button>
          @if (error()) {
            <p class="error" role="alert">{{ error() }}</p>
          }
        </form>
      }
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
    .acceso {
      padding-bottom: 64px;
    }
    h2 {
      font-size: 1.5rem;
    }
    .intro {
      margin: 8px 0 24px;
      color: var(--muted);
    }
    .panel {
      max-width: 420px;
      display: grid;
      gap: 12px;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--card);
      padding: 24px;
      box-shadow: var(--shadow-card);
    }
    .label {
      display: grid;
      gap: 6px;
      font-size: 0.875rem;
      font-weight: 500;
    }
    .submit {
      padding: 10px;
      font-weight: 600;
    }
    .error {
      margin: 0;
      color: oklch(0.577 0.245 27.325);
      font-size: 0.875rem;
    }
    .ok {
      margin: 0;
      font-size: 0.875rem;
      font-weight: 600;
    }
    .links {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 12px;
    }
    .links a {
      font-weight: 500;
    }
    .url {
      display: block;
      margin-top: 2px;
      color: var(--muted);
      font-size: 0.75rem;
      overflow-wrap: anywhere;
    }
  `,
})
export class Login {
  protected readonly DEMO_CREDENTIALS = DEMO_CREDENTIALS;
  protected readonly services = ACCESS_SERVICES;

  readonly usuario = signal('');
  readonly clave = signal('');
  readonly autenticado = signal(false);
  readonly error = signal('');

  onSubmit(event: Event): void {
    event.preventDefault();

    if (
      this.usuario() === DEMO_CREDENTIALS.usuario &&
      this.clave() === DEMO_CREDENTIALS.contraseña
    ) {
      this.autenticado.set(true);
      this.error.set('');
      return;
    }

    this.error.set('Usuario o contraseña incorrectos.');
  }

  protected salir(): void {
    this.autenticado.set(false);
    this.clave.set('');
    this.error.set('');
  }
}

```

---

## 📄 src\app\components\module-card.ts

```typescript
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

```

---

## 📄 src\app\components\module-list.ts

```typescript
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

```

---

## 📄 src\app\components\quote-form.ts

```typescript
import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { moduleSummaryLine, QuoteStore } from '../quote.store';

/** Correo al que llegan todas las solicitudes de cotización de clientes. */
const SALES_EMAIL = 'arcas.io@yahoo.com';

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

```

---

## 📄 src\app\components\quote-summary.ts

```typescript
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

```

---

## 📄 src\app\modules.data.ts

```typescript
export type Group = { title?: string; items: string[] };

export type ErpModule = {
  id: string;
  name: string;
  tag: string;
  summary: string;
  accounting?: boolean;
  groups: Group[];
};

export const modules: ErpModule[] = [
  {
    id: 'pos-comercial',
    name: 'POS Comercial',
    tag: 'Ventas',
    accounting: true,
    summary: 'Facturación, punto de venta y canal online para comercios.',
    groups: [
      {
        title: 'Facturación',
        items: [
          'Tablero de gráficos y estadísticas',
          'Punto de ventas mono-usuario (escritorio, tablet y móvil)',
          'Punto de ventas multi-usuario (escritorio, tablet y móvil)',
          'Caja única',
          'Cotizaciones in situ (Oficina/Sucursal)',
          'Pedidos in situ (Oficina/Sucursal)',
          'Descuentos',
          'Control de arqueo de cajas',
          'Control de pagos TodoPagoLink',
          'Control de ofertas y combos (escritorio, tablet y móvil)',
        ],
      },
    ],
  },
  {
    id: 'pos-restaurantes',
    name: 'POS para Restaurantes',
    tag: 'Ventas',
    accounting: true,
    summary: 'Caja, meseros y cocina conectados en tiempo real.',
    groups: [
      {
        items: [
          'Caja y punto de ventas para restaurantes (escritorio, tablet y móvil)',
          'Control de ventas para meseros (escritorio, tablet y móvil)',
          'Monitoreo y despacho de pedidos en cocina',
          'Control de ofertas y combos',
          'Descuentos',
          'Control de arqueo de cajas',
          'Cotizaciones in situ (Oficina/Sucursal)',
          'Pedidos in situ (Oficina/Sucursal)',
        ],
      },
    ],
  },

  {
    id: 'front-store',
    name: 'Canal de ventas online',
    tag: 'Ventas',
    accounting: true,
    summary: 'Carrito de compras en linea, pedidos en linea.',
    groups: [
      {
        items: [
          'Canal de ventas online (escritorio, tablet y móvil)',
          'Pedidos de ventas online (escritorio, tablet y móvil)',
          'Consulta de pedidos',
          'Catálogo de productos',
          'Bodegas',
          'Departamentos',
          'Categorías',
          'Marcas',
          'Modelos',
          'Colores',
          'Embalajes',
          'Unidades de medida',
          'Ubicaciones',
          'Pasillos',
        ],
      },
    ],
  },

  {
    id: 'inventarios',
    name: 'Inventarios',
    tag: 'Operaciones',
    accounting: true,
    summary: 'Existencias, traslados, kardex y compras con trazabilidad total.',
    groups: [
      {
        items: [
          'Tablero de gráficos y estadísticas',
          'Catálogo de productos',
          'Control de existencias',
          'Toma de inventario físico',
          'Ajustes de entrada y salida de inventario',
          'Traslados de inventario entre sucursales',
          'Requisiciones hechas por las sucursales',
          'Kardex para auditoría de trazabilidad de productos',
          'Compras: registro de compras al inventario',
          'Consulta de compras en todo momento',
          'Utilería recalcular existencias: reconstruye la existencia real por producto',
        ],
      },
      {
        title: 'Catálogos de inventario',
        items: [
          'Bodegas',
          'Departamentos',
          'Categorías',
          'Marcas',
          'Modelos',
          'Colores',
          'Embalajes',
          'Unidades de medida',
          'Ubicaciones',
          'Pasillos',
          'Casas farmacéuticas',
          'Tags',
        ],
      },
    ],
  },
  {
    id: 'cxc',
    name: 'Cuentas por Cobrar / Cuenta Corriente',
    tag: 'Finanzas',
    accounting: true,
    summary: 'Clientes, cargos y abonos, antigüedad de saldos y cortes.',
    groups: [
      {
        items: [
          'Control de caja',
          'Catálogo de clientes',
          'Movimientos por cliente (Débitos/Créditos o Cargos/Abonos)',
          'Consulta de histórico de movimientos',
          'Balance de antigüedad de saldos',
          'Cartas de vencimiento',
          'Corte de caja',
        ],
      },
    ],
  },
  {
    id: 'prestamos',
    name: 'Préstamos',
    tag: 'Finanzas',
    accounting: true,
    summary: 'Otorga préstamos y genera planes de pago de cuota nivelada.',
    groups: [
      {
        items: [
          'Control de caja',
          'Catálogo de clientes',
          'Control de préstamos',
          'Generación de planes de pago (cuota nivelada)',
          'Movimientos por cliente (Débitos/Créditos o Cargos/Abonos)',
          'Consulta de histórico de movimientos',
          'Balance de antigüedad de saldos',
          'Cartas de vencimiento',
          'Corte de caja',
        ],
      },
    ],
  },
  {
    id: 'cxp',
    name: 'Cuentas por Pagar',
    tag: 'Finanzas',
    accounting: true,
    summary: 'Proveedores, compras y movimientos bajo control.',
    groups: [
      {
        items: [
          'Catálogo de proveedores',
          'Registro de compras',
          'Control de movimientos',
          'Consulta de histórico',
        ],
      },
    ],
  },
  {
    id: 'bancos',
    name: 'Bancos y Cuentas Bancarias',
    tag: 'Finanzas',
    summary: 'Movimientos, cheques y conciliación bancaria.',
    groups: [
      {
        items: [
          'Catálogo de bancos y cuentas bancarias',
          'Movimientos bancarios: depósitos, retiros, notas de débito, notas de crédito, transferencias',
          'Emisión de cheques a proveedores',
          'Emisión de cheques eventuales a particulares/profesionales',
          'Re-impresión de cheques',
          'Conciliación bancaria',
          'Consulta de historial de movimientos bancarios',
          'Anulación de cheques',
        ],
      },
    ],
  },
  {
    id: 'contabilidad',
    name: 'Contabilidad Financiera',
    tag: 'Contabilidad',
    summary: 'Libros, cierres, plantillas y estados financieros.',
    groups: [
      {
        title: 'Operaciones diarias',
        items: [
          'Tablero de gráficos y estadísticas contables',
          'Registro de asientos de diario',
          'Registro de factor de cambio',
        ],
      },
      {
        title: 'Libros contables',
        items: [
          'Libro diario',
          'Libro de balance ajustado',
          'Libro de mayores',
          'Libro de saldos anuales',
        ],
      },
      {
        title: 'Controles',
        items: [
          'Reclasificación de cuentas',
          'Periodos fiscales',
          'Cierre contable',
          'Reversión de cierre contable',
        ],
      },
      {
        title: 'Plantillas',
        items: ['Asientos recurrentes', 'Balances financieros'],
      },
      {
        title: 'Reportes',
        items: ['Balance a demanda', 'Balance financiero', 'Estado de resultado'],
      },
      {
        title: 'Catálogos',
        items: [
          'Plan de cuentas contables',
          'Naturaleza de cuenta contable',
          'Niveles contables',
          'Grupo contable',
          'Tipos de documentos fiscales',
          'Impuesto sobre la renta',
          'Impuesto vecinal',
        ],
      },
    ],
  },
  {
    id: 'rrhh',
    name: 'Recursos Humanos',
    tag: 'Personas',
    summary: 'Asistencia, empleados, planilla y recibos de pago.',
    groups: [
      { title: 'Operaciones diarias', items: ['Registro de asistencia'] },
      {
        title: 'Catálogo de empleados',
        items: [
          'Resumen de ingresos por empleado',
          'Resumen de retenciones por empleado',
        ],
      },
      {
        title: 'Controles',
        items: [
          'Autorización de bonificaciones',
          'Autorización de horas extras',
          'Aprobación de obligaciones y bonificaciones (mensual)',
          'Emisión de planilla y recibos de pago',
        ],
      },
      {
        title: 'Catálogos',
        items: [
          'Puestos',
          'Profesiones',
          'Tipos de movimientos',
          'Titulaciones',
          'Certificaciones',
        ],
      },
    ],
  },
  {
    id: 'usuarios',
    name: 'Usuarios',
    tag: 'Administración',
    summary: 'Usuarios, roles y permisos granulares.',
    groups: [
      {
        title: 'Catálogo',
        items: ['Usuarios: registro de nuevos usuarios y cambios de contraseña'],
      },
      {
        title: 'Autorizaciones',
        items: [
          'Módulos por usuario',
          'Roles por usuario',
          'Ítems por usuario',
          'Tareas programadas por usuario',
          'Caja por usuario',
          'Fechas contables retroactivas',
        ],
      },
    ],
  },
  {
    id: 'catalogos',
    name: 'Catálogos Generales',
    tag: 'Administración',
    summary: 'La base de datos maestra de tu empresa.',
    groups: [
      {
        items: [
          'Formas de pago',
          'Tarjetas de crédito',
          'Precios de venta',
          'Gestores',
          'Cajeros',
          'Impuestos',
          'Monedas',
          'Países',
          'Departamentos del país',
          'Departamentos de la empresa',
          'Direcciones',
          'Teléfonos',
          'Pasatiempos',
          'Zonas',
          'Proformas',
          'Zonas de venta/cobro',
          'Estados',
          'Días de cobro',
        ],
      },
    ],
  },
  {
    id: 'configuracion',
    name: 'Configuración',
    tag: 'Administración',
    summary: 'Parámetros de empresa, CAI y sistema.',
    groups: [
      {
        items: [
          'Control de cambio de fecha',
          'Parámetros de CAI',
          'Parámetros de empresas',
          'Parámetros de configuración',
        ],
      },
    ],
  },
  {
    id: 'reportes',
    name: 'Reportes',
    tag: 'Análisis',
    summary: 'Ventas, CxC y CxP listos para decidir.',
    groups: [
      {
        title: 'Ventas',
        items: [
          'Ventas por rango de fechas',
          'Ventas por gestor y rango',
          'Ventas anuladas por rango',
          'Ventas contado/crédito',
          'Ventas por forma de pago',
        ],
      },
      { title: 'CxC', items: ['Movimientos por cliente'] },
      { title: 'CxP', items: ['Movimientos por proveedor'] },
    ],
  },
];

```

---

## 📄 src\app\quote.store.ts

```typescript
import { Injectable, computed, signal } from '@angular/core';
import { ErpModule, modules } from './modules.data';

/**
 * Estado del cotizador: filtro por categoría, módulos elegidos, si generan
 * asiento contable y qué tarjeta está abierta.
 */
@Injectable({ providedIn: 'root' })
export class QuoteStore {
  private readonly _tag = signal('Todos');
  private readonly _cart = signal<Record<string, boolean>>({});
  private readonly _auto = signal<Record<string, boolean>>({});
  private readonly _open = signal<string | null>(null);

  readonly tag = this._tag.asReadonly();
  readonly open = this._open.asReadonly();

  readonly tags = ['Todos', ...Array.from(new Set(modules.map((m) => m.tag)))];

  readonly visible = computed(() =>
    modules.filter((m) => this._tag() === 'Todos' || m.tag === this._tag()),
  );

  readonly selected = computed(() => modules.filter((m) => this._cart()[m.id]));

  readonly count = computed(() => this.selected().length);

  isCarted(id: string): boolean {
    return !!this._cart()[id];
  }

  isAuto(id: string): boolean {
    return !!this._auto()[id];
  }

  isOpen(id: string): boolean {
    return this._open() === id;
  }

  setTag(tag: string): void {
    this._tag.set(tag);
  }

  toggle(id: string): void {
    this._cart.update((c) => ({ ...c, [id]: !c[id] }));
  }

  remove(id: string): void {
    this._cart.update((c) => ({ ...c, [id]: false }));
  }

  setAuto(id: string, value: boolean): void {
    this._auto.update((a) => ({ ...a, [id]: value }));
  }

  toggleOpen(id: string): void {
    this._open.update((o) => (o === id ? null : id));
  }
}

export function moduleSummaryLine(m: ErpModule, auto: boolean): string {
  if (!m.accounting) return `- ${m.name}`;
  return `- ${m.name}${auto ? ' (GENERA ASIENTO CONTABLE)' : ' (NO GENERA ASIENTO CONTABLE)'}`;
}

```

---

## 📄 src\index.html

```typescript
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Arcas-IO | Módulos ERP para tu empresa</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="POS, inventarios, contabilidad, bancos, RRHH y más. Arma tu ERP Arcas-IO por módulos y solicita tu cotización."
    />
    <meta property="og:title" content="Arcas-IO | Módulos ERP para tu empresa" />
    <meta
      property="og:description"
      content="Arma tu ERP por módulos y solicita tu cotización."
    />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/png" href="favicon.png" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>

```

---

## 📄 src\main.ts

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));

```

---

## 📄 src\styles.css

```typescript
/*
 * Paleta Arcas-IO: azul marino + acero, tomada del logo.
 * Todo el color pasa por estas variables; los componentes no hardcodean tonos.
 */
:root {
  --bg: oklch(0.975 0.005 250);
  --fg: oklch(0.2 0.03 250);
  --card: oklch(1 0 0);
  --muted: oklch(0.5 0.03 250);
  --border: oklch(0.89 0.012 250);
  --primary: oklch(0.27 0.06 250);
  --primary-fg: oklch(0.98 0.01 85);
  --secondary: oklch(0.93 0.012 250);
  --accent: oklch(0.82 0.06 230);
  --accent-fg: oklch(0.2 0.03 250);
  --hero: radial-gradient(
      ellipse at 50% 0%,
      oklch(0.45 0.07 245 / 70%),
      transparent 60%
    ),
    linear-gradient(180deg, oklch(0.27 0.05 250), oklch(0.2 0.04 255));
  --shadow-card: 0 20px 40px -24px oklch(0.27 0.06 250 / 35%);
  --radius: 0.5rem;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font-family:
    "IBM Plex Sans",
    system-ui,
    -apple-system,
    "Segoe UI",
    sans-serif;
}

h1,
h2,
h3,
h4 {
  font-family: "Space Grotesk", system-ui, sans-serif;
  margin: 0;
}

a {
  color: inherit;
}

.wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.btn {
  border-radius: var(--radius);
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--fg);
  padding: 8px 12px;
  font: inherit;
  font-size: 0.875rem;
  cursor: pointer;
}

.btn-primary {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--primary-fg);
  font-weight: 600;
}

.btn-accent {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-fg);
  font-weight: 600;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.field {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--card);
  color: var(--fg);
  padding: 10px 12px;
  font: inherit;
}

.field:focus-visible,
.btn:focus-visible {
  outline: 2px solid oklch(0.6 0.1 240);
  outline-offset: 2px;
}

```

---

