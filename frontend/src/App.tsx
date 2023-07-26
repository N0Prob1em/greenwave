import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';
import ProductsPage from './components/ProductsPage/ProductsPage'
import SingleProduct from './components/SingleProduct/SingleProduct'
import CreatePage from './components/CreatePage/CreatePage';
import './App.css'

function App() {

  return (
    <>
    <div className='flex justify-center'>
      <div className='laptop:w-3/4 bg-white phone:w-full max-w-7xl'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/create" element={<CreatePage />}/>
          </Routes>
        </BrowserRouter>
        </div>
    </div>
    </>
  )
}

export default App
