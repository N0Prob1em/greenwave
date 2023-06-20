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
    <div className="col-md-3 col-sm-6">
      <div className="product-grid4">
        <div className="product-image4">
          <a href={product.id}>
            <img
              className= 'pic-1'
              src={imageUrl}
              alt=""
            /> 
          </a>
            <span className="product-new-label">Available</span>
        </div>
        <div className="product-content">
          <h6 className="product-title">
            <a href={product.title}>{product.title}</a>
          </h6>
          <button className="claim">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
