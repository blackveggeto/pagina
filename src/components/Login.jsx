import React, { useState } from 'react'
import { Menu } from './Menu'
import './desing/desing.css'

export const Login = () => {

    const [miLogin, setLoging] = useState("false");

    const [datos, setDatos] = useState({
        name: '',
        lastName: ''
    });

    const handleChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    function initSetion(e) {
        e.preventDefault();
        let usuario = datos.name;
        let password = datos.lastName;

        if (usuario.length === 0 || password.length === 0) {
            alert("complete los datos");
        } else {
            if (usuario === "felipe" && password === "1234") {
                setLoging("true");
                document.getElementById("form_login").style.display = "none";

            } else {
                setLoging("false");
                alert("usuario o contraseña malos");
                document.getElementById("txtusu").value = "";
                document.getElementById("txtpas").value = "";
                document.getElementById("txtusu").focus();

            }
        }

    }

    return (
        <div className='mayor'>


            <div className="container" >
                <form id="form_login">
                    <div>
                        <h1 style={{ color: "blue", textalign: "center" }}>LOGIN</h1>
                        <label htmlFor="txtusu"><strong>Usuario</strong></label>
                        <input type="text" id="txtusu" style={{ textAlign: "center" }} className="form-control"
                            name="name"
                            onChange={handleChange}

                            required />
                    </div>
                    <div>
                        <label htmlFor="txtpas"><strong>Password</strong></label>
                        <input type="password" id="txtpas" style={{ textAlign: "center" }} className="form-control"
                            name="lastName"
                            onChange={handleChange}

                            required />
                    </div><br />
                    <input type="submit" className="btn btn-primary" value="Ingresar" onClick={initSetion} />

                </form>
                {miLogin === "true" && <Menu user={datos.name} />}

            </div>
            <footer>
                <div className='letras'>
                <p>© 2022 Luis Felipe Aguilar</p>
                <p>© Login Informatica Aplicada a los negocios</p>
                </div>
            </footer>
        </div>
    )
}

