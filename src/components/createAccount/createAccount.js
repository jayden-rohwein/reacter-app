import React, { Component } from "react";
import "./createAccount.css";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  NavLink
} from "reactstrap";

function createAccount() {
  return (
    <div id="signUp-div">
      <Form>
        <FormGroup row>
          <h1> React'r Boiler Plate </h1>
        </FormGroup>

        <br />
        <FormGroup row>
          <h3> Sign Up</h3>

          <NavLink className="ml-auto" href="#">
            Log In
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

        <FormGroup row>
          <Label for="examplePassword"> Comfirm Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password "
          />
        </FormGroup>

        <br />
        <FormGroup row>
          <Button color="primary" size="lg" block>
            Create Account
          </Button>
        </FormGroup>

        <br />
        <br />
        <FormGroup row>
          <h3> Or: </h3>
        </FormGroup>
        <FormGroup row>
          <Button color="primary" id="facebook" size="lg" block>
            Sign Up with Facebook
          </Button>
        </FormGroup>

        <FormGroup row>
          <Button color="danger" id="google" size="lg" block>
            Sign Up with Google
          </Button>
        </FormGroup>

        <FormGroup row>
          <Button color="info" id="twitter" size="lg" block>
            Sign Up with Twitter
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default createAccount;
