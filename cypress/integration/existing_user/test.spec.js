

it('creates an item with id 1', () => {
  cy.server()
  cy.fixture('example.json').as('mockJSON')
  cy.route('GET', '**/59450/**', '@mockJSON')
  cy.route('GET', '/json/', '@mockJSON')
  cy.visit('/')
  cy.get('.header-actions > .btn').contains('Login').click()
  cy.get('#login-email').type(Cypress.env('JOURNAL_USER_EMAIL'))
  cy.get('#login-password').type(Cypress.env('JOURNAL_USER_PASSWORD'))
  cy.get('.action').should('have.text', 'Sign in').click()
})
