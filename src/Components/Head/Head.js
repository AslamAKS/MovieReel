import React from 'react'
import './Head.css'
import { Link } from 'react-router-dom'



function Head() {
  return (

    <div className='head'>
      <div className="logodiv">
        <img className='logo' src='MovieReel_logo.png' alt='logo.png' />
        
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