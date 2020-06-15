import React , { useState } from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/Register.scss'

const Register = () =>{

  const [form , setForm] = useState({
    nombre : "",
    email : "",
    password : "",
  })

  const handleImput = (evento) =>{
    setForm({
      ...form,
      [evento.target.name] : evento.target.value
    })
  }

  const handleSubmit = (evento) =>{
    evento.preventDefault();
    console.log(form)
  }

  return(
    <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form" onSubmit={handleSubmit}>
        <input 
          name="nombre"
          className="input" 
          type="text" 
          placeholder="Nombre"
          onChange={handleImput}
        />
        <input 
          name="email"
          className="input" 
          type="text" 
          placeholder="Correo"
          onChange={handleImput}
        />
        <input 
          name="password"
          className="input" 
          type="password" 
          placeholder="Contraseña"
          onChange={handleImput}
        />
        <button className="button">Registrarme</button>

        
      </form>
      <Link to="/login">
      Iniciar sesión
      </Link>
      
    </section>
  </section>

);
} 

export default Register;