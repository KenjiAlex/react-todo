export const defaultState = {
  todos : [],
}

const ADD_TODO = "ADD_TODO"
const REMOVE_TODO = "REMOVE_TODO"

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { 
        ...state, 
        todos: [action.payload, ...state.todos]
      }
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    default:
      return state
  }
}

export const addTodoAction = (payload) => ({type: ADD_TODO, payload})
export const removeTodoAction = (payload) => ({type: REMOVE_TODO, payload})
