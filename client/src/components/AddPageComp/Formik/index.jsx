import React from 'react';
import { useFormik } from 'formik';
import "./index.scss"
import axios from "axios"
const AddForm = () => {

   async function addFlower(values) {
        const res=await axios.post("http://localhost:8000/",values)
    }


 const formik = useFormik({
    initialValues: {
      image: '',
      title: '',
      price: '',
    },
    onSubmit: (values, {resetForm} )=> {
        addFlower(values)
        resetForm()
    },
  });
  return (
     <form onSubmit={formik.handleSubmit}>
      <label htmlFor="image">image url</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.image}
      />

      <label htmlFor="title">title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
      />

      <label htmlFor="price">price</label>
      <input
        id="price"
        name="price"
        type="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />

      <button type="submit">Add</button>
    </form>
  )
}

export default AddForm

 