import axios from 'axios';

export const FETCH_BOOKS = 'fetch_books';

export function fetchBooks() {
  const nyKey = '4e1a6cdf3826470a9ec10ba51e15938e';
  const URL = `http://api.nytimes.com/svc/books/v3/lists/current/series-books/json?api-key=${nyKey}`;
  const request = axios.get(URL);

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}
