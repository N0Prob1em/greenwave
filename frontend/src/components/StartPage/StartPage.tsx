import { useEffect, useRef, useState } from 'react';
import ProductsApi from '../../api/Products';
import ProductCard from '../ProductsPage/ProductCard/ProductCard';
import Navbar from "../Navbar/Navbar"
import imageUrl from '../../assets/images/iphone14.jpg'
import { Button } from '@mui/material';
import { styled } from '@mui/system';

export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string
  dateAdded: string
}

const ViewButton = styled(Button)`
  background-color: #7FC37E;
  color: white;
  &:hover {
    background-color: #6a9f66;
  }
`;

const StartPage = () => {
  const initialProducts: IProduct[] = []
  const [products , setProducts] = useState(initialProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await ProductsApi.getAllProducts();
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const productList = products.map(product => <ProductCard key={product.id} product={product} />);

  return (
    <>
      <Navbar/>
      <div className="flex flex-col">
        <div className="flex bg-background mt-10">
          <div className='w-1/3'>
            <img className="object-cover h-96 w-full" src={imageUrl} alt="" />
          </div>

          <div className='w-2/3 text-white p-8'>
            <p className='text-5xl font-bold'>Iphone 14 Pro</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br />
            <ViewButton>View</ViewButton>
          </div>

        </div>

        <br />

        <div className="p-4">
          <p className="text-xl font-bold px-4">Featured products</p>
          <div className='flex flex-wrap'>
            {productList}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default StartPage