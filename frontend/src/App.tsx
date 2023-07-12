import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';
import ProductsPage from './components/ProductsPage/ProductsPage'
import SingleProduct from './components/SingleProduct/SingleProduct'
import './App.css'

function App() {

  return (
    <>
    <div className='flex justify-center'>
      <div className='laptop:w-3/4 bg-white phone:w-full'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
        </BrowserRouter>
        </div>
    </div>
    </>
  )
}

export default App
