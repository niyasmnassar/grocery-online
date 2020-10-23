import React, { useState } from "react";
import { Container, Row, Col, Button, FormGroup, Input, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
function PaymentOptions (){
   
    const [amount,SetTotalAmount] = useState(200);
    
    return <div>
      <section className="mycart-wrapper pb-5">
        <Container>
          <Row>
            <Fade left>
              <Col className="my-3">
                <h5 className="text-left">
                  Payment Mode <span className="items-price ml-3"></span>
                </h5>
              </Col>
            </Fade>
          </Row>
          <Row>
            <Col lg="8" md="8" sm="8">
                <div className="white-bg p-3">
                    <div className=" mb-2 text-left">
                        <h6 className="text-left mb-3">Wallets</h6>
                        <Row className="align-items-center">
                        <Col className="">
                        <FormGroup className="mb-3" check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}Paytm
                            </Label>
                        </FormGroup>
                        <FormGroup className="mb-3" check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                PhonePe
                            </Label>
                        </FormGroup>
                        <hr/>
                        <h6 className="text-left mb-3">Pay On Delivery</h6>
                        <div className="d-flex align-items-center">
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" />{' '}
                                    Cash On Delivery
                                </Label>
                            </FormGroup>
                            <Button className="ml-auto">Pay ₹{amount} on Delivery </Button>
                        </div>
                        {/* <h6 className="text-left mb-3">UPI</h6>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" />{' '}
                                GPay
                            </Label>
                        </FormGroup>
                        <Row className="mt-2">
                            <Col>
                                <FormGroup>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="GPay ID" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="select domain" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <hr/>
                        <h6 className="text-left mb-3">Other UPI</h6>
                        <Row className="mt-2">
                            <Col>
                                <FormGroup>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="yourname@bankname" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                                </FormGroup>
                            </Col>
                        </Row>
                        
                        <hr/>
                        <h6 className="text-left mb-3">Credit / Debit Card</h6> */}
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
                <button className="btn btn-block btn-secondary primary-green">Make Payment</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
};
export default PaymentOptions;
