import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" id="logo" aria-label="website logo" to="/">tiny book reviewer</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link text-light" to="/">Home</Link>
            <Link className="nav-item nav-link text-light" to="/review/all">Reviews</Link>
            <Link className="nav-item nav-link text-light" to="/reading-weather">Reading Weather</Link>
            <Link className="nav-item nav-link text-light" to="/about">About</Link>
            <Link className="nav-item nav-link text-light" to="/faq">FAQ</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
