import React, { useState, useEffect } from "react";
import PostApi from '../../api/PostApi';
import Navbar from '../Navbar/Navbar';
import ImageUploader from './ImageUploader';

const AddProductPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [tag, setTags] = useState<string[]>([]);
  const [imageUrl, setImgUrl] = useState<string | null>(null);
  const [description, setDescription] = useState("");
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
    imageUrl: string | null,
    dateAdded: string,
  }
  console.log(imageUrl);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPost({
      title: title,
      description: description,
      tag: tag,
      imageUrl: imageUrl,
      dateAdded: new Date().toISOString().split("T")[0] + " " + new Date().toLocaleTimeString().split("PM")[0].trimEnd()
    });
  };

  useEffect(() => {
    const submitPost = async () => {
      try {
        if (post !== null) {
          const response = await PostApi.postProduct(post);
          if (response !== null)
            alert("Added successfully..");
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (post.title !== "") {
      submitPost();
    }
  }, [post]);

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
          <ImageUploader setImgUrl={setImgUrl} />
          {imageUrl && <img src={imageUrl} className="object-contain h-48 w-96 ..." alt="Uploaded" />}
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
