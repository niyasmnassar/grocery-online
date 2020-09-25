import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Brand Logo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">My Account</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contact us</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>My Cart</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
}
  
  export default Header;