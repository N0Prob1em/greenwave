import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import StartPage from './components/StartPage/StartPage';
import ProductsPage from './components/ProductsPage/ProductsPage'
import SingleProduct from './components/SingleProduct/SingleProduct'
import AddProduct from './components/AddProduct/AddProduct';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import ContactUsForm from './components/ContactUs/ContactUsForm';
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/Authentication/LoginButton';

function App() {

  const { isAuthenticated } = useAuth0();

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
            {isAuthenticated ? <Route path="/add" element={<AddProduct />} /> : <Route path="/add" element={<LoginButton />} />}
            {isAuthenticated ? <Route path="/contactus" element={<ContactUsForm />} /> : <Route path="/contactus" element={<LoginButton />} />}
          </Routes>
        </BrowserRouter>
        </div>
    </div>
    </>
  )
}

export default App