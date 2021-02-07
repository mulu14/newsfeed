import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function AppNav() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">BonnierNews</NavbarBrand>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="">DN</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Expressen</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">HD</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="">Sydsvenskan</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default AppNav;
