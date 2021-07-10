export const SET_CHARACTERS = (state, action) => {
  return {
    ...state,
    characters: action.characters
  };
}

export const ADD_CHARACTER_TO_FAVORITES = (state, action) => {
  console.log(state.favoriteCharacters);
  return {
    ...state,
    favoriteCharacters: [
      ...state.favoriteCharacters,
      action.character
    ]
  };
}

