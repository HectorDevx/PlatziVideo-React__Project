import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Login.scss";

const Register = () => {
  return (
    <section className="login">
      <section className="login__container">
        <h2>Regístrate</h2>
        <form className="login__container--form" action="">
          <input
            className="login__input"
            type="text"
            name=""
            placeholder="Nombre"
            id=""
          />
          <input
            className="login__input"
            type="text"
            name=""
            placeholder="Correo"
            id=""
          />
          <input
            className="login__input"
            type="password"
            name=""
            placeholder="Contraseña"
            id=""
          />
          <button className="button">Registrarme</button>
        </form>
        <Link className="register--iniciar" to="/login">
          Iniciar Sesión
        </Link>
      </section>
    </section>
  );
};

export default Register;
