/// <reference types="cypress"/>

describe('todo actions', () => {
    beforeEach(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type("Study cypress{enter}")
    })

    it.only('should be ale to add a new todo to the list', () => {
        cy.get('label').should('have.text', 'Study cypress')
        cy.get('.toggle').should('not.be.checked')
    })
    
    it('should mark a todo as completed', () => {
        cy.get('.toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })
    
    it.only('should clear completed todos', () => {
        cy.get('.toggle').click()

        cy.contains('Clear').click()
        cy.get('.new-todo').should('not.have.descendants', 'li')
    })
})
