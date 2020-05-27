import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/app.scss'


const Home = () =>{

    const [videos , setVideos] = useState([])

    useEffect(() =>{
        fetch("http://localhost:3000/initalState")
        .then(response => response.json())
        .then(data => setVideos(data))
    },[]);

    console.log(videos)

    return(
        <div>
        <Header></Header>
        <Search></Search>
        <Categories title="Mi lista">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
        <Categories title="Recomendados">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
        <Categories title="Vistos">
            <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
            </Carousel>
        </Categories>
        <Footer/>
        </div>
    );
} 

export default Home;