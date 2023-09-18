import React from 'react'
import './Welcome.css'
import {useNavigate} from 'react-router-dom'



function Welcome() {
  const navigate=useNavigate()
  let signUp=()=>{
    navigate('/signup')
  }
  return (
    <div>
        <div className="first-div">
            <div className="dark-bg">
            <h1>Unlimited movies, TV shows and more</h1>
            <button className='get-start' onClick={signUp}>Get Start</button>
            </div>
        </div>
        
    </div>
  )
}

export default Welcome