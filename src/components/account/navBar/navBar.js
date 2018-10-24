import React, { Component } from "react";
import "./navBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function navBar() {
  return (
    <div id="navBar-div">
      <Nav>
        <NavLink href="#" className="ml-auto">
          Account
        </NavLink>{" "}
      </Nav>
    </div>
  );
}
export default navBar;
