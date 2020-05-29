import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import setInitialState from '../helpers/setInitialSatate.js'

import '../assets/styles/app.scss'


const Home = () =>{

    const API = "http://localhost:3000/initalState";
    const intialState = setInitialState(API);

    return(
        <div>
        <Header></Header>
        <Search></Search>
        {
            intialState.categories.map(valor => {
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