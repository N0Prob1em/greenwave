import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import StartPage from './components/StartPage/StartPage';
import AllProductsPage from './components/ProductsPage/AllProductsPage'
import SingleProductPage from './components/SingleProduct/SingleProductPage'
import AddProduct from './components/AddProduct/AddProduct';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import './App.css'
import { ProductProvider } from './components/ProductsPage/ProductContext';
import LogoutRedirect from './components/Authentication/LogoutRedirect';

function App() {


  return (
    <>
    <div className='flex justify-center'>
      <div className='laptop:w-3/4 bg-white phone:w-full max-w-7xl'>
      <ProductProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/product" element={<SingleProductPage />}/>
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/logout" element={<LogoutRedirect />} />
          </Routes>
        </BrowserRouter>
        </ProductProvider>
        </div>
    </div>
    </>
  )
}

export default App