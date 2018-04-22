import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchReviews } from '../actions/index';

class ReviewList extends Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    if (!this.props.reviews) {
      return (
      <div>
        <p>Loading...</p>
      </div>
      );
    }
    else {
      return (
        <main className="m-1 m-sm-3">
          <h3 className="">This is an overview of all the submitted reviews</h3>
          {this.renderReviews()}
        </main>
      );
    }
  }

  renderReviews() {
    return _.map(this.props.reviews, review => {
      return (
        <article
          className="mt-3 mb-3 p-2 border border-danger article-usual"
          key={review.id}>
          <h5>{review.title}</h5>
          <p>{review.categories}</p>
          <p>{review.content}</p>
        </article>
      );
    })
  }
}

function mapStateToProps(state) {
  return {
    reviews: state.reviews
  };
}

export default connect(mapStateToProps, {fetchReviews})(ReviewList);
