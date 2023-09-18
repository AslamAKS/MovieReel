import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Banner.css'
import {BASE_URL, IMAGE_URL, API_KEY } from '../../URLs'
import { useNavigate } from 'react-router-dom';

function ImageSlider ()  {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,// Change this value to adjust the delay between slides (in milliseconds)
    arrows: false, // Hide the arrow buttons
    adaptiveHeight: true, // Fit slide height to the content
    variableWidth: false,
  };

  const navigate=useNavigate()
  const [state, setstate] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then((responce) => {
      setstate(responce.data.results);
    })
  })
  const playVideo = (id) => {
    //console.log(id)
     axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`).then((responce) => {
      let video=(responce.data.results[0].key)
      //console.log(video)
      navigate('/homescreen/playvideo',{state:video})
      
    })
  }

  return (
    <div className='sliderbackground'>
        <div className='sliderbackgroundshadow'>
        <Slider {...settings}>
      {state.map((image, index) => (
        <div key={index} className='slide-img'>
          <img onClick={()=>{playVideo(image.id)}} style={{margin:'auto', width: 500, height: 300, borderRadius: 5, }} src={`${IMAGE_URL + image.backdrop_path}`} alt={`Slide ${index + 1}`} />
          <h1 className='title'>{image.original_title}</h1>
          <button onClick={()=>{playVideo(image.id)}} className='trailer-button'>Watch Now</button>
        </div>
        
      ))}
    </Slider>
    <div className="bottom-shade"></div>
        </div>
    </div>
  );
};

export default ImageSlider;

