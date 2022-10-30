import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function NavBar() {
  return (
    <Navbar bg="dark" expand="sm">
      <Container>
      <Navbar.Brand href="#home" className="text-white">One Stop Graphica Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav fill className="w-100">
            <Nav.Item>
                <Nav.Link href="#support" className="text-white">Support</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#hrConnect" className="text-white">HR-Connect</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#projectHelp" className="text-white">Project Help</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#knowYourCompnay" className="text-white">Know Your Company</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#network" className="text-white">Network</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#network" className="text-white">Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}