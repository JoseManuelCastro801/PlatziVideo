import React from 'react';
import Proptypes from 'prop-types';

import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'


const CarouselItem = ({ cover , title , year , description , contentRating , duration }) => (

    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon"/> 
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}min`}</p>
        </div>
    </div>

);

CarouselItem.prototype = {
    cover : Proptypes.string.isRequired,
    title : Proptypes.string.isRequired,
    year : Proptypes.string.isRequired,
    description : Proptypes.string.isRequired,
    contentRating : Proptypes.string.isRequired,
    duration : Proptypes.string.isRequired
}

export default CarouselItem;