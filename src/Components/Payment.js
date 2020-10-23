import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Fade from "react-reveal/Fade";
function Payment() {

  return <div>
      <section className="mycart-wrapper pb-5">
        <Container>
          <Row>
            <Fade left>
              <Col className="my-3">
                <h5 className="text-left">
                  Order Summary <span className="items-price ml-3"></span>
                </h5>
              </Col>
            </Fade>
          </Row>
          <Row>
            <Col lg="8" md="8" sm="8">
                <div className="white-bg p-3">
                    <div className=" mb-2 text-left">
                        <h6 className="text-left mb-3">Select Delivery Address</h6>
                        <Row className="align-items-center">
                        <Col className=" address border-right">
                            <label>Niyas MN</label>
                            <label>KALAPPURAKKAL (H)</label>
                            <label>THRIKKAKARA P.O</label>
                            <label>KAKKANAD</label>
                            <label>+91 - 9746150416</label>
                            <span className="badge badge-primary">Default Address</span>
                        </Col>
                        <Col className=" address justify-content-center d-flex">
                            <Button className="primary-green"><FontAwesomeIcon icon={faPlus} /> Add Address</Button>
                        </Col>
                        </Row>
                    </div>
                </div>
            </Col>
            <Col lg="4" md="4" sm="4">
              <div className="white-bg p-3">
                <h6 className="text-left mb-3">Payment Details</h6>
                <ul className="price-break-list ml-0 pl-0">
                  <li>
                    <label>MRP Total</label>
                    <span className="mrp-value">&#8377; 120</span>
                  </li>
                  <hr/>
                  <li>
                    <label>Product Discount</label>
                    <span className="mrp-value">&#8377; 12</span>
                  </li>
                  <hr/>
                  <li>
                    <label><b>Total Amount</b></label>
                    <span className="mrp-value"><b>&#8377; 108</b></span>
                  </li>
                </ul>
                <Link to="/PaymentOptions" className="btn btn-block btn-secondary primary-green">Make Payment</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
};
export default Payment;
