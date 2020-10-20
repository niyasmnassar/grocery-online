import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
const MyCart = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  if (count < 0) {
    setCount(count == 0);
  }
  return (
    <div>
      <section className="mycart-wrapper pb-5">
        <Container>
          <Row>
            <Fade left>
              <Col className="my-3">
                <h5 className="text-left">
                  My Cart Items <span className="items-price ml-3"></span>
                </h5>
              </Col>
            </Fade>
          </Row>
          <Row>
            <Col lg="8" md="8" sm="8">
              <div className="white-bg p-3">
                <div className="d-flex justify-content-between mb-2">
                  <h6 className="text-left mb-3">My Bag (1 item)</h6>
                  <fig>
                    <FontAwesomeIcon icon={faRupeeSign} />
                    <b className="ml-2">33</b>
                  </fig>
                </div>
                <ul className="pl-0">
                  <li className="media text-left mt-2">
                    <Fade down>
                      <img
                        className="mr-3"
                        src="https://via.placeholder.com/150"
                        alt="Generic placeholder image"
                      />
                      <div className="media-body">
                        <h6 className="mt-0">Surekha Rice</h6>
                        <span>&#8377; 33</span>
                        <span className="ml-3">
                          <del>&#8377; 38</del>
                        </span>
                      </div>
                      <div className="counter-blk">
                        <button
                          onClick={increment}
                          className="btn btn-secondary counter-btn"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <span className="counter-wrap mx-2">{count}</span>
                        <button
                          onClick={decrement}
                          className="btn btn-secondary counter-btn"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </div>
                    </Fade>
                  </li>
                  <li className="media text-left mt-2">
                    <Fade down>
                      <img
                        className="mr-3"
                        src="https://via.placeholder.com/150"
                        alt="Generic placeholder image"
                      />
                      <div className="media-body">
                        <h6 className="mt-0">Piece Dal</h6>
                        <span>&#8377; 68</span>
                        <span className="ml-3">
                          <del>&#8377; 70</del>
                        </span>
                      </div>
                      <div className="counter-blk">
                        <button
                          onClick={increment}
                          className="btn btn-secondary counter-btn"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <span className="counter-wrap mx-2">{count}</span>
                        <button
                          onClick={decrement}
                          className="btn btn-secondary counter-btn"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </div>
                    </Fade>
                  </li>
                </ul>
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
                <button className="btn btn-block btn-secondary">Place Order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default MyCart;
