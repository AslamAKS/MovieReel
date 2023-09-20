import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './CardForTrending.css'
import {BASE_URL, IMAGE_URL, API_KEY } from '../../URLs'


function CardForTrending(pops) {
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
    <div className='movie-list-trending'>
      <div>
        <h1 className='card-title-div'>{pops.title}</h1>

      </div>

      <div className="scroll-trending">
        {state.map((obj) => {
          return (<div className="scroll-list-trending">
            <img onClick={() =>  playVideo(obj.id)} style={{width: 300, height: 500, borderRadius: 5}} src={`${IMAGE_URL + obj.poster_path}`} alt="Movie preview" />
            {/* <div className="list-watch-trailer">
              <button onClick={() =>  playVideo(obj.id) } className="list-watch-trailer-button">{pops.upComing ? "Watch Trailer" : "Play"}
              </button>
              <h3 className="list-name">{obj.original_title}</h3></div> */}
          </div>)
        })}
      </div>
    </div>
  )
}

export default CardForTrending