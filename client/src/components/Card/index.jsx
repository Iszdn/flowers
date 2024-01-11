import React, { useContext } from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext'
const Card = (product) => {
    const {addWish, wishlist}=useContext(WishlistContext)
    console.log(wishlist);
  return (
    <div className='card-flower'>
<div className="image-fl">
    <Link to={product._id}><img  src={product.image} alt="" /></Link>
    
</div>
<h3>{product.title}</h3>

<p>${product.price}</p>
<Link onClick={()=>addWish(product)}>wish</Link>
    </div>
  )
}

export default Card