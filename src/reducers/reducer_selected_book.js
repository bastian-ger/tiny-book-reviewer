import { SELECTED_BOOK } from '../actions/index';

export default function(state = null, action) {
  console.log("reducer");
  switch(action.type) {
    case SELECTED_BOOK:
      return action.payload;
    default:
      return state;
  }
}
