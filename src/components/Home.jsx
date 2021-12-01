import React from 'react'
import images from '../assets/images'
import { Carousel, Container, Row, Col, Card, Form, FormControl, Button } from 'react-bootstrap'

export default function Home() {
    return (
        <div>
            <Card>
                <Row className="d-flex justify-content-between">
                    <Col xs={2}>
                        <img src={images.img1} width="180px" alt="logo" />
                    </Col>
                    <Col xs className="align-self-center">
                        <span class="fs-1">Juega, apuesta</span>
                        <br />
                        <span class="fs-1">y gana</span>
                    </Col>
                    <Col xs className="align-self-center">
                        <Container>
                        <nav>
                            <div className="row">
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Buscar"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Buscar</Button>
                                </Form>
                            </div>
                        </nav>
                        </Container>
                    </Col>
                </Row>
            </Card>
            {/* <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row> */}
            <div class="my-1">
                {/* ol>li*5>a.link[href=#] */}
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images.img2}
                            height="600px"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images.slide1}
                            height="600px"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={images.slide2}
                            height="600px"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <Card className="card bg-light" align="center">
                <h4 class="text-success">Te ofrecemos el mejor servicio</h4>
                <div class="h2 mb-0">
                    <h2 class="font_1 font-size:45px color:green">
                        <font face="Bahnschrift">Canchas recomendadas en Bogotá</font>
                    </h2>
                    <img src={images.ubicacion} width="50px" alt="map" />
                </div>
            </Card>

            <Row>
                <Col align="right">
                    <div className="Fondo-absoluto">
                        <img src={images.cancha1} height="260px" alt="cancha" />
                        <span className="Fondo-absoluto">Campo sintético</span>
                        <span className="Fondo-absoluto2"><img src={images.watch} height="20px"/>1 Hora</span>
                    </div>
                </Col>
                <Col>
                    <br />
                    <br />
                    <span class="fs-3 text-success">
                        Cancha:
                    </span>
                    <span class="fs-3">
                        Zona Centro
                    </span>
                    <Row>
                        <Col>
                            <span class="fs-3 text-success">
                                Ciudad:
                            </span>
                            <span class="fs-3">
                                Bogotá
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span class="fs-3 text-success">
                                Dirección:
                            </span>
                            <span class="fs-3">
                                Calle 19 # 11 - 71 (Tribuna Sur)
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span class="fs-3 text-success">
                                Teléfono:
                            </span>
                            <span class="fs-3">
                                (601)5-55-5555
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Card className="card bg-light">
                <br />
                <br />
                <br />
                <Row>
                    <Col xs>
                        <div align="center">
                            <img src={images.herramienta} width="50px" alt="map" />
                            <br />
                            <span class="fs-5">Tu Canchapp</span>
                            <p class="fs-6">Bogotá D.C. - Colombia</p>
                        </div>
                    </Col>
                    <Col xs>
                        <div align="center">
                            <img src={images.telefono} width="50px" alt="map" />
                            <br />
                            <span class="fs-5">Tel. fijo</span>
                            <p class="fs-6">(601)5-46-1500</p>
                        </div>
                    </Col>
                    <Col xs>
                        <div align="center">
                            <img src={images.email} width="50px" alt="map" />
                            <br />
                            <span class="fs-5">Correo electrónico</span>
                            <p class="fs-6">soportetucanchapp@gmail.com</p>
                        </div>
                    </Col>
                </Row>
                <br />
                <hr />
                <Row>
                    <Col xs>
                        <div align="center">
                            <br />
                            <span class="fs-5">Acerca de nosotros</span>
                        </div>
                    </Col>
                    <Col xs>
                        <div align="center">
                            <br />
                            <span class="fs-5">Cómo trabajamos</span>
                        </div>
                    </Col>
                    <Col xs>
                        <div align="center">
                            <br />
                            <span class="fs-5">Política de privacidad</span>
                        </div>
                    </Col>
                    <Col xs>
                        <div align="center">
                            <br />
                            <span class="fs-5">Contáctanos</span>
                        </div>
                    </Col>
                </Row>
                <br />
            </Card>

            <Card>
                <div align="center">
                    <span class="fs-6 text-secondary"> &copy; Tu Canchapp 2021</span>
                </div>
            </Card>

        </div>

    )
}
