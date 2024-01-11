import React, { useEffect, useState } from 'react'
import "./index.scss"
import Card from '../../Card'
import axios from "axios"
const FlowerPrice = () => {
  const [data, setData] = useState([])
  async function getData() {
    const res=await axios("http://localhost:8000/")
setData(res.data)
  }
  useEffect(() => {
    getData()
  }, [])
  
const filterByPrice=(key)=>{
const sortedProduct=[...data]
switch (key) {
  case "inc":
    sortedProduct.sort((a,b)=>a.price-b.price)
    break;
    case "dec":
      sortedProduct.sort((a,b)=>b.price-a.price)
      break;
  default:
    break;
    
}
setData(sortedProduct)

}

  return (
    <section id='section'>
<div className="header-content">
  <h4 >Devoted to wonderful beauty</h4>
  <h3>Flowers Pricing</h3>
 
</div>
<div className="container"> 
<div className="filter">
  <h4>Filter:</h4> 
  <p onClick={()=>filterByPrice("inc")}>low to high</p>
  <p onClick={()=>filterByPrice("dec")}>high to low</p>
  </div>
  <div className="flowers row">
    {
      data && data.map(x=>
        <div className="col-lg-4 col-md-6 col-12">
<Card {...x}/>
</div>
        )
    }

</div>
</div>

    </section>
  )
}

export default FlowerPrice