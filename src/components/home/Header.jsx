import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="header-fixed-container">
        <Navbar dark expand="md" className="nav-container container">
          <NavbarBrand href="/">Nyan & Yoon</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#couple">Couple</NavLink>
              </NavItem>

              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Story
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="#story">Story</DropdownItem>
                  <DropdownItem>
                    <Link to="/story-details">Story Details</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}

              <NavItem>
                <NavLink href="#gallery">Gallery</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
