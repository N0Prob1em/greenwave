import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import StartPage from './components/StartPage/StartPage';
import ProductsPage from './components/ProductsPage/ProductsPage'
import SingleProduct from './components/SingleProduct/SingleProduct'
import AddProduct from './components/AddProduct/AddProduct';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import ContactUsForm from './components/ContactUs/ContactUsForm';
import './App.css'
import ContactForm from './components/ContactUs/ContactUsForm';

function App() {


  return (
    <>
    <div className='flex justify-center'>
      <div className='laptop:w-3/4 bg-white phone:w-full max-w-7xl'>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/contactus" element={<ContactUsForm />} />
          </Routes>
        </BrowserRouter>
        </div>
    </div>
    </>
  )
}

export default App