import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Footer = (props) => {
        return (
          <div>
            <footer className="py-4">
                <div className="container">
                    <Nav>
                        <NavItem>
                        <NavLink href="#">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#">Shopk</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#">My Account</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="#">Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </footer>
          </div>
        );
} 
export default Footer;
