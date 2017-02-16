let nextTodoId = 0
export const addTodo = (text, isBlackAndWhite) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    color: isBlackAndWhite ? 'gray' : 'blue'
  }
}

export const addTodoFinish = (id, isBlackAndWhite) => {
  return {
    type: 'ADD_TODO_FINISH',
    id: id,
    color: isBlackAndWhite ? 'black' : 'green'
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
