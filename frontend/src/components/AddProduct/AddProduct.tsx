import React, { useState } from "react";
import PostApi from '../../api/PostApi';
import Navbar from '../Navbar/Navbar';

const AddProductPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTags] = useState<string[]>([]);
  const [imageUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [post, setPost] = useState<IPost>({
    title: "",
    description: "",
    tag: [],
    imageUrl: "",
    dateAdded: "",
  });

  interface IPost {
    title: string,
    description: string,
    tag: {},
    imageUrl: string,
    dateAdded: string,
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPost({
        title: title,
        description: description,
        tag: tag,
        imageUrl: imageUrl,
        dateAdded: new Date().toISOString().split("T")[0] +" "+ new Date().toLocaleTimeString().split("PM")[0].trimEnd()
      });
    try {
        if (post !== null) {
          const response = await PostApi.postProduct(post);
          if(response !== null)
            alert("Added successfully.."); // We need to check response success before redirecting.
        }
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-2xl mx-auto p-8 mt-8 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tags" className="block font-medium">
            Tags
          </label>
          <input
            type="text"
            id="tag"
            name="tag"
            value={tag}
            onChange={(e) => setTags(e.target.value.split(","))}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block font-medium">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          >
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home & Kitchen</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="tags" className="block font-medium">
            Image URL
          </label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            value={imageUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddProductPage;
