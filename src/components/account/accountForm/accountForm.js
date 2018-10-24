import React, { Component } from "react";
import "./accountForm.css";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Col,
  Input,
  NavLink
} from "reactstrap";

function accountForm() {
  return (
    <div id="accountForm-div">
      <Form>
        <FormGroup row>
          <Col sm={3} lg={3} xl={3}>
            <Label color="muted">
              <h4 color="muted">Profile</h4>
            </Label>
          </Col>
          <Col sm={9} lg={9} xl={9}>
            <Label for="exampleEmail">
              <h5>Upload Profile Picture</h5>
            </Label>

            <Input type="file" name="file" id="exampleFile" />

            <br />
            <br />
            <Label for="name">
              <h5>Name</h5>{" "}
            </Label>
            <Input type="text" name="name" id="name" />

            <br />
            <br />
            <Label for="email">
              {" "}
              <h5>email address</h5>
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="exampleEmail@exampleEmail.com"
            />

            <br />
            <NavLink href="#">Reset Password</NavLink>

            <br />
            <br />
            <Label>
              {" "}
              <h5>Notifications</h5>
            </Label>
            <br />
            <br />
            <Label> App Notifications</Label>
            <Button size="small" className="float-right" color="primary">
              On
            </Button>
            <br />
            <br />
            <Label> Email Notifications</Label>
            <Button size="small" className="float-right" color="secondary">
              Off
            </Button>

            <br />
            <br />
            <Button size="lg" block color="primary">
              Save Profile
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
export default accountForm;
