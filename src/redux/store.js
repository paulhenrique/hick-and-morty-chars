import { createStore } from 'redux';
import * as actions from './actions';
const INITIAL_STATE = {
  characters: [],
  favorites: [],
  info: {}
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CHARACTERS':
      return actions.SET_CHARACTERS(state, action);
    case 'SET_INFO':
      return actions.SET_INFO(state, action);
    case 'ADD_CHARACTER_TO_FAVORITES':
      return actions.ADD_CHARACTER_TO_FAVORITES(state, action);
    case 'REMOVE_CHARACTER_FROM_FAVORITES':
      return actions.REMOVE_CHARACTER_FROM_FAVORITES(state, action);

    default:
      return state;
  }
}


export default createStore(reducer);