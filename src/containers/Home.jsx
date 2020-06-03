import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import useInitialState from '../Hooks/useInitialSatate.js'

import '../assets/styles/app.scss'


const Home = ({ categories }) =>{

    console.log(categories)
    return(
        <div>
        <Search></Search>
        {
            categories.map(valor => {
                       
                            return(                    
                            <Categories key={valor.id} title={valor.nombre} >
                                <Carousel key={valor.id}>
                                    {valor.videos.map(video => 
                                        <CarouselItem key={video.id} {...video} />
                                        )}
                                </Carousel>
                            </Categories>)
                        
                    }
                )
        }
        </div>
    );
} 

const mapStateToProps = state => {
    return{
        categories : state.categories
    };
};

export default connect(mapStateToProps, null)(Home); 