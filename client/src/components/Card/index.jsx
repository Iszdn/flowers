import React, { useContext } from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
const Card = (product) => {
    const {addWish}=useContext(WishlistContext)
    const {addBasket,basket}=useContext(BasketContext)
    console.log(basket);
  return (
    <div className='card-flower'>
<div className="image-fl">
    <Link to={product._id}><img  src={product.image} alt="" /></Link>
    
</div>
<h3>{product.title}</h3>

<p>${product.price}</p>
<span onClick={()=>addWish(product)}>wish</span>
<br />
<span onClick={()=>addBasket(product)}>basket</span>
    </div>
  )
}

export default Card