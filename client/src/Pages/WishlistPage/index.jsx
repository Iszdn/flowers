import React, { useContext } from 'react'
import Card from '../../components/Card'
import { WishlistContext } from '../../context/WishlistContext'
import { Link } from 'react-router-dom'

const Wishlist = () => {
   const {wishlist,deleteWish}=useContext(WishlistContext)
  return (
    <div className='wishlist'>
<div className="row">

{
    wishlist && wishlist.map(x=>
    <div key={x._id} className='card-flower col-lg-3 col-md-6 col-12'>
<div className="image-fl">
    <Link><img  src={x.image} alt="" /></Link>
    
</div>
<h3>{x.title}</h3>

<p>${x.price}</p>
<Link onClick={()=>deleteWish(x)}>del</Link>
    </div>
    )
}


</div>
    </div>
  )
}

export default Wishlist