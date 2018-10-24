import React, { Component } from "react";
import "./login.css";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  NavLink
} from "reactstrap";

function login() {
  return (
    <div id="login-div">
      <Form>
        <FormGroup row>
          <h1> React'r Boiler Plate </h1>
        </FormGroup>

        <br />
        <FormGroup row>
          <h3> Log In</h3>

          <NavLink className="ml-auto" href="#">
            Create an Account
          </NavLink>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="exampleEmail@exampleEmail.com"
          />
          <FormText color="muted">
            {" "}
            We'll never share your email with anyone else.
          </FormText>
        </FormGroup>

        <FormGroup row>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password "
          />
        </FormGroup>

        <FormGroup check row>
          <Label check>
            <Input type="checkbox" /> Remeber me
          </Label>
          <NavLink href="#" className="float-right">
            I forgot my password
          </NavLink>
        </FormGroup>
      </Form>

      <br />
      <FormGroup row>
        <Button color="primary" size="lg" block>
          Log In
        </Button>
      </FormGroup>

      <br />
      <br />
      <FormGroup row />
      <FormGroup row>
        <h3> Social Media Log In </h3>
        <Button color="primary" id="facebook" size="lg" block>
          Log In with Facebook
        </Button>

        <Button color="danger" id="google" size="lg" block>
          Log In with Google
        </Button>

        <Button color="info" id="twitter" size="lg" block>
          Log In with Twitter
        </Button>
      </FormGroup>
    </div>
  );
}

export default login;
