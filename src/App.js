import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Navigation from "./pages/Navigation/Navigation";
import Login from "./pages/Login/Login";
import Committees from "./pages/Committees/Committees";
import Alumni from "./pages/Alumni/Alumni";
import Calendar from "./pages/Calendar/Calendar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/calendar" element={<Calendar />} exact />
            <Route path="/committees" element={<Committees />} exact />
            <Route path="/alumni" element={<Alumni />} exact />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
