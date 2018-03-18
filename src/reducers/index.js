import { combineReducers } from 'redux';
import FetchBooks from './reducer_books';

const rootReducer = combineReducers({
  books: FetchBooks
});

export default rootReducer;
