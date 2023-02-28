import React, { Component } from "react";
import "./SelectService.css";
import { InfoButton } from "./InfoButton";

export class SelectService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }
  clicked() {
    if (this.state.hide === false) {
      this.setState({
        hide: true,
      });
    } else {
      this.setState({
        hide: false,
      });
    }
  }
  clickedshare() {
    if (this.state.share === false) {
      this.setState({
        share: true,
      });
    } else {
      this.setState({
        share: false,
      });
    }
  }
  render() {
    return (
      <div className="container-info">
        <h2 className="title">
          Select Service{" "}
          <InfoButton info=" Services available.    There are many, click a button to learn more" />{" "}
        </h2>
        <div className="selector">
          <h6>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            ></input>{" "}
            &nbsp; Homeless Services
          </h6>
          <h6>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            ></input>{" "}
            &nbsp; Housing Services & Programs
          </h6>
          <h6>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            ></input>{" "}
            &nbsp; Health and social Services
          </h6>
          <h6>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            ></input>{" "}
            &nbsp; Senior Services
          </h6>
          <h6>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            ></input>{" "}
            &nbsp; Mental Health
          </h6>
          <h6>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            ></input>{" "}
            &nbsp; Substance Use Treatment
          </h6>
          <h6>
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            ></input>{" "}
            &nbsp; Employment Services
          </h6>
        </div>
        <button
          className={this.state.hide ? "searchs active" : "searchs"}
          onClick={() => this.clicked()}
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="#5b85b9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                opacity="0.4"
                d="M10.7402 15.5302L14.2602 12.0002L10.7402 8.47021"
                stroke="#5b85b9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </button>
        {this.state.hide ? (
          <div className="selector">
            <p>Here is a list of the things you selected</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SelectService;
