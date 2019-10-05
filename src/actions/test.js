export const NEW_HELLO_WORLD = 'NEW_HELLO_WORLD'
export const ADD_ALBUMS = 'ADD_ALBUMS'

export function helloWorld(firstName, lastName) {
  return {
    type: NEW_HELLO_WORLD,
    payload: {
      firstName,
      lastName
    }
  }
}

export function addAlbums(payload) {
    return {
      type: ADD_ALBUMS,
      payload: payload
  }
  

}