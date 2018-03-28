import { combineReducers } from 'redux';
import FetchBooks from './reducer_books';
import ReviewsReducer from './reducer_reviews';

import SelectedBook from './reducer_selected_book';

const rootReducer = combineReducers({
  books: FetchBooks,
  selectedBook: SelectedBook,
  reviews: ReviewsReducer
});

export default rootReducer;
