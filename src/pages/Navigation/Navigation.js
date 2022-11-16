import React from "react";
import { Nav, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    //<div>
    // <NavLink to="/">Home</NavLink>
    //</div>
    <Nav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/calendar">Calendar</NavLink>
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/committees">Committees</NavLink>
      <NavLink href="/alumni">Alumni Database</NavLink>
    </Nav>
  );
};

export default Navigation;
