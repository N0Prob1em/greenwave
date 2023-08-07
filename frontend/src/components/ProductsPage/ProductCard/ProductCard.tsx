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
  line-height: 0.75rem;
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
          <Link to={'/product/' + product.id} >
            <img
              className= 'object-contain h-48 w-96'
              src={product.imageUrl}
              alt=""
            /> 
          </Link>
        </div>
        <div className="bg-[#383434] p-4 text-white h-30">
          <a className='font-bold text-2xl' href={product.title}>{product.title}</a>
          <div className="group cursor-default relative inline-block border-b border-gray-400 w-50 my-4">
            <p className='line-clamp-2 '>{product.description}</p>
            <div className="opacity-0 w-50 bg-white text-black text-center text-s rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-36 px-3 pointer-events-none">
              {product.description}
              <svg className="absolute text-white h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <p>Posted by <b>Ariano</b></p>
            <Link to={'/product/' + product.id}><ViewButton>View</ViewButton></Link>
          </div>
        </div>
    </div>
  );
}

export default ProductCard;
