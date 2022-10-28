import React, { Component } from "react";
import "./Home.css";

function Video(props) {
  return (
    <div className="Home-videoTextContainer">
      <div className="Home-videoContainer">
        <iframe
          className="Home-videoIframe"
          src="https://www.youtube.com/embed/HLgMmCbwsSw?autoplay=1&mute=1&enablejsapi=1&modestbranding=1&autohide=1&controls=0&loop=1&playlist=HLgMmCbwsSw"
          frameBorder="0"
          allowfullscreen
        >
          Your browser doesn't support iframes
        </iframe>
      </div>
    </div>
  );
}
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: [],
    };
  }

  render() {
    return (
      <div>
        <h1>This is the Homepage</h1>
        <Video />
      </div>
    );
  }
}
