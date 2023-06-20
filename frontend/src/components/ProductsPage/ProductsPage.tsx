import { useEffect, useState } from 'react';
import PostsApi from '../../api/Posts';
import PostCard from './ProductCard/ProductCard';
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
  const [posts , setPosts] = useState(initialProducts);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await PostsApi.getAllPosts();
      console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const postList = posts.map(post => <PostCard key={post.id} post={post} />);

  //for testing multiple components add to list
  //const postList = [<PostCard key={posts[0].id} post={posts[0]} />, <PostCard key={posts[0].id} post={posts[0]} />, <PostCard key={posts[0].id} post={posts[0]} />, <PostCard key={posts[0].id} post={posts[0]} />]


  return <div className="row">{postList}</div>;
}

export default ProductsPage;
