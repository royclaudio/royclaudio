import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu";
import "./Layout.css";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="main-layout">
        <NavMenu />
        <body className="style-body" tag="main">
          {this.props.children}
        </body>
        <footer className="footer-style">
          © 2023 Built using React.js | By WCA
        </footer>
      </div>
    );
  }
}
