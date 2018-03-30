import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BooksList from './books_list';
import Welcome from './welcome';

class ListSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedList: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {

    let isSelected = false;

    if (this.state.selectedList !== '') {
      isSelected = true;
    }

    return (
      <div className="m-1 m-sm-3">
        {!isSelected &&
          <Welcome />
        }
        <form className="form-group" onSubmit={this.handleSubmit}>
          <label htmlFor="selector">Choose your bestseller list!</label>
          <select id="selector" className="form-control" name="list_selection"
            value={this.state.selectedList} onChange={this.handleChange}>
              <option value="" disabled="true">Choose here...</option>
              <option value="picture-books">Children’s Picture Books</option>
              <option value="series-books">Children&#39;s Series</option>
              <option value="childrens-middle-grade-hardcover">
                Childrens Middle Grade Hardcover
              </option>
              <option value="young-adult-hardcover">
                Young Adult Hardcover
              </option>
              <option value="combined-print-and-e-book-fiction">
                Combined Print & E-Book Fiction
              </option>
              <option value="hardcover-fiction">Hardcover Fiction</option>
              <option value="combined-print-and-e-book-nonfiction">
                Combined Print & E-Book Nonfiction
              </option>
              <option value="hardcover-nonfiction">Hardcover Nonfiction</option>
              <option value="paperback-nonfiction">Paperback Nonfiction</option>
              <option value="trade-fiction-paperback">
                Paperback Trade Fiction
              </option>
              <option value="advice-how-to-and-miscellaneous">
                Advice, How-To & Miscellaneous
              </option>
            </select>
        </form>
        {isSelected &&
          <BooksList selectedList={this.state.selectedList}></BooksList>
        }
      </div>
    );
  }

  handleChange(event) {
    this.setState({
      selectedList: event.target.value
    });
  }

  handleSubmit(event) {
    const list = this.props.selectedList;
    event.preventDefault;
    this.fetchSelectedReview(list);
  }
}

export default ListSelection;
//export default connect(null, null)(ListSelection);

//to do: now write new action creator, check reducer, reducers/index!
