import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Button,
  NavLink
} from "reactstrap";
import "./forgotPassword.css";

function forgotPassword() {
  return (
    <div id="forgotPassword-div">
      <Form>
        <FormGroup row>
          <h1> React'r Boiler Plate </h1>
        </FormGroup>
        <br />

        <FormGroup row>
          <h3> Forgot Password</h3>
          <NavLink href="#" className="ml-auto">
            Sign In
          </NavLink>
        </FormGroup>

        <br />

        <FormGroup row>
          <Label for="Email">Enter Email Address</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="enter email"
          />
          <FormText color="muted">
            {" "}
            We'll send you a link to reset your password.
          </FormText>
        </FormGroup>

        <FormGroup row>
          <Button color="primary" size="lg" block>
            Reset Password
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}
export default forgotPassword;
