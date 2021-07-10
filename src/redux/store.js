import { createStore } from 'redux';
import * as actions from './actions';
const INITIAL_STATE = {
  characters: [],
  favoriteCharacters: []
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return actions.SET_CHARACTERS(state, action);
    case 'ADD_CHARACTER_TO_FAVORITES':
      return actions.ADD_CHARACTER_TO_FAVORITES(state, action);

    default:
      return state;
  }
}


export default createStore(reducer);