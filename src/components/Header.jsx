import React from 'react'
import '../assets/styles/header.scss'

const Header = () => (
    <header class="header">
        <img class="header__img" src="https://www.flaticon.es/premium-icon/icons/svg/2920/2920847.svg" alt="ImagenHardPoint"/>
        <nav class="header__nav">
            <p><a href="/">Text1</a></p>
            <p><a href="/">Text2</a></p>
            <p><a href="/">Text3</a></p>
            <input type="text"/>
        </nav>
    </header>
);

export default Header;