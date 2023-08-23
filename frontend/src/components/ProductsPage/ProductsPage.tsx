import { useEffect, useState } from 'react';
import ProductsApi from '../../api/PostApi';
import ProductCard from './ProductCard/ProductCard';

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

  return (
    <>
    <div className='p-3'>
      <div className='text-xl mb-2'>
        <h1 className='px-4'>All products</h1>
      </div>
      <div className='flex flex-wrap gap-4'>
        {productList}
      </div>
    </div>
    </>
    
  )
}

export default ProductsPage;
