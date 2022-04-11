const TOGGLE_FOLLOWED = 'TOGGLE_FOLLOWED'

const initialState = {
  users: [
    {
      id: 1,
      status: 'Halo 1',
      fullName: 'Pevets Sergey',
      location: {country: 'Belarus', city: 'Minsk'},
      userPhoto: 'https://st4.depositphotos.com/27867620/30392/v/1600/depositphotos_303925352-stock-illustration-user-web-icon-simple-design.jpg',
      followed: true,
    },
    {
      id: 2,
      status: 'Halo 2',
      fullName: 'Stadnik Nikolay',
      location: {country: 'Belarus', city: 'Brest'},
      userPhoto: 'https://st4.depositphotos.com/27867620/30392/v/1600/depositphotos_303925352-stock-illustration-user-web-icon-simple-design.jpg',
      followed: false,
    },
    {
      id: 3,
      status: 'Halo 3',
      fullName: 'Evkovich Natalia',
      location: {country: 'Belarus', city: 'Minsk'},
      userPhoto: 'https://st4.depositphotos.com/27867620/30392/v/1600/depositphotos_303925352-stock-illustration-user-web-icon-simple-design.jpg',
      followed: false,
    }
  ]
}


export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FOLLOWED: {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: !u.followed}
          }
          return u
        })
      }
    }
    default:
      return state
  }
}

export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOWED, userId})