import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'
import { Link } from 'react-router-dom';
import gravater from '../utils/gravater.js'

const Header = ({ categories }) =>{

    const user = categories[0].nombre;

    console.log(user)

    return(
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video"/>
            </Link>
            <div className="header__menu">
            <div className="header__menu--profile">
                { 
                user ?
                <>
                <img src ={gravater(user)} alt="FotoDeGavatar"/>
                <p>{user}</p>
                </>
                :
                <>
                <img src={userIcon} alt=""/>
                <p>Perfil</p>
                </>
                }
                
            </div>
            <ul>
                <li>
                    <Link to="/login">
                    Cuenta
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                    Iniciar sesion
                    </Link>
                </li>
            </ul>
            </div>
        </header>
    );
} 

const mapStateToProps = state => {
    return{
        categories : state.categories,
    }
}

export default connect(mapStateToProps,null)(Header)