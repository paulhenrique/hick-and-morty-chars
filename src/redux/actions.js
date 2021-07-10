export const SET_CHARACTERS = (state, action) => {
  return {
    ...state,
    characters: [...state.characters, action.characters]
  };
}

export const ADD_CHARACTER_TO_FAVORITES = (state, action) => {
  state.characters = [...state.characters, action.characters];
}
