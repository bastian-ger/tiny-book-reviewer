import { FETCH_REVIEWS } from '../actions/index';
import _ from 'lodash';

export default function(state={}, action) {
  switch(action.type) {
    case FETCH_REVIEWS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
