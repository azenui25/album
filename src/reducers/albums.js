import {NEW_HELLO_WORLD, ADD_ALBUMS} from "../actions/test"

export default (state = [], action = {}) => {
  console.log('reducer', action.type, 'pl', action.payload)
  
  switch(action.type){
    case NEW_HELLO_WORLD:
      return action.payload
    case ADD_ALBUMS:
      return [...state, ...action.payload]
    default:
      return state
  }

}