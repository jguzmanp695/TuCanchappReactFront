import React, { Fragment, useState } from 'react';
import '../style.css';
import images from '../assets/images';
import { Form } from 'react-bootstrap'

const Login = () => {

    const [todo, setTodo] = useState({
        todoName: '',
        todoPassword: '',
        todoCheckbox: false
    })

    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        const { todoName, todoPassword } = todo
        if (!todoName.trim() || !todoPassword.trim()) {
            setError(true)
            return;
        }
        setError(false)
    }

    const handleChange = e => {
        console.log(e.target.value);
        setTodo({
            ...todo,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value

        })
    }

    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    )

    return (
        <Fragment>
            <div className="login-Container">
                {
                    error ? <PintarError /> : null
                }
                <Form onSubmit={handleSubmit}>
                    <div class="login-wrap">
                        <div class="login-html">
                            <div class="logo">
                                <img src={images.img1} alt="Tu Canchapp"></img>
                            </div>
                            <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Iniciar sesión</label>
                            <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Registrese</label>
                            <div class="login-form">
                                <div class="sign-in-htm">
                                    <div class="group">
                                        <label for="user" class="label">Usuario</label>
                                        <input
                                            id="user"
                                            type="text"
                                            className="input form-control mb-2"
                                            name="todoName"
                                            placeholder="E-mail"
                                            onChange={handleChange}
                                            value={todo.todoName} />
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Contraseña</label>
                                        <input
                                            id="pass"
                                            type="password"
                                            className="input form-control mb-2"
                                            data-type="password"
                                            name="todoPassword"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            value={todo.todoPassword} />
                                    </div>
                                    <div className="form-check">
                                        <input
                                            id="flexCheckDefault"
                                            type="checkbox"
                                            className="check form-check-input"
                                            name="todoCheckbox"
                                            checked={todo.todoCheckbox}
                                            onChange={handleChange} />
                                        {/* <label for="check"><span className="icon form-check-label"
                                        htmlFor="flexCheckDefault"></span> Mantener mi sesión activa</label> */}
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault" />
                                        Mantener sesión iniciada
                                    </div>
                                    <div class="group">
                                        <input type="submit" class="button" value="Ingresar" />
                                    </div>
                                    <div class="hr"></div>
                                    <div class="foot-lnk">
                                        <a href="#forgot">¿Olvidó su contraseña?</a>
                                    </div>
                                </div>
                                <div class="sign-up-htm">
                                    <div class="group">
                                        <label for="user" class="label">Usuario</label>
                                        <input id="user" type="text" class="input" />
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Contraseña</label>
                                        <input id="pass" type="password" class="input" data-type="password" />
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Repita su contraseña</label>
                                        <input id="pass" type="password" class="input" data-type="password" />
                                    </div>
                                    <div class="group">
                                        <label for="pass" class="label">Correo electrónico</label>
                                        <input id="pass" type="text" class="input" />
                                    </div>
                                    <div class="group">
                                        <input type="submit" class="button" value="Registrar" />
                                    </div>
                                    <div class="hr"></div>
                                    <div class="foot-lnk">
                                        <label for="tab-1">¿Eres miembro de Tu Canchapp?</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </Fragment>
    )
}

export default Login