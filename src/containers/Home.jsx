import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'

import '../assets/styles/app.scss'

const Home = () => (
    <div>
    <Header></Header>
    <Search></Search>
    <Categories></Categories>
    </div>
);

export default Home;