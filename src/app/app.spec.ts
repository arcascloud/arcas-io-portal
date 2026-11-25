import { TestBed } from '@angular/core/testing';
import { modules } from './modules.data';
import { moduleSummaryLine, QuoteStore } from './quote.store';

describe('QuoteStore', () => {
  let store: QuoteStore;

  beforeEach(() => {
    TestBed.resetTestingModule();
    store = TestBed.runInInjectionContext(() => new QuoteStore());
  });

  it('tiene los 13 módulos de Arcas-IO', () => {
    expect(modules.length).toBe(13);
  });

  it('filtra por categoría', () => {
    store.setTag('Finanzas');
    expect(store.visible().map((m) => m.id)).toEqual([
      'cxc',
      'prestamos',
      'cxp',
      'bancos',
    ]);
    expect(store.tag()).toBe('Finanzas');
  });

  it('cuenta los módulos agregados y los quita', () => {
    store.toggle('pos-comercial');
    store.toggle('inventarios');
    expect(store.count()).toBe(2);
    expect(store.isCarted('pos-comercial')).toBe(true);

    store.remove('pos-comercial');
    expect(store.count()).toBe(1);
    expect(store.isCarted('pos-comercial')).toBe(false);
  });

  it('marca si un módulo genera asiento contable', () => {
    store.setAuto('pos-comercial', true);
    expect(store.isAuto('pos-comercial')).toBe(true);
    store.setAuto('pos-comercial', false);
    expect(store.isAuto('pos-comercial')).toBe(false);
  });

  it('abre y cierra la tarjeta de un módulo', () => {
    store.toggleOpen('contabilidad');
    expect(store.isOpen('contabilidad')).toBe(true);
    store.toggleOpen('contabilidad');
    expect(store.isOpen('contabilidad')).toBe(false);
  });
});

describe('moduleSummaryLine', () => {
  const pos = modules.find((m) => m.id === 'pos-comercial')!;
  const bancos = modules.find((m) => m.id === 'bancos')!;

  it('aclara que el módulo genera asiento cuando está activado', () => {
    expect(moduleSummaryLine(pos, true)).toBe(
      '- POS Comercial (GENERA ASIENTO CONTABLE)',
    );
  });

  it('aclara que el módulo no genera asiento cuando está desactivado', () => {
    expect(moduleSummaryLine(pos, false)).toBe(
      '- POS Comercial (NO GENERA ASIENTO CONTABLE)',
    );
  });

  it('no habla de asiento en módulos que no lo tienen', () => {
    expect(moduleSummaryLine(bancos, false)).toBe('- Bancos y Cuentas Bancarias');
  });
});
