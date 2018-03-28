import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import BooksList from './components/books_list';
import ReviewForm from './components/review_form';
import ReviewList from './components/review_list';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/review/new" component={ReviewForm} />
          <Route path="/review/all" component={ReviewList} />
          <Route path="/" component={BooksList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-react'));
