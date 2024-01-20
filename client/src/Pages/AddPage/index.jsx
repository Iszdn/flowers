import React from 'react'
import "./index.scss"
import  { useEffect, useState } from 'react'
import axios from "axios"
import AddForm from '../../components/AddPageComp/Formik'


const AddPage = () => {
  const [data, setData] = useState([])
const [search, setSearch] = useState("")
const [property, setProperty] = useState(null)
  async  function getFlowers() {
    const res=await axios("http://localhost:8000/") 
setData(res.data)
  }
  async  function deleteFlowers(id) {
    const res=await axios.delete(`http://localhost:8000/${id}`) 
getFlowers()
  }
  useEffect(() => {
   getFlowers()
  }, [])
  return (
    <>
<AddForm getFlowers={getFlowers}/>
<div>
  <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
  <button onClick={()=>setProperty({name:"price",asc:true})}>increase</button>
  <button onClick={()=>setProperty({name:"price",asc:false})}>decrease</button>
  <button onClick={()=>setProperty({name:"price",asc:null})}>default</button>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>image</th>
        <th>title</th>
        <th>price</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
     {
        data && data
       .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
       .sort((a,b)=>{
        if (property && property.asc===true) {
          return a[property.name] > b[property.name] ? -1 : ((b[property.name] > a[property.name]) ? 1 : 0)
        }
        else if (property && property.asc===false) {
          return a[property.name] < b[property.name] ? -1 : ((b[property.name] < a[property.name]) ? 1 : 0)
        }
        else{
          return 0
        }
       })
        .map(x=>
            <tr key={x._id}>
        <td>{x.image}</td>
        <td>{x.title}</td>
        <td>{x.price}</td>
        <td><button onClick={()=>deleteFlowers(x._id)}>del</button></td>
      </tr>
            )
     }
      

   
    </tbody>
  </table>
</div>

    </div>
    </>
  )
}

export default AddPage