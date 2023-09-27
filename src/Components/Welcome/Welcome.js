import React from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom'



function Welcome() {
  const navigate = useNavigate()
  let signUp = () => {
    navigate('/signup')
  }
  let logIn = () => {
    navigate('/login')
  }
  return (
      <div className="first-div">
          <img src="HomePageLogo.png" alt="FILIMFLIX_LOGO" />
        <h3>Unlimited movies,Unlimited Enjoyment</h3>
        <div className="button-home">
        <button className='get-start' onClick={logIn}>LOGIN</button>
        <button className='get-start' onClick={signUp}>SIGNUP</button>
        
        </div>
      </div>
  )
}

export default Welcome


