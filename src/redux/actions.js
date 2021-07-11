export const SET_CHARACTERS = (state, action) => {
  return {
    ...state,
    characters: action.characters
  };
}

export const ADD_CHARACTER_TO_FAVORITES = (state, action) => {
  return {
    ...state,
    favorites: [
      ...state.favorites,
      action.character
    ]
  };
}

export const REMOVE_CHARACTER_FROM_FAVORITES = (state, action) => {
  return {
    ...state,
    favorites: state.favorites.filter(e => e !== action.character)
  };
}

export const SET_INFO = (state, action) => {
  return {
    ...state,
    info: action.info
  };
}

