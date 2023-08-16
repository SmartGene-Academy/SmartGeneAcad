import React from 'react';
import SignUp from './images/SignUp.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './navbar.css'

function NavBar() {
    return (
        <div>   
            <Navbar style={{ backgroundColor: '#F5F3F5' }} expand='lg'>
                <Navbar.Brand>
                    Logo
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title='Programs'>
                            <NavDropdown.Item></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Contact">Programs</Nav.Link>
                        <Nav.Link href="/Resources">Resources</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto'> {/* Add ml-auto class */}
                        <Nav.Link href='/SignUp'>Sign Up</Nav.Link>
                        <Nav.Link href='/Login'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;




