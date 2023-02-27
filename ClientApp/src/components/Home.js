import React, { Component } from "react";
import "./Home.css";
import InfoContainer from "./InfoContainer";
import { SelectService } from "./SelectService";
import { InfoButton } from "./InfoButton";
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="home-primary">
        <div class="sidebar">
          <SelectService />
        </div>

        <div class="content">
          <h1 className="title">
            Community Services{" "}
            <InfoButton info=" Services available.    There are many, click a button to learn more" />
          </h1>
          <div className="content-grid">
            <div>
              <InfoContainer />
            </div>
            <div>
              <InfoContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
