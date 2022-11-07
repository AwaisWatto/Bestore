import React from 'react';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  



function Navbar3() {

    return (
<Navbar bg="light" expand="md">  
    <Container>  
       
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav" >  
        <Nav className="container-fluid">  
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Features" id="basic-nav-dropdown">  
            <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>  
          </NavDropdown>  
          <Nav.Link href="#link">Shop</Nav.Link>  
          <NavDropdown title="Pages" id="basic-nav-dropdown">  
            <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>  
          </NavDropdown> 
          
          <Nav className="ms-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link> 
          <Nav.Link href="#link">Terms of Use</Nav.Link> 
          </Nav>

        </Nav>  
      </Navbar.Collapse>  

    </Container>  
  </Navbar>  

    );
}

export default Navbar3;