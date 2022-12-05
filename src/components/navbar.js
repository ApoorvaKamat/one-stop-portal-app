import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function NavBar(props) {
 
  return (
    <Navbar  collapseOnSelect bg="dark" expand="sm" variant="dark">
      <Navbar.Brand href='/'onClick={()=> props.displayhelpModal(false)} className={window.location.pathname == "/" ? 'active px-3' : 'px-3'}>One Stop Graphica Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="esponsive-navbar-nav">
          <Nav fill className="w-100">
            <Nav.Item>
                <Nav.Link href="/portal/projectHelp" className={window.location.pathname == "/portal/projectHelp" ? 'active' : ''}>Project Help</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/portal/helpanddocumentation" className={window.location.pathname == "/portal/helpanddocumentation" ? 'active' : ''}>Support</Nav.Link>
            </Nav.Item>
            <NavDropdown className="text-white" title="Hi, Jhon Doe" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}