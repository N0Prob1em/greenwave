import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import StartPage from './components/StartPage/StartPage';
import ProductsPage from './components/ProductsPage/ProductsPage'
import SingleProduct from './components/SingleProduct/SingleProduct'
import AddProduct from './components/AddProduct/AddProduct';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import './App.css'
import LogoutButton from './components/Authentication/LogoutButton';
import { ProductProvider } from './components/ProductsPage/ProductContext';

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
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product" element={<SingleProduct />}/>
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/logout" element={<LogoutButton />} />
          </Routes>
        </BrowserRouter>
        </ProductProvider>
        </div>
    </div>
    </>
  )
}

export default App