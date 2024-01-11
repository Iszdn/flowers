import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';
import DetailsPage from './Pages/DetailsPage';
import Wishlist from './Pages/WishlistPage';
function App() {
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add' element={<AddPage/>}/>
        <Route path='/:id' element={<DetailsPage/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
