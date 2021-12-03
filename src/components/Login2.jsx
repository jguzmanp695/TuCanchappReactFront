import React, { Fragment, useState } from 'react'
import axios from 'axios'



const Login = () => {

    const [todo, setTodo] = useState({
        todoName: '',
        todoPassword: '',
        todoSelect: '',
        todoCheckbox: false
    })

    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        const { todoName, todoPassword, todoSelect } = todo
        if (!todoName.trim() || !todoPassword.trim() || !todoSelect.trim()) {
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
            {
                error ? <PintarError /> : null
            }
            <form onSubmit={handleSubmit} className="container mb-3 my-3">
                <input
                    type="text"
                    name="todoName"
                    placeholder="E-mail"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.todoName}
                ></input>
                <br />

                <input
                    type="text"
                    name="todoPassword"
                    placeholder="Password"
                    className="form-control mb-2"
                    onChange={handleChange}
                    value={todo.todoPassword}
                ></input>
                <br />

                <select
                    value={todo.todoSelect}
                    name="todoSelect"
                    onChange={handleChange}
                    className="form-select"
                    aria-label="Default select example" >
                    <option>Open this select menu</option>
                    <option value="user">User</option>
                    <option value="moderator">Moderator</option>
                    <option value="administrator">Administrator</option>
                </select>
                <br />

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        name="todoCheckbox"
                        checked={todo.todoCheckbox}
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault" />
                    Mantener sesión
                </div>
                <br />

                <button className="btn btn-primary" type="submit">Aceptar</button>
            </form>
        </Fragment>
    )
}

export default Login