import { combineReducers } from 'redux';
import FetchBooks from './reducer_books';
import ReviewsReducer from './reducer_reviews';

import SelectedBook from './reducer_selected_book';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  books: FetchBooks,
  selectedBook: SelectedBook,
  reviews: ReviewsReducer,
  weather: WeatherReducer
});

export default rootReducer;
