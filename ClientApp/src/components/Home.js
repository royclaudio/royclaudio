import React, { Component } from "react";
import "./Home.css";
import InfoContainer from "./InfoContainer";
import { SelectService } from "./SelectService";
import { InfoButton } from "./InfoButton";

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = { items: null, loading: true };
  }
  componentDidMount() {
    this.populateShelterData();
  }
  uniq(a) {
    var seen = {};
    return a.filter(function (item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }
  static renderitems(items) {
    return (
      <div className="grid-home">
        {items.map((item) => (
          <div className="grid-element">
            <InfoContainer
              title={item.name}
              address={item.address}
              info={item.info}
              type={item.type}
            />
          </div>
        ))}
      </div>
    );
  }
  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      Home.renderitems(this.state.items)
    );
    return (
      <div className="home-content">
        <h1 className="title">
          Community Services
          <InfoButton info=" Services available. There are many, click a button to learn more" />
        </h1>
        <div class="sidebar">
          <SelectService />
        </div>
        <div class="content">{contents}</div>
      </div>
    );
  }
  async populateShelterData() {
    const response = await fetch("shelters");
    const data = await response.json();
    this.setState({ items: data, loading: false });
  }
}
