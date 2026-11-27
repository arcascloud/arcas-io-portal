import { TestBed } from '@angular/core/testing';
import { Login } from './components/login';

describe('Login', () => {
  let login: Login;

  beforeEach(() => {
    TestBed.resetTestingModule();
    login = TestBed.runInInjectionContext(() => new Login());
  });

  it('acepta las credenciales demo', () => {
    login.usuario.set('demo');
    login.clave.set('demo123');
    login.onSubmit(new Event('submit'));
    expect(login.autenticado()).toBe(true);
    expect(login.error()).toBe('');
  });

  it('rechaza credenciales incorrectas', () => {
    login.usuario.set('demo');
    login.clave.set('mala');
    login.onSubmit(new Event('submit'));
    expect(login.autenticado()).toBe(false);
    expect(login.error()).toBe('Usuario o contraseña incorrectos.');
  });
});
