import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Card.css'
import {BASE_URL, IMAGE_URL, API_KEY } from '../../URLs'


function Card(pops) {
  const navigate=useNavigate()
  const [state, setstate] = useState([])
  useEffect(() => {
    axios.get(pops.url).then((responce) => {
      setstate(responce.data.results);
    })
  })
  const playVideo = (id) => {
    console.log(id)
     axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`).then((responce) => {
      let videoId=(responce.data.results[0].key)
      console.log('video id',videoId)
      navigate('/homescreen/playvideo',{state:videoId})
      
    })
  }
  
  return (
    <div className='movie-list'>
      <div>
        <h1 className='card-title-div'>{pops.title}</h1>

      </div>

      <div className="scroll">
        {state.map((obj) => {
          return (<div className="scroll-list">
            <img onClick={() => { console.log(obj.id) }} style={{width: 400, height: 200, borderRadius: 5}} src={`${IMAGE_URL + obj.backdrop_path}`} alt="Movie preview" />
            <div className="list-watch-trailer">
              <button onClick={() =>  playVideo(obj.id) } className="list-watch-trailer-button">{pops.upComing ? "Watch Trailer" : "Play"}
              </button>
              <h3 className="list-name">{obj.original_title}</h3></div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Card