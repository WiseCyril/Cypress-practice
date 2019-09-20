/// <reference types="cypress" />

import * as todoPage from '../page-objects/todo-page';

describe('visual validation', () => {
    before(() => todoPage.navigate())
    // before(() => cy.visit('http://todomvc-app-for-testing.surge.sh/?different-title-color')) //to get an unresolved status on Applitools

    beforeEach(() => cy.eyesOpen({
        appName: 'Cypress Practice', batchName: 'practice',
        browser: [
            {name: 'chrome', width: 1024, height: 768},
            {name: 'chrome', width: 800, height: 600},
            {name: 'firefox', width: 1024, height: 768},
            {deviceName: 'iPhone X'},
        ]
    }))
    afterEach(() => cy.eyesClose())

    it('should look good', () => {
        cy.eyesCheckWindow('empty todo list')
        todoPage.addTodo('Play Tennis')
        todoPage.addTodo('Watch Game of Thrones')
        todoPage.addTodo('Attend dance lessons')

        cy.eyesCheckWindow('three todos')

        todoPage.toggleTodo(0)
        // todoPage.validateTodoCompletedState(0, true)

        cy.eyesCheckWindow('mark as completed')
    })
})