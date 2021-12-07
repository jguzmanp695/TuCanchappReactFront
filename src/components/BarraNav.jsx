import React, { useState, useEffect } from 'react'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


export default function BarraNav() {

    const [show, setShow] = useState(true)
    const [opcionRegistro, setOpcionRegistro] = useState(false)
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        if(sessionStorage.getItem('token')){
            setMenu(true)
            setShow(false)
            setOpcionRegistro(true)
        }
    }, [])

    const salir = ()=>{
        sessionStorage.clear()
        window.location.href="/"
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand={show}>
                <Container fluid>
                    <Navbar.Brand href="/">Tu Canchapp</Navbar.Brand>
                    <Navbar.Brand hidden={show} href="#"><i class="fas fa-user-tie"></i>Bienvenido: {sessionStorage.getItem('nombre')}</Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Brand href="/registrarPersona">Registrarse</Navbar.Brand>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Button hidden={opcionRegistro} href="/registrar">Registrarse</Button>
                    <Button href="/login">Login</Button>
                    <Navbar.Brand hidden={show} href="#" onClick={()=>salir()} to="/">Cerrar Sesión</Navbar.Brand>
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
