import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createReview } from '../actions/index';

class ReviewForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      categories: this.props.selectedBook,
      title: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

    const selectedBook = this.props.selectedBook;

    if (!this.props.selectedBook) {
      return (
        <main className="m-1 m-sm-3">
          <p>Please select a book before you write a review!</p>
          <Link className="btn btn-primary mt-3" to="/">Click to Select a Book</Link>
        </main>
      );
    }
    else {
      return (
        <main className="m-1 m-sm-3">
          <h1>Write a review for: <span>{selectedBook}</span></h1>
          <p>Please fill out all red input fields correctly.</p>
          <form onSubmit={this.handleSubmit} className="form-group">
            <div>
              <label className="mt-3" htmlFor="categories">Book:</label>
              <input
                name="categories"
                type="text"
                className="form-control"
                id="categories"
                disabled="true"
                value={this.state.categories}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label className="mt-3" htmlFor="title">Title:</label>
              <input
                name="title"
                type="text"
                className="form-control"
                id="title"
                required="true"
                value={this.state.title}
                onChange={this.handleChange}
                maxlength="50"
                aria-describedby="title-info"
              />
              <small className="form-text" id="title-info">maximum length: 50</small>
            </div>
            <div>
              <label className="mt-3" htmlFor="content">Content of Your Review:</label>
              <textarea rows="10" cols="50"
                name="content"
                className="form-control"
                id="content"
                required="true"
                value={this.state.content}
                onChange={this.handleChange}
                maxlength="1000"
                aria-describedby="content-info"
              />
              <small className="form-text" id="content-info">maximum length: 1000</small>
            </div>
            <div>
              <p className="mt-3" id="errors"></p>
            </div>

            <button type="submit" className="btn btn-primary mr-3 mt-3">Submit</button>
            <Link className="btn btn-primary mt-3" to="/">Cancel</Link>
          </form>
        </main>
      );
    }
  }

  handleChange(event) {
    if (event.target.id === 'categories') {
      this.setState({
        categories: event.target.value
      })
    }
    else if (event.target.id === 'title') {
      this.setState({
        title: event.target.value
      })
    }
    else {
      this.setState({
        content: event.target.value
      })
    }
  }

  handleSubmit(event) {
      event.preventDefault();

      const data = this.state;

      this.props.createReview(data, () => {
        this.props.history.push('/');
      });
  }
}

function mapStateToProps(state) {
  return {
    selectedBook: state.selectedBook
  };
}

export default connect(mapStateToProps, { createReview })(ReviewForm);
