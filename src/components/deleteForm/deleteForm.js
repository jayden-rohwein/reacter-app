import React, { Component } from "react";
import "./deleteForm.css";
import {
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Col,
  Input,
  NavLink,
  Badge
} from "reactstrap";

function deleteForm() {
  return (
    <div id="deleteForm-div">
      <Form>
        <FormGroup row>
          <Col sm={3} lg={3} xl={3}>
            <h4>Delete Account</h4>
          </Col>
          <Col sm={9} lg={9} xl={9} id="deleteCol">
            <Label>
              <h5>Type "DELETE" to delete your Account</h5>
            </Label>
            <Input type="text" id="deleteAccount" placeholder="type DELETE" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={3} lg={3} xl={3} />
          <Col sm={9} lg={9} xl={9} id="resetPasswordCol">
            <Label>
              <h5> Current Password</h5>
            </Label>
            <Input
              type="text"
              id="currentPassword"
              placeholder="Current Passward"
            />

            <Label>
              <h5>New Password </h5>
            </Label>
            <Input type="text" id="newPassword" placeholder="New Password" />

            <Label>
              <h5>Confirm New Password</h5>
            </Label>
            <Input
              type="text"
              id="confirmNewPassword"
              placeholder="Confirm New Password"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3} lg={3} xl={3} />
          <Col sm={9} lg={9} xl={9}>
            <NavLink href="#" inline>
              {" "}
              cancel{" "}
            </NavLink>
            <Button size="lg" block color="primary">
              {" "}
              Reset Password
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
export default deleteForm;
