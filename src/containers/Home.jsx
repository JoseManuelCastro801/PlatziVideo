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
        'videos' : [1]
    });

    useEffect(() =>{
        fetch("http://localhost:3000/initalState")
        .then(response => response.json())
        .then(data => setItems(data))
    },[]);

    return(
        <div>
        <Header></Header>
        <Search></Search>
        {
            items.categories.map(valor => {
                        if(valor.videos.length > 0){
                            return(                    
                            <Categories key={valor.id} title={valor.nombre} >
                                <Carousel key={valor.id}>
                                    {valor.videos.map(video => 
                                        <CarouselItem key={video.id} {...video} />
                                        )}
                                </Carousel>
                            </Categories>)
                        }
                    }

                )
        }
        <Footer/>
        </div>
    );
} 

export default Home;