import axios from 'axios';

export const FETCH_BOOKS = 'fetch_books';
export const CREATE_REVIEW = 'create_review';
export const SELECTED_BOOK = 'selected_book';

export function fetchBooks() {
  const nyKey = '4e1a6cdf3826470a9ec10ba51e15938e';
  const URL = `http://api.nytimes.com/svc/books/v3/lists/current/series-books/json?api-key=${nyKey}`;
  const request = axios.get(URL);

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=neversaynever53621';

export function createReview(values, callback) {

  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_REVIEW,
    payload: request
  };
}

export function selectBook(book) {
  console.log("clicked");  return {
    type: SELECTED_BOOK,
    payload: book
  };
}
