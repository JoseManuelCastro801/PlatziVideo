import React , { useState } from 'react'
import { connect } from 'react-redux'
import { LoginRequest } from '../actions'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'
import { Link } from 'react-router-dom';

const Login = (props) => {

  const [form , setFormValues] = useState({
    email : '',
  })

  const handleInput = (evento) =>{
    console.log(evento.target.value)
    setFormValues({
      ...form,
      [evento.target.name] : evento.target.value
    })
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    props.LoginRequest(form);
    //props.history.push("/")
  } 

  return(
      <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input 
            name="email"
            className="input" 
            type="text" 
            placeholder="Correo"
            onChange={handleInput}
          />
          <input 
            name="password"
            className="input" 
            type="password" 
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div><img src={googleIcon}/> Inicia sesión con Google</div>
          <div><img src={twitterIcon}/> Inicia sesión con Twitter</div>
        </section>
        <p className="login__container--register">`No tienes ninguna cuenta ` 
        <Link to="register">
        Regístrate
        </Link>
        </p>
      </section>
    </section>
  )
};

const mapDispthToProps = {
  LoginRequest,
}

export default connect(null,mapDispthToProps)(Login)