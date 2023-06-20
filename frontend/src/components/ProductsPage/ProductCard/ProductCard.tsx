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
    <div className="w-1/3 p-3">
        <div className="product-image4">
          <a href={product.id}>
            <img
              className= 'pic-1'
              src={imageUrl}
              alt=""
            /> 
          </a>
        </div>
        <div className="product-content">
          <a className='product-title font-bold' href={product.title}>{product.title}</a>
        </div>
    </div>
  );
}

export default ProductCard;
