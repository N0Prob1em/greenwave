import { useEffect, useState } from "react";
import ProductsApi from '../../api/PostApi';

export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string
  dateAdded: string
}

const SingleProductPage = () => {
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
      {product && (
        <div className="flex p-6 justify-center">
          <div className="laptop:w-1/2 flex justify-center">
            <div className="flex align-center w-full h-full mr-4">
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
            <p>Date added: {product?.dateAdded}</p>
            <br />
            <p>{product?.description}</p>
            <br />
          </div>
        </div>)}
    </>
  )
};

export default SingleProductPage;
