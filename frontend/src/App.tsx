import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <div className='Product__div'>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </>
  )
}

export default App
