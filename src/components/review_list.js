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
    console.log(this.props.reviews)

    return (
      <div>
        <h3 className="m-sm-3">This is an overview of all the submitted reviews</h3>
        {this.renderReviews()}
      </div>
    );
  }

  renderReviews() {
    return _.map(this.props.reviews, review => {
      return (
        <article
          className="mt-3 mb-3 ml-1 mr-1 ml-sm-3 mr-sm-3 p-2 border border-danger article-usual"
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
