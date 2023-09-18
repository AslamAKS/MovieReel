import React from 'react'
import YouTube from 'react-youtube'
import { useLocation } from 'react-router-dom';
function Play() {
    const location = useLocation()
    const key=location.state

    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
        
      };
  
  return (
    <div>
        <YouTube videoId={key} opts={opts}  />
    </div>
  )
}

export default Play

       
