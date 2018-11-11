import React, { Component } from "react";
import SideMenu from "../../components/sideMenu/sideMenu";
import NavBar from "../../components/navBar/navBar";
import MenuButton from "../../components/menuButton/menuButton";

class adminLayout extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: true
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleOnClick(e) {
    console.log("I did it");
    this.toggleMenu();

    e.stopPropagation();
  }

  render() {
    console.log("adminLayout.js : " + this.props);
    return (
      <div>
        <SideMenu
          id="sideMenu"
          menuVisibility={this.state.visible}
          menuItems={this.props.menuItems}
        />

        <NavBar id="navBar" />
        <MenuButton
          id="menuButton"
          handleOnClick={this.handleOnClick}
          menuVisibility={this.state.visible}
        />
        <div id="childrenDiv">{this.props.children}</div>
      </div>
    );
  }
}

export default adminLayout;
