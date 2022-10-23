import React, { Component } from 'react';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output : []
        };
      }
    
    render() {
      return (
        <div>
             <h1>This is the Homepage</h1>
        </div>
        );
      }
}