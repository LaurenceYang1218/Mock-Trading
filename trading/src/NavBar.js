import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';

function NavBar(){
    return(
        <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
          <Container>
            <Navbar.Brand href='#home'>Mock Trading</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <NavDropdown title='Trading' id='basic-nav-dropdown'>
                  <NavDropdown.Item href='#stock'>Stock</NavDropdown.Item>
                  <NavDropdown.Item href='#future'>Future</NavDropdown.Item>
                  <NavDropdown.Item href='#option'>Option</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='#news'>News</Nav.Link>
                <Nav.Link href='#forum'>Forum</Nav.Link>
              </Nav>  
              <Nav>
                <Nav.Link href='#login'>Login</Nav.Link>
                <Button variant="light">Sign Up</Button>
              </Nav>
            </Navbar.Collapse>
             
          </Container>
        </Navbar>
    );
}

export default NavBar;