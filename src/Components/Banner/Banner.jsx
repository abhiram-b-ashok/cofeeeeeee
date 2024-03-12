import React from 'react'
import "./Banner.css"
import NavBar from '../Navbar/NavBar'
function Banner() {
  return (
    <div className='banner'>
        <NavBar/>
        
        {/* <i class="bi bi-list"></i> */}
        
        <div className='content'>
            <h1 className='title'>Hello, it's a great <br />day for coffee</h1>
        </div>
    </div>
  )
}

export default Banner