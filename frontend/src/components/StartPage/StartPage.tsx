import { useEffect, useState } from 'react';
import ProductsApi from '../../api/Products';
import ProductCard from '../ProductsPage/ProductCard/ProductCard';
import Navbar from "../Navbar/Navbar"
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
  const [randomInt, setRandomInt] = useState(0);

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
      <Navbar/>
      <div className="flex flex-col">
        <div className="flex bg-background mt-10">
          <div className='w-1/3'>
            <img className="object-cover h-96 w-full" src={randomProduct?.imageUrl} alt="" />
          </div>

          <div className='w-2/3 text-white p-8'>
            <p className='text-5xl font-bold'>{randomProduct?.title}</p>
            <br />
            <p>{randomProduct?.description}</p>
            <br />
            <ViewButton>View</ViewButton>
          </div>

        </div>

        <br />

        <div className="p-4">
          <p className="text-xl font-bold px-4">Featured products</p>
          <div className='flex flex-wrap gap-4'>
            {productList}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default StartPage