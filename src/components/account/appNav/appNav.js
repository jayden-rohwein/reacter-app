import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./appNav.css";

function appNav() {
  return (
    <div id="appNav-div">
      <h3> Future App Nav</h3>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}
export default appNav;
