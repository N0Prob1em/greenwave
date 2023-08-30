import { useEffect, useState } from 'react';
import ProductsApi from '../../api/PostApi';
import ProductCard from '../ProductsPage/ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { useProduct } from '../ProductsPage/ProductContext';
import { Button } from '@mui/material';

export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string
  dateAdded: string
}

const StartPage = () => {
  const initialProducts: IProduct[] = []
  const [products , setProducts] = useState(initialProducts);
  const [randomInt, setRandomInt] = useState(0);
  const { setProductId } = useProduct();

  const handleProductClick = (productId: string) => {
    setProductId(productId); 
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await ProductsApi.getAllProducts();
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const assignRandomInt = () => {
      const x = Math.random()
      setRandomInt(x);
    };
    assignRandomInt();
    
  }, []);

  const productList = products.map(product => <ProductCard key={product.id} product={product} />);
  const randomProduct: IProduct = products[Math.floor(randomInt * products.length)];
  

  return (
    <>
      <div className="flex flex-col">
        <div className="flex bg-[#383434] mt-10">
          <div className='w-1/3'>
            <Link to="/product" onClick={() => handleProductClick(randomProduct?.id)}>
              <img className="object-cover h-96 w-full" src={randomProduct?.imageUrl} alt="" />
            </Link>
          </div>
          <div className='w-2/3 text-white p-8'>
            <Link to="/product" onClick={() => handleProductClick(randomProduct?.id)}>
              <p className='text-5xl font-bold'>{randomProduct?.title}</p>
            </Link>
            <br />
            <p>{randomProduct?.description}</p>
            <br />
            <Link to="/product" onClick={() => handleProductClick(randomProduct?.id)}>
              <Button sx={{ backgroundColor: '#7FC37E', color: 'white', lineHeight: 2, ":hover": { backgroundColor: '#6a9f66' } }}>View</Button>
            </Link>
          </div>
        </div>
        <br />
        <div className="p-4">
          <p className="text-xl font-bold px-4 mb-2">Featured products</p>
          <div className='flex flex-wrap gap-4'>
            {productList}
          </div>
        </div>
      </div>
    </>
  )
}

export default StartPage