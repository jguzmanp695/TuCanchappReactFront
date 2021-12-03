import React from 'react'
import images from '../assets/images'
import { Carousel, Container, Row, Col, Card, Form, FormControl, Button } from 'react-bootstrap'

export default function RegistrarPersona() {
    return (
        <div class="row d-flex justify-content-center align-items-center h-100">
            <img src={images.fondo} class="bg-image" height="759px" alt="Sample image" />
            <div className="Form-Absoluto">
                <div className="col-md-7 mx-auto">
                    <div className="card">
                        <div className="container text-center fa-5x">
                            <i className="fas fa-user-plus"></i>
                        </div>
                        {/* bg-infor -> color de fondo cabecera */}
                        <div className="card-header bg-info text-center">
                            <h4>Registrar usuario</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={"guardar"}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Nombres</label>
                                        <input type="text" className="form-control required" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Apellidos</label>
                                        <input type="text" className="form-control required" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Correo</label>
                                        <input type="text" className="form-control required" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Rol</label>
                                        <input type="text" className="form-control required" />
                                    </div>
                                </div>
                                <br />
                                <button type="submit" class="btn btn-outline-info">
                                    <span class="fa fa-save"></span> Guardar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
