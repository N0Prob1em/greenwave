import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
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

const ViewButton = styled(Button)`
  background-color: #7FC37E;
  color: white;
  &:hover {
    background-color: #6a9f66;
  }
`;

function ProductCard({ product }: IProduct) {
  
  return (
    <div className="laptop:w-1/3 p-4 phone:w-full tablet:w-2/4">
        <div className="product-image4">
          <a href={product.id}>
            <img
              className= 'pic-1 rounded-t'
              src={imageUrl}
              alt=""
            /> 
          </a>
        </div>
        <div className="product-content bg-background p-6 rounded-b text-white">
          <a className='product-title font-bold text-2xl' href={product.title}>{product.title}</a>
          <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          
          <div className='flex justify-between items-center'>
            <p>Posted by <b>Ariano</b></p>
            <Link to={'/product/' + product.id}><ViewButton>View</ViewButton></Link>
          </div>
        </div>
    </div>
  );
}

export default ProductCard;
