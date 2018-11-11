import React, { Component } from "react";
import "./paymentForm.css";
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

function paymentForm() {
  return (
    <div id="paymentForm-div">
      <Form>
        <FormGroup row>
          <Col sm={3} lg={3} xl={3}>
            <Label>
              <h4>Payment</h4>
            </Label>
          </Col>
          <Col sm={9} lg={9} xl={9}>
            <Label>
              <h5>Card Number</h5>
            </Label>
            <Input type="text" id="creditcardnumber" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={3} lg={3} xl={3} />
          <Col>
            <Label> Expiration date</Label>
            <Input type="text" id="experationdate" />
          </Col>
          <Col>
            <Label> CVC Number</Label>
            <Input type="text" id="cvcnumber" />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={3} lg={3} xl={3} />
          <Col>
            <h4>
              <Badge outline>
                powerd by <span id="stripebanner">stripe</span>
              </Badge>
            </h4>
            <br />
            <Button size="lg" block id="savepaymentinformation" color="primary">
              Save Payment Information
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}
export default paymentForm;
