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
