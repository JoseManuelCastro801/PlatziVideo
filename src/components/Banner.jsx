import React from 'react'
import '../assets/styles/banner.scss'


  
const Banner = () => (


<div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
    </ol>
   

    <div class="carousel-inner">
        <div class="active item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
   
   
    <a class="carousel-control left"  data-slide="prev">&lsaquo;</a>
    <a class="carousel-control right"  data-slide="next">&rsaquo;</a>
</div>


)


export default Banner;