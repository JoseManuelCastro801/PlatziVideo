import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Proptypes from 'prop-types';
import  { setFavorite , deletFavorite} from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'
import removeIcon from '../assets/static/icons8-remove-64.png'


const CarouselItem = (props) => {

    const { id , cover , title , year , description , contentRating , duration , isList } = props;

    const handleSetFavorite = () => {
        props.setFavorite({
           id , cover , title , year , description , contentRating , duration 
        })
    }
    const handleDeletFavorite = (itemid) => {
        props.deletFavorite(
            itemid
        )
    }

    return(
        <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
            <div>
                <Link to={`/Player/${id}`} >
                    <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
                </Link>
                {
                    isList ? 
                    <img 
                    className="carousel-item__details--img" 
                    src={removeIcon} 
                    alt="remove Icon"
                    onClick={() => handleDeletFavorite(id)}
                /> 
                    :
                    <img 
                    className="carousel-item__details--img" 
                    src={plusIcon} 
                    alt="Plus Icon"
                    onClick={handleSetFavorite}
                /> 
                }

            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}min`}</p>
        </div>
    </div>
    )


};

CarouselItem.prototype = {
    cover : Proptypes.string.isRequired,
    title : Proptypes.string.isRequired,
    year : Proptypes.string.isRequired,
    description : Proptypes.string.isRequired,
    contentRating : Proptypes.string.isRequired,
    duration : Proptypes.string.isRequired
}

const mapDispatchToProps = {
    setFavorite,
    deletFavorite
}

export default connect(null , mapDispatchToProps)(CarouselItem)