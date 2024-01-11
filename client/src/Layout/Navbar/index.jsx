import React, { useState } from 'react'
import "./index.scss"
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [media, setMedia] = useState(false)
    function handleMedia() {
        setMedia(!media)
    }
  return (
   <>
   
<nav id='navbar'>
<div className="logo">
   <Link>Floral Studio</Link>
</div>
<div className="navigations">
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link>About Us</Link>
        </li>
        <li>
            <Link to="/add">Add</Link>
        </li>
        <li>
            <Link>Pricing</Link>
        </li>
        <li>
            <Link to="/wishlist">Wish</Link>
        </li>
    </ul>
</div>
<div className="navigat-media">
<span className='baric' onClick={()=>handleMedia()}><FaBars /></span>

</div>

</nav>

{
    media && <div className='navigation-media'>
<ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link>About Us</Link>
        </li>
        <li>
            <Link to="/add">Add</Link>
        </li>
        <li>
            <Link>Pricing</Link>
        </li>
        <li>
            <Link>Wish</Link>
        </li>
    </ul>
</div>
}

   </>
  )
}

export default Navbar