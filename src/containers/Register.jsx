import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerRequest } from "../actions";
import "../assets/styles/components/Login.scss";
import Header from "../components/Header";

const Register = (props) => {
  const [form, setValues] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push("/");
  };

  return (
    <>
      <Header isRegister />
      <section className="login">
        <section className="login__container">
          <h2>Regístrate</h2>
          <form
            className="login__container--form"
            action=""
            onSubmit={handleSubmit}
          >
            <input
              className="login__input"
              type="text"
              name="name"
              placeholder="Nombre"
              id=""
              onChange={handleInput}
            />
            <input
              className="login__input"
              type="text"
              name="email"
              placeholder="Correo"
              id=""
              onChange={handleInput}
            />
            <input
              className="login__input"
              type="password"
              name="password"
              placeholder="Contraseña"
              id=""
              onChange={handleInput}
            />
            <button className="button">Registrarme</button>
          </form>
          <Link className="register--iniciar" to="/login">
            Iniciar Sesión
          </Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

// export default Register;
export default connect(null, mapDispatchToProps)(Register);
