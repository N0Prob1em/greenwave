//import { Link } from 'react-router-dom';
import imageUrl from '../../../assets/images/iphone14.jpg'

export interface IProduct {
  product: {
    id: string;
    title: string;
    description: string;
    imageUrl: string,
    dateAdded: string
  }
}

function ProductCard({ product }: IProduct) {
  return (
    <div className="laptop:w-1/4 p-3 phone:w-full tablet:w-2/4">
        <div className="product-image4">
          <a href={product.id}>
            <img
              className= 'pic-1 rounded-t'
              src={imageUrl}
              alt=""
            /> 
          </a>
        </div>
        <div className="product-content bg-background p-4 rounded-b text-white">
          <a className='product-title font-bold text-2xl' href={product.title}>{product.title}</a>
          <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          
          <div className='flex justify-between items-center'>
            <p>Posted by <b>Ariano</b></p>
            <button className='bg-accent px-3 py-2 rounded'>View</button>
          </div>
        </div>
    </div>
  );
}

export default ProductCard;
