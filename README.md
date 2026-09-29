# 📚 BookList / Vue Product Showcase

Prototipo de catálogo de libros hecho con **Vue.js**, para la evaluación del Módulo 7 de Alkemy.

## ¿Qué hace esta app?

- Muestra una lista de libros que vienen de una pequeña base de datos (una API falsa que simula ser real).
- Deja buscar libros por título o autor, y filtrar por categoría.
- Deja marcar libros como favoritos.
- Deja agregar libros nuevos desde un formulario.
- Tiene un botón para cambiar entre tema claro y tema oscuro 🌙☀️.
- Tiene pruebas automáticas que revisan que el código funcione bien solo.

## Tecnologías usadas (explicadas simple)

| Herramienta | Para qué sirve, en simple |
|---|---|
| **Vue.js** | El framework principal: arma la interfaz y hace que reaccione a los datos. |
| **Vue CLI** | La herramienta que crea y compila el proyecto. |
| **Vuex** | Guarda los datos (libros, filtros, favoritos) en un solo lugar central, para que todas las pantallas los vean igual. |
| **Axios** | Se encarga de pedir los datos a la API (como pedirle un dato a otra página por internet). |
| **json-server** | Una API falsa, hecha con un archivo `db.json`, que sirve para probar la app sin necesitar un servidor real. |
| **Vuetify** | Una caja de piezas visuales ya hechas (botones, tarjetas, colores), para que la app se vea más profesional. |
| **Jest** | Corre pruebas automáticas chiquitas que revisan piezas sueltas del código. |
| **Cypress** | Corre una prueba que simula a una persona real usando la app en el navegador. |

## Cómo correr el proyecto en tu computador

1. Instalar todo lo que el proyecto necesita:
   ```
   npm install
   ```

2. Abrir **dos terminales al mismo tiempo**:

   **Terminal 1** — enciende la API falsa:
   ```
   npm run mock
   ```

   **Terminal 2** — enciende la app:
   ```
   npm run serve
   ```

3. Abrir en el navegador la dirección que muestre la Terminal 2 (normalmente `http://localhost:8080/`).

## Cómo correr las pruebas

- Pruebas rápidas (Jest):
  ```
  npm run test:unit
  ```

- Prueba como si fuera una persona usando la app (Cypress) — necesita que la app esté corriendo (`npm run serve`) al mismo tiempo:
  ```
  npm run test:e2e
  ```

## Estructura del proyecto (dónde está cada cosa)

- `src/views/` → las pantallas completas (Inicio, Catálogo, Detalle de un libro).
- `src/components/` → piezas más chicas que se repiten (la tarjeta de cada libro, el formulario).
- `src/store/` → donde se guardan los datos compartidos entre pantallas.
- `src/api/` → donde se arma la conexión con la API.
- `tests/` → las pruebas automáticas.
- `cypress/` → la prueba que simula a un usuario real.

## Decisiones tomadas

Se armó el proyecto sobre la base del catálogo de libros (Módulo 6), agregando en esta entrega: manejo de estado con Vuex en módulos separados, conexión a una API con Axios, pruebas automáticas, y un diseño más profesional con Vuetify, incluyendo tema claro/oscuro.
