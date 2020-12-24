import React from 'react'
import {GlobalCtx} from "../App"
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/Navdropdown'
import Nav from 'react-bootstrap/Nav'

const Header = (props) => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <NavDropdown title="Explore" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/plastic_in">Where is Plastic?</NavDropdown.Item>
                        <NavDropdown.Item href="/how_long">How Long Does it Take for Plastic to Decompose?</NavDropdown.Item>
                        <NavDropdown.Item href="wildlife_articles">How Plastic Affects Wildlife</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="/what_can_we_do">What Can We Do</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/my_info">My Info</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/signup">SignUp</Nav.Link>
                    <Nav.Link eventKey={2} href="/login">
                        Login
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron fluid className='jumbotron'>
                <Container>
                <h1>Plastic</h1>
                <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                </p>
                </Container>
            </Jumbotron>
      </>
    )
}

export default Header;