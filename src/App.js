import React, { Component } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './components/Login';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Routes>
            <Route path="/" element={<Home/>} exact/>            
            <Route path="/login" element={<Login/>} exact/>            
            <Route path ="*" element={<Error/>}/>
           </Routes>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;