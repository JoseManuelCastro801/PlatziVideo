import React, { useState, useEffect } from 'react'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import useInitialState from '../Hooks/useInitialSatate.js'

import '../assets/styles/app.scss'


const Home = () =>{

    const API = "http://localhost:3000/initalState";
    const InitialState = useInitialState(API);

    return(
        <div>
        <Search></Search>
        {
            InitialState.categories.map(valor => {
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
        </div>
    );
} 

export default Home;