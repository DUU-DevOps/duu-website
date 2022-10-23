import React, { Component } from 'react';


export default class Alumni extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output : []
        };
      }
    
    componentDidMount() {
        fetch('http://localhost:5000/').then(res => res.json()).then(data => {
            console.log("data: ")
             console.log(data.events)         
            this.setState({               
                output: data.events
              });
            
          });
      }
    
    render() {
       const alumList = this.state.output;
        return (
        <div>
             <h1>This is the List of Alumni</h1>
              {alumList.map(alum => {
                return <li key={alum.id}> {alum.name}</li>
              })}
        </div>
        );
      }
}