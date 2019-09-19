/// <reference types="cypress"/>

import { 
    navigate,
    addTodo,
    toggleTodo,
    showOnlyCompletedTodos,
    showOnlyActiveTodos,
    showAllTodos,
    clearCompleted,
    validateNumberOfTodosShown,
    validateTodoCompletedState,
    validateTodoText,
    validateToggleState 
} from "../page-objects/todo-page";

describe('todo actions', () => {

    beforeEach(() => {
        navigate()

        addTodo('Learn Cypress')
    })

    it.only('should be ale to add a new todo to the list', () => {
        validateTodoText(0, 'Learn Cypress')
        
        validateToggleState(0, false)
    })

    describe('toggling todos', () => {
        it('should toggle test correctly', () => {
          toggleTodo(0)
          validateTodoCompletedState(0, true)
        })

        it('should clear completed', () => {
            toggleTodo(0)
      
            clearCompleted()
      
            validateNumberOfTodosShown(0)
        })
    })
})
