import Navbar from './components/Navbar/Navbar'
import ProductsPage from './components/ProductsPage/ProductsPage'
import './App.css'

function App() {

  return (
    <>
    <div className='flex justify-center'>
      <div className='laptop:w-3/4 bg-white'>
        <Navbar/>
        <ProductsPage/>
      </div>
    </div>
    </>
  )
}

export default App
