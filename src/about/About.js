import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
const About = () => {
  return (
    <div className='home'>
    <div className="container">

      <h1 style={{margin:"0"}}>ABOUT PAGE</h1>
    <Link to={"/"}  className='buton'>
      <button >
        go to main
      </button>
    </Link>
    </div>
   
    </div>
  )
}

export default About