import React from 'react'
import './Head.css'
import {Link} from 'react-router-dom'



function Head() {
  return (

    <div className='head'>

      <img className='logo' src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='logo.png' />

      <div className='dropdown-root-div'>
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
            <a href="/home">Trending</a>
            <a href="/home">On Air</a>
            <a href="/home">Upcoming</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Language</button>
        </div>
        <div className='dropdown'>
        <button className='dropbtn'>Account</button>
        <div class="dropdown-content">
            <a href="/home">Profile</a>
            <a href="/home">LogOut</a>
          </div>
      </div>
      </div>
    </div>




      )
}

      export default Head