import axios from 'axios';

export const FETCH_BOOKS = 'fetch_books';
export const CREATE_REVIEW = 'create_review';
export const SELECTED_BOOK = 'selected_book';
export const FETCH_REVIEWS = 'fetch_reviews';
export const FETCH_WEATHER = 'fetch_weather';

export function fetchBooks(list) {
  const nyKey = process.env.NY_KEY;
  const URL = `https://api.nytimes.com/svc/books/v3/lists/current/${list}/json?api-key=${nyKey}`;
  const request = axios.get(URL);

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = process.env.RB_KEY;

export function createReview(values, callback) {

  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_REVIEW,
    payload: request
  };
}

export function selectBook(book) {
  return {
    type: SELECTED_BOOK,
    payload: book
  };
}

export function fetchReviews() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);

  return {
    type: FETCH_REVIEWS,
    payload: request
  };
}

export function fetchWeather(city, country) {
  const ROOT_URL = 'https://api.openweathermap.org/data/2.5/forecast?';
  const OWM_KEY = process.env.OWM_KEY;

  const request = axios.get(`${ROOT_URL}q=${city},${country}&units=metric&appid=${OWM_KEY}`);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
