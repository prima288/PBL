import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="font-weight-bold">BERASIN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#menu1">Menu 1</Nav.Link>
          <Nav.Link href="#menu2">Menu 2</Nav.Link>
          {/* Tambahkan menu-menu lainnya */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
