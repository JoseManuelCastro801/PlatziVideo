import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import '../assets/styles/app.scss'


const Home = () => (
    <div>
    <Header></Header>
    <Search></Search>
    <Categories>
        <Carousel>
            <CarouselItem></CarouselItem>
        </Carousel>
    </Categories>
    </div>
);

export default Home;