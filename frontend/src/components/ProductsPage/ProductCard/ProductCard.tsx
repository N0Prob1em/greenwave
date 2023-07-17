import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

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
          <a href={'/product/' + product.id}>
            <img
              className= 'pic-1 rounded-t min-h-5 max-h-64'
              src={product.imageUrl}
              alt=""
            /> 
          </a>
        </div>
        <div className="product-content bg-background p-6 rounded-b text-white">
          <a className='product-title font-bold text-2xl' href={product.title}>{product.title}</a>
          <p className='pb-4'>{product.description}</p>
          
          <div className='flex justify-between items-center'>
            <p>Posted by <b>Ariano</b></p>
            <Link to={'/product/' + product.id}><ViewButton>View</ViewButton></Link>
          </div>
        </div>
    </div>
  );
}

export default ProductCard;
