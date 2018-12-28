/* global cy */

describe('Hacker News', () => {
  it('goes to item page when clicking comments link', () => {
    cy.visit('/top')
    cy.get('.comments-link a')
      .first()
      .click()
    cy.url().should('contain', `/item`)
    cy.get('.item-view-comments-header').contains(/[0-9]* comments/)
  })

  it('changes list items when clicking between list types', () => {
    cy.visit('/top')
    cy.contains('New').click()
    cy.get('.item-list')
    cy.contains('Show').click()
    cy.get('.item-list')
    cy.contains('Ask').click()
    cy.get('.item-list')
  })
})
