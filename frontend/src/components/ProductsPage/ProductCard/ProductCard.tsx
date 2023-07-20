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
    //<div className="laptop:w-1/3 p-4 phone:w-full tablet:w-2/4">
      <div className="max-w-xs mx-auto basic:w-full border-2 border-solid">
        <div>
          <a href={'/product/' + product.id}>
            <img
              className= 'object-contain h-48 w-96'
              src={product.imageUrl}
              alt=""
            /> 
          </a>
        </div>
        <div className="bg-background p-4 text-white h-30">
          <a className='font-bold text-2xl' href={product.title}>{product.title}</a>
          <p className='line-clamp-2' data-te-toggle="tooltip"
          title={product.description}>{product.description}</p>
          
          <div className='flex justify-between items-center'>
            <p>Posted by <b>Ariano</b></p>
            <Link to={'/product/' + product.id}><ViewButton>View</ViewButton></Link>
          </div>
        </div>
    </div>
  );
}

export default ProductCard;
