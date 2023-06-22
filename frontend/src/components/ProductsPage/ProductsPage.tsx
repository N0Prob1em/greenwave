import { useEffect, useState } from 'react';
import ProductsApi from '../../api/Products';
import ProductCard from './ProductCard/ProductCard';
import './ProductsPage.css';


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
    <div className='flex justify-center'>
      <div className='flex flex-wrap laptop:w-3/5 p-3'>
        {productList}
      </div>
    </div>
  )
}

export default ProductsPage;
