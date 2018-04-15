import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class TheNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return(
      <div>
        <Navbar color="dark" dark fixed="top" expand="md">
          <NavbarBrand id="logo" href="/">tiny book reviewer</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/review/all">Reviews</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/reading-weather">Reading Weather</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/faq">FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default TheNavBar;
