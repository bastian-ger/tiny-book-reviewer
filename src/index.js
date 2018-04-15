import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import reducers from './reducers';

import ReviewForm from './components/review_form';
import ReviewList from './components/review_list';
import TheNavBar from './components/the_nav_bar';
import ListSelection from './components/list_selection';
import WeatherChecker from './components/weather_checker';
import Footer from './components/footer';
import About from './components/about';
import Faq from './components/faq';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <TheNavBar />
        <Switch>
          <Route path="/reading-weather" component={WeatherChecker} />
          <Route path="/review/new" component={ReviewForm} />
          <Route path="/review/all" component={ReviewList} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
          <Route path="/" component={ListSelection} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-react'));
