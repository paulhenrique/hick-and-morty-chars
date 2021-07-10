export const SET_CHARACTERS = (state, action) => {
  return {
    ...state,
    characters: action.characters
  };
}

export const ADD_CHARACTER_TO_FAVORITES = (state, action) => {
  return {
    ...state,
    favoriteCharacters: [
      ...state.favoriteCharacters,
      action.character
    ]
  };
}

export const SET_INFO = (state, action) => {
  return {
    ...state,
    info: action.info
  };
}

