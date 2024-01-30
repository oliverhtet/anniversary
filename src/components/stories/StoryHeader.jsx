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
          <NavbarBrand href="/">Jet & Bomyung</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#story1">Story1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#story2">Story2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#story3">Story3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#story4">Story4</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
