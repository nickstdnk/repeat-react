const initialState = {
  friends: [
    {id: 1, name: 'Nikolay', surname: 'Stadnik'},
    {id: 2, name: 'Pevets', surname: 'Sergey'},
    {id: 3, name: 'Osipov', surname: 'Alexey'},
  ],
}

export default function friendsReducer(state = initialState, action) {
  return state
}