import React from 'react'

function WatchMovie() {
  return (
    <div>
        {state.map((obj) => (
            <div style={{
              display: 'flex',
              backgroundSize: 'cover',
              height: '700px',
              'backgroundImage': `url(${'https://image.tmdb.org/t/p/w500' + obj.backdrop_path})`,
            }}>
              <div className='over-banner'>
                <h1 className='title'>{obj.original_title}</h1>
                <button className='trailer-button'>Watch Trailer</button>
                <h4 className='discription'>{obj.overview}</h4>
                
              </div>
              <div><div className="bottom-shade"></div></div>

            </div>
        ))}
    </div>
  )
}

export default WatchMovie