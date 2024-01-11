import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import axios from "axios"
import {useParams} from "react-router-dom"
import "./index.scss"
const DetailsPage = () => {

const {id}=useParams()
    const [data, setData] = useState(null)

async function getById() {
    const res=await axios(`http://localhost:8000/${id}`)
    setData(res.data)
}
useEffect(() => {
    getById()
}, [])

  return (
    <div className='details'>

{
    data &&
    
    <Card {...data}/>
}
    </div>
  )
}

export default DetailsPage