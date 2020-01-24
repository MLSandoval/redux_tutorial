import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions/actionTypes.js'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
}

function todoApp(state = initialState, action) {
  switch(action.type){
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [ //here we grab all the old todos from prev state, include them in the array, then add a new object on the end holding the new todo and completion status
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}


//state shape 
// {
//   visibilityFilter: 'SHOW_ALL',
//   todos: [
//     {
//       text: 'Consider using Redux',
//       completed: true
//     },
//     {
//       text: 'Keep all state in a single tree',
//       completed: false
//     }
//   ]
// }