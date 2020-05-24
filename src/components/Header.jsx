import React from 'react'
import '../assets/styles/header.scss'

const Header = () => (
    <header class="header">
        <img class="header__img" src="https://www.flaticon.es/premium-icon/icons/svg/2920/2920847.svg" alt="ImagenHardPoint"/>
        <nav class="header__nav">
            <a class="rainbow-button" href="/" alt=""></a>
            <a class="rainbow-button" href="/" alt=""></a>
            <a class="rainbow-button" href="/" alt=""></a>
            <input type="search" placeholder="Busca tu Archivo" id="Buscador" />
        </nav>
    </header>
);

export default Header;