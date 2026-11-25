# Portal de ventas Arcas-IO — Angular 22

Catálogo de los 13 módulos ERP de Arcas-IO con cotizador: se filtran por
categoría, se agregan a la cotización, se elige si generan asiento contable y
se envía el pedido por correo.

## Requisitos

- Node.js 20 o superior (probado con Node 22)
- npm 10 o superior

## Puesta en marcha

```bash
npm install
npm start          # http://localhost:4200
```

## Build de producción

```bash
npm run build      # genera dist/arcas-io-portal
```

## Pruebas

```bash
npm test
```

## Estructura

| Archivo | Qué hace |
| --- | --- |
| `src/app/modules.data.ts` | Los 13 módulos con sus funciones. Editá acá para agregar o cambiar funciones. |
| `src/app/quote.store.ts` | Estado del cotizador en signals: filtro, módulos elegidos, asiento contable. |
| `src/app/components/hero.ts` | Menú con el logo y la portada. |
| `src/app/components/module-card.ts` | Tarjeta de un módulo: detalles, agregar/quitar. |
| `src/app/components/module-list.ts` | Filtros por categoría y grilla de tarjetas. |
| `src/app/components/quote-summary.ts` | Lista de lo elegido y la casilla de automatización contable. |
| `src/app/components/quote-form.ts` | Formulario con Signal Forms y envío por `mailto:`. |

## Cosas para ajustar

- **Correo de destino**: `src/app/components/quote-form.ts`, la constante
  `SALES_EMAIL`. Hoy apunta a `ventas@arcas-io.com`.
- **Logo**: `public/logo.png` (PNG transparente) y `public/favicon.png`.
- **Colores**: `src/styles.css`, todas las variables de la sección `:root`.

## Stack

Angular 22 con componentes standalone, signals para el estado, Signal Forms
(`@angular/forms/signals`) para el formulario y control flow nativo
(`@if` / `@for`). No usa NgModules ni `ngClass`.
