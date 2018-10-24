import React, { Component } from "react";
import "./account.css";
import NavBar from "./navBar/navBar";
import AppNav from "./appNav/appNav";
import AccountForm from "./accountForm/accountForm";
import PaymentForm from "./paymentForm/paymentForm";
import DeleteForm from "./deleteForm/deleteForm";
import { Container, Row, Col } from "reactstrap";

function account() {
  return (
    <div className="account-div">
      <Container>
        <Row noGutters>
          <Col xs="6" sm="4">
            {" "}
            <AppNav />
          </Col>
          <Col xs="6" sm="8">
            <NavBar />
            <AccountForm />
            <PaymentForm />
            <DeleteForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default account;
