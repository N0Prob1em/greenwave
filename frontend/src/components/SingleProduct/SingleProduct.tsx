import Navbar from "../Navbar/Navbar";
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import imageUrl from '../../assets/images/iphone14.jpg'

const ViewButton = styled(Button)`
  background-color: #7FC37E;
  color: white;
  &:hover {
    background-color: #6a9f66;
  }
`;

const SingleProduct = () => {
  return (
    <>
      <Navbar />
      <div className="flex p-6 justify-center">
        <div className="laptop:w-1/2 flex justify-center">
          <div className="flex align-center w-96 h-96 bg-neutral-200">
            <img
                className= 'pic-1 rounded-t object-contain'
                src={imageUrl}
                alt=""
              />
          </div>
        </div>

        <div className="laptop:w-1/2">
          <p className="text-3xl font-bold">Product title</p>
          <p>Posted by <b>Ariano</b></p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <br />
          <ViewButton>Message now</ViewButton>
        </div>
      </div>
    </>
  )
};

export default SingleProduct;