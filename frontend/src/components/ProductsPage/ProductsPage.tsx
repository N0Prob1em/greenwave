import { useEffect, useState } from 'react';
import ProductsApi from '../../api/Products';
import ProductCard from './ProductCard/ProductCard';
import './ProductsPage.css';
import Navbar from '../Navbar/Navbar';


export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string
  dateAdded: string
}

function ProductsPage() {
  const initialProducts: IProduct[] = []
  const [products , setProducts] = useState(initialProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await ProductsApi.getAllProducts();
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const productList = products.map(product => <ProductCard key={product.id} product={product} />);

  //for testing multiple components add to list
  //const postList = [<PostCard key={posts[0].id} post={posts[0]} />, <PostCard key={posts[0].id} post={posts[0]} />, <PostCard key={posts[0].id} post={posts[0]} />, <PostCard key={posts[0].id} post={posts[0]} />]

  return (
    <>
    <Navbar/>
    <div className='p-3'>
      <div className='text-xl'>
        <h1 className='px-4'>All products</h1>
      </div>
      <div className='flex flex-wrap'>
        {productList}
      </div>
    </div>
    </>
    
  )
}

export default ProductsPage;
