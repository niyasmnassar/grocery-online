import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Col,
  Row,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuActive, setMenuState] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState([]);

  console.log(search);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div
          onClick={() => {
            setMenuState(!menuActive);
            {
              setIsMenuOpen(!isMenuOpen);
            }
          }}
          className={`hamburger ${menuActive ? "is-active" : ""}`}
          id="hamburger-1"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <NavbarBrand className="ml-3" href="/">
          Brand Logo
        </NavbarBrand>
        <InputGroup className="col-sm-5 mx-auto">
          <Input
            type="text"
            placeholder="Brand or Product"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <InputGroupAddon addonType="append">
            <Button>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <NavbarText className="ml-auto d-flex align-items-center cart-info">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="ml-1">My Cart </span>
        </NavbarText>
      </Navbar>
      <aside className={`side-menu ${menuActive ? "show" : ""}`}>
        <Nav className="" navbar>
            <NavItem>
              <NavLink href="/MyAccount">My Account</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/MyOrders">My Orders</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/AboutUs">About us</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/Shop">Shop</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/ContactUs">Contact us</NavLink>
            </NavItem>
        </Nav>
      </aside>
    </div>
  );
};

export default Header;
