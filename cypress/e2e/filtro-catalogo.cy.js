// Prueba end-to-end pedida por el PDF: "Usuario filtra productos y ve resultados"
// Para correrla: 1) npm run mock (levanta la API falsa), 2) npm run serve (levanta la app),
// 3) npx cypress open (o npx cypress run)

describe('Catálogo de libros - filtro por título', () => {
  it('permite iniciar sesión, filtrar por título y ver solo los resultados que coinciden', () => {
    cy.visit('/login')

    cy.get('#nombre').type('Jaime')
    cy.contains('button', 'Ingresar al panel').click()

    // Tras iniciar sesión, vamos directo al catálogo
    cy.visit('/libros')

    // Esperamos a que cargue al menos un libro desde la API
    cy.get('.grilla-libros li', { timeout: 10000 }).should('have.length.greaterThan', 0)

    // Filtramos por un título de ejemplo
    cy.get('input[placeholder="Filtrar por título..."]').type('Cien años')

    // Todos los resultados visibles deben contener el texto buscado
    cy.get('.grilla-libros li').each(($libro) => {
      cy.wrap($libro).should('contain.text', 'Cien años')
    })

    // El contador de resultados también debe reflejar el filtro
    cy.contains('.resultados', 'Mostrando').should('be.visible')
  })
})
