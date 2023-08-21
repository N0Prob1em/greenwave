import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import ProductsApi from '../../api/PostApi';

export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string
  dateAdded: string
}

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
      {product && (
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
            <Link to={{
              pathname: '/contact',
              search: `?productTitle=${product.title}&productDes=${product.description}`,
            }}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-gray-600">Contact Now</Link>
          </div>
        </div>)}
    </>
  )
};

export default SingleProduct;
