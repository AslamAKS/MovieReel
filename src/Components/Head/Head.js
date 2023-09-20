import React from 'react'
import './Head.css'
import { Link } from 'react-router-dom'



function Head() {
  return (

    <div className='head'>
      <div className="logodiv">
        <img className='logo' src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='logo.png' />
      </div>
      <div className="nav">
        <div className="round">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
          </svg>
          <h5>Trending</h5>
        </div>
        <div className="round">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
          <h5>Upcoming</h5>
        </div>
        <div className="round">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
          </svg>
          <h5>Top Rated</h5>
        </div>
        <div className="round">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
          </svg>
          <h5>Trending</h5>
        </div>
      </div>
      
    </div>




  )
}

export default Head


{/* <div className='dropdown-root-div'>
        <div class="dropdown">
          <button class="dropbtn">Movies</button>
          <div class="dropdown-content">
            <Link to='/homescreen/trending'>Trending</Link>
            <Link to='/homescreen/upcoming'>Upcoming</Link>
            <Link to='/homescreen/popular'>Popular</Link>
            <Link to='/homescreen/toprated'>Top Rated</Link>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">TV Series</button>
          <div class="dropdown-content">
            <Link to='/homescreen/tv_ontheair'>On The Air</Link>
            <Link to='/homescreen/tv_trending_today'>Trending</Link>
            <Link to='/homescreen/tv_toprated'>Top Rated</Link>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Language</button>
        </div>
        
      </div>
      <div className='dropdown' style={{right:'20px'}}>
          <button className='dropbtn'>Account</button>
          <div class="dropdown-content">
            <a href="/home">Profile</a>
            <a href="/home">LogOut</a>
          </div>
        </div> */}