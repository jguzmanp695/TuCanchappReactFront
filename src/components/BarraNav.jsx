import React from 'react'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

export default function BarraNav() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="/">Tu Canchapp</Navbar.Brand>
                    <Navbar.Brand href="#">Bienvenido: Usuario</Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="/registrarPersona">Registrarse</Navbar.Brand>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/registrar">Registrarse</Nav.Link>
                    <Button href="/login">Login</Button>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />

                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
