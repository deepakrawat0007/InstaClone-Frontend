import React from 'react'
import front from '../img/front.jpg'
import { useNavigate } from 'react-router-dom'

const LandingPage = () =>{
    const navigate = useNavigate('/')
    

   const navigateInsta = () =>{
    
    navigate('/login')
 
   }
    return (
        <div className='front-box'>
          <img src={front} alt='front-page' className='front'/>
         <div className='enter'><h1>Enter TO Login</h1><button className='btn' onClick={navigateInsta}>Enter</button></div>
        </div>
    )
}

export default LandingPage;