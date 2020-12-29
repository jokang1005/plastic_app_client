import React from 'react'
import {GlobalCtx} from "../App"
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/Navdropdown'
import Nav from 'react-bootstrap/Nav'

const Header = (props) => {
    const {gState, setGState} = React.useContext(GlobalCtx)
//shows logout if logged in
    const logout = (
        <Nav.Link>
            <h2 onClick = {() => {
                window.localStorage.removeItem("token")
                setGState({...gState, token: null})
            }}>Logout</h2>
        </Nav.Link>
    )

    const login_signup = (
        <>
            <Nav.Link href="/signup">SignUp</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
                            Login
                        </Nav.Link>
        </>
    )

    return (
        <>
            <Navbar className="nav" sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <NavDropdown title="Explore" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#where">Where is Plastic?</NavDropdown.Item>
                        <NavDropdown.Item href="#where">How Long Does it Take for Plastic to Decompose?</NavDropdown.Item>
                        <NavDropdown.Item href="#where">How Plastic Affects Wildlife</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href="#now">What Can We Do</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/my_info">My Info</Nav.Link>
                    </Nav>
                    <Nav>
                    {gState.token ? logout : login_signup}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container className="title">
                <h1>Plastic Counter</h1>

            </Container>
            <h3><a href="https://www.nationalgeographic.com/environment/2020/10/us-plastic-pollution/">Did you know U.S. generates more plastic trash than any other nation?</a></h3>
      </>
    )
}

export default Header;