import React, { Component } from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
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
      <div className="Home-titleTextWrapper">
        <h1 className="Home-titleText">Duke University Union</h1>
      </div>
    </div>
  );
}

function CommitteeBanner() {
  return (
    <div className="CommitteeBannerContainer">
      <div className="Committee-Text">
        <h3 className="Committee-Text">Committees</h3>
      </div>
      <div className="Explore-Committees">
        <div className="Committee-MainText">
          <h3 className="Committee-MainText">
            Duke University Union is made up of 17 committees, each with an
            important and unique role.
          </h3>
        </div>
        <div className="Committee-Button">
          <h3 className="Committee-MainText"> {">"} EXPLORE COMMITTEES</h3>
        </div>
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
        <Video />
        <CommitteeBanner />
      </div>
    );
  }
}
