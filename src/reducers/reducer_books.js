import { FETCH_BOOKS } from '../actions/index';

export default function(state = {books: []}, action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.payload.data;
    default:
      return state;
  }
}
