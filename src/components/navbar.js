import { getByTitle } from "@testing-library/react";
import React, { useContext} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Context } from "../store.js";
import { ReactSession } from 'react-client-session';
import { useNavigate } from "react-router-dom";


export function NavBar() {
  const [state,dispatch] = useContext(Context)
  const navigte = useNavigate();
  const handleBrabdClick = (path) => {
    if(state.login){
      dispatch({type:'show_guide_Modal', payload:false});
      dispatch({type:'set_login', payload:true});
      dispatch({type:'set_active_Nav_page', payload:path.toString()})
    }
    console.log(window.location.pathname ,'==========')
    navigte(path);
    
    console.log(state.showModal)
  }
  const userName = ReactSession.get('username')

  return (
    <Navbar  collapseOnSelect bg="dark" expand="sm" variant="dark">
      <Navbar.Brand href='#' onClick={()=>handleBrabdClick('/home')} className={state.activeNavPage == "/home" ? 'active mx-3 px-3' : 'mx-3 px-3'}>One Stop Graphica Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="w-75 d-flex flex-row justify-content-around">
           {state.login &&  <Nav.Item>
                <Nav.Link href="#" onClick={()=>handleBrabdClick('/portal/projectHelp')} className={state.activeNavPage === "/portal/projectHelp" ? 'text-white fw-bolder' : 'text-white'}>Project Help</Nav.Link>
            </Nav.Item>}
            <Nav.Item>
                <Nav.Link href="#" onClick={()=>handleBrabdClick('/portal/helpanddocumentation')} className={state.activeNavPage === "/portal/helpanddocumentation" ? 'text-white fw-bolder' :'text-white'}>Support</Nav.Link>
            </Nav.Item>
           {state.login && <NavDropdown className="text-white" title={state.UserName}id="basic-nav-dropdown">
              <NavDropdown.Item href="/home" onClick={()=>{dispatch({type:'show_guide_Modal',payload:true})}}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>}
            {!state.login && <Nav.Item>
                <Nav.Link href="/home" className={state.activeNavPage == "/home" ? 'text-white fw-bolder' : 'text-white'}>Login</Nav.Link>
            </Nav.Item>}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}