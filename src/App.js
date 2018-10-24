import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import Login from "./components/login/login";
import CreateAccount from "./components/createAccount/createAccount";
import AppNav from "./components/account/appNav/appNav";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import NavBar from "./components/account/navBar/navBar";
import Account from "./components/account/account";
import AccountForm from "./components/account/accountForm/accountForm";
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateAccount />
        <Login />
        <Account />
      </div>
    );
  }
}

export default App;
