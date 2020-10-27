/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from "react";
import {
  NavbarText,
  Badge,
  Popover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const NavCart = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  const [TotalCartValue, SetTotalCartValue] = useState(38);

  return (
    <div>
      <NavbarText
        id="Popover1"
        className="ml-auto d-flex align-items-center cart-info position-relative"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="ml-1">
          My Cart
          <Badge className="position-absolute" color="danger">
            3
          </Badge>
        </span>
      </NavbarText>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverHeader>Order Summery</PopoverHeader>
        <PopoverBody className="header-cart-info">
          <div className="d-flex jsutify-content-between">
            <div className="item w-75">Surekha Rice 1 kg</div>
            <div className="quantity w-25 text-right">₹ 38 x 1</div>
          </div>
          <hr/>
          <div className="d-flex jsutify-content-between">
            <div className="item w-75"><b>Grand Total: </b></div>
            <div className="total-cart-value w-25 text-right"><b>₹ {TotalCartValue}.00</b></div>
          </div>
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default NavCart;
