import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { useEffect, useState } from "react";
import ProductsApi from '../../api/PostApi';
import { IProduct } from "../ProductsPage/ProductsPage";
import { useProduct } from "../ProductsPage/ProductContext";

const ViewButton = styled(Button)`
  background-color: #7FC37E;
  color: white;
  &:hover {
    background-color: #6a9f66;
  }
`;

const SingleProduct = () => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { productId } = useProduct();

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId !== null) {
      const response = await ProductsApi.getProductById(productId);
      setProduct(response.data);
      }
    }
    fetchProduct();

  }, []);

  return (
    <>
      <div className="flex p-6 justify-center">
        <div className="laptop:w-1/2 flex justify-center">
          <div className="flex align-center w-full h-full mr-4 bg-neutral-200">
            <img
              className='pic-1 rounded-t object-contain'
              src={product?.imageUrl}
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
