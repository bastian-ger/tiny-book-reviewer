import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBooks } from '../actions/index';

class BooksList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {

    if (!this.props.books.results) {
      return <div>Loading...</div>;
    }
    return (
        <div className="">
          {this.renderBooks()}
          <img className="mb-3 ml-1 mr-1 ml-sm-3 mr-sm-3" src="http://static01.nytimes.com/packages/images/developer/logos/poweredby_nytimes_200c.png" alt="New York Times Logo"/>
        </div>
    );
  }
  renderBooks() {
    return this.props.books.results.books.map( book => {
      return (
        <article className="row mt-3 mb-3 ml-1 mr-1 ml-sm-3 mr-sm-3 bg-light border border-danger" key={book.primary_isbn13}>
          <div className="col-sm-9 p-2">
            <h5>Title: {book.title}</h5>
            <p>Rank: {book.rank} (last week: {book.rank_last_week})</p>
            <p>Author: {book.author}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Description: {book.description}</p>
          </div>
          <div className="col-sm-3 p-2 text-center">
            <img src={book.book_image} className="img-fluid" alt="a cover of a book" />
          </div>
        </article>
      );
    });
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default connect(mapStateToProps, { fetchBooks })(BooksList);
