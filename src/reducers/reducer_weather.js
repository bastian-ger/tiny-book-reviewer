import { FETCH_WEATHER } from '../actions/index';

export default function(state={list: []}, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data;
    default:
      return state;
  }
}
