import { createStore } from 'redux';
import * as actions from './actions';
const INITIAL_STATE = {
  characters: [0, 1, 2, 3, 4, 5, 6],
  favoriteCharacters: []
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return actions.SET_CHARACTERS(state, action);
    case 'ADD_CHARACTER_TO_FAVORITES':
      actions.ADD_CHARACTER_TO_FAVORITES(state, action);
      break;

    default:
      return state;
  }
}


export default createStore(reducer);