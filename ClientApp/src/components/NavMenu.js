import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header className="primary">
        <div className="primary-header">
          <img
            className="primary-header__flag"
            src="roytm.png"
            height={"200px"}
          />
          <img
            className="primary-header__title"
            src="heartnm.png"
            height={"200px"}
          />
        </div>
        <nav class="navMenu">
          <a href="/">Home</a>
          <a href="/counter">Administrators</a>
          <a className="links" href="/fetch-data">
            Resources
          </a>
          <a className="links">
            Links
            <span className="popuptext">
              <a href="https://www.cabq.gov/family/services/homeless-services">
                NM |&nbsp; Resources{" "}
              </a>
              <a href="https://www.rentassistance.us">
                {" "}
                US |&nbsp; Rent Assistance
              </a>
              <a href="https://www.publichousing.com">
                {" "}
                US |&nbsp;Public Housing
              </a>
            </span>
          </a>
          <div class="dot"></div>
        </nav>
      </header>
    );
  }
}
