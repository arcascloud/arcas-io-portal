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
