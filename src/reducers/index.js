import { combineReducers } from 'redux';
import FetchBooks from './reducer_books';
import SelectedBook from './reducer_selected_book';

const rootReducer = combineReducers({
  books: FetchBooks,
  selectedBook: SelectedBook
});

export default rootReducer;
