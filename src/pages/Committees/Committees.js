import React, { Component } from "react";
import "./Committees.css";
import { Banner } from "../../components/Banner.js";

export default class Committees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: [],
    };
  }

  render() {
    return (
      <div>
        <Banner />
      </div>
    );
  }
}
