import React from 'react';
import '../style.css';

export default function Login() {
    
    return (
        <div class="login-wrap">
            <div class="login-html">
                <div class="logo">
                    <img src="../assets/img/Logo2.jpg" alt="Tu Canchapp"></img>
                </div>
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Iniciar sesión</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Registrese</label>
                <div class="login-form">
                    <div class="sign-in-htm">
                        <div class="group">
                            <label for="user" class="label">Usuario</label>
                            <input id="user" type="text" class="input"/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Contraseña</label>
                            <input id="pass" type="password" class="input" data-type="password"/>
                        </div>
                        <div class="group">
                            <input id="check" type="checkbox" class="check" checked/>
                            <label for="check"><span class="icon"></span> Mantener mi sesión activa</label>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Ingresar"/>
                        </div>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                            <a href="#forgot">¿Olvidó su contraseña?</a>
                        </div>
                    </div>
                    <div class="sign-up-htm">
                        <div class="group">
                            <label for="user" class="label">Usuario</label>
                            <input id="user" type="text" class="input"/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Contraseña</label>
                            <input id="pass" type="password" class="input" data-type="password"/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Repita su contraseña</label>
                            <input id="pass" type="password" class="input" data-type="password"/>
                        </div>
                        <div class="group">
                            <label for="pass" class="label">Correo electrónico</label>
                            <input id="pass" type="text" class="input"/>
                        </div>
                        <div class="group">
                            <input type="submit" class="button" value="Registrar"/>
                        </div>
                        <div class="hr"></div>
                        <div class="foot-lnk">
                            <label for="tab-1">¿Eres miembro de Tu Canchapp?</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}