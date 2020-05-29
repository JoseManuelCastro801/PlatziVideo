import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/app.scss'


const Home = () =>{

    const [items , setItems] = useState({
        'categories' : [],
        'nombre' : '',
        'videos' : []
    });

    useEffect(() =>{
        fetch("http://localhost:3000/initalState")
        .then(response => response.json())
        .then(data => setItems(data))
    },[]);

    console.log(items)

    return(
        <div>
        <Header></Header>
        <Search></Search>
        {
            items.categories.map(valor => 
                <Categories key={valor.id} title={valor.nombre} >
                    <Carousel key={valor.id}>
                        {valor.videos.map(video => 
                            <CarouselItem key={video.id} {...video} />
                            )}
                    </Carousel>
                </Categories>
                )
        }
        <Footer/>
        </div>
    );
} 

export default Home;