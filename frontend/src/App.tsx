import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';
import ProductsPage from './components/ProductsPage/ProductsPage'
import SingleProduct from './components/SingleProduct/SingleProduct'
import AddProduct from './components/AddProduct/AddProduct';
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <>
    <div className='flex justify-center'>
      <div className='laptop:w-3/4 bg-white phone:w-full'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            {isAuthenticated && (<Route path="/add" element={<AddProduct />}/>)}
          </Routes>
        </BrowserRouter>
        </div>
    </div>
    </>
  )
}

export default App
