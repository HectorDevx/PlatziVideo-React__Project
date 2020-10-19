import React from "react";
import { Link } from "react-router-dom";
import Twitter from "../assets/static/twitter-icon.png";
import Google from "../assets/static/google-icon.png";
import "../assets/styles/components/Login.scss";

const Login = () => {
  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" action="">
          <input
            className="login__input"
            type="text"
            name="email"
            placeholder="Correo"
            id="email"
          />
          <input
            className="login__input"
            type="password"
            name="password"
            placeholder="Contraseña"
            id="password"
          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="caja" value="checkbox" />
              Recuerdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--socialmedia">
          <div>
            <img className="social-media--icon" src={Google} alt="Google" />
            Inicia sesión con Google
          </div>
          <div>
            <img className="social-media--icon" src={Twitter} alt="Twitter" />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          ¿No tienes ninguna cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

export default Login;
