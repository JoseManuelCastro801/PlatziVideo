import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import useInitialState from '../Hooks/useInitialSatate.js'

import '../assets/styles/app.scss'


const Home = ({ categories }) =>{

    return(
        <div>
        <Search></Search>
        {
            categories.map(valor => {
                       if(valor.videos.length> 0 )
                            return(     
                            <Categories key={valor.id} title={valor.nombre} >
                                        <Carousel key={valor.id}>
                                        {valor.videos.map((video , i) => 
                                            <CarouselItem key={i} {...video} isList/>
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