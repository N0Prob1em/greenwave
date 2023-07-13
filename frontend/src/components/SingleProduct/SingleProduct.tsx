import Navbar from "../Navbar/Navbar";
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import imageUrl from '../../assets/images/iphone14.jpg'
import { useEffect, useState } from "react";
import ProductsApi from '../../api/Products';

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

const SingleProduct = () => {
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const url = window.location.href;
      const uuid = url.substring(url.lastIndexOf('/') + 1);

      const response = await ProductsApi.getProductById(uuid);
      setProduct(response.data);
    }
    fetchProduct();
    
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex p-6 justify-center">
        <div className="laptop:w-1/2 flex justify-center">
          <div className="flex align-center w-full h-full mr-4 bg-neutral-200">
            <img
                className= 'pic-1 rounded-t object-contain'
                src={imageUrl}
                alt=""
              />
          </div>
        </div>

        <div className="laptop:w-1/2">
          <p className="text-3xl font-bold">{product?.title}</p>
          <p>Posted by <b>Ariano</b></p>
          <br />
          <p>{product?.description}</p>
          <br />
          <ViewButton>Contact now</ViewButton>
        </div>
      </div>
    </>
  )
};

export default SingleProduct;
