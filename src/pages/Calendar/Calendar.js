import React, { Component } from "react";
import "./Calendar.css";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: [],
    };
  }

  render() {
    return (
      <div className="Calendar-container">
        <iframe
          className="Calendar-iframe"
          src="https://dukegroups.com/events?topic_tags=8500794"
        ></iframe>
      </div>
    );
  }
}
