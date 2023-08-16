import React, { useState } from "react";
import { useHistory } from 'react-router-use-history'
import { supabase } from './superbaseConfig';
import { v4 as uuidv4 } from "uuid";
import PostApi from '../../api/PostApi';
import Navbar from '../Navbar/Navbar';
import ImageUploader from './ImageUploader';

const AddProductPage: React.FC = () => {
  const [fileData, setFileData] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [tag, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  const [desError, setDesError] = useState<string>("");
  const [imageError, setImageError] = useState<string>("");
  const history = useHistory();

  const validateForm = () => {
    let isValid = true;
    console.log("validate");
    if (!title.trim()) {
      setTitleError("Product Name is required.");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!description.length) {
      setDesError("Product Description is required.");
      isValid = false;
    } else {
      setDesError("");
    }

    if (!fileData) {
      isValid = false;
      setImageError("Please upload a valid image file (PNG, JPEG, or GIF).")
    } else {
      setImageError("");
    }

    return isValid;
  };

const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (!newTitle.trim()) {
      setTitleError("Product Name is required.");
    } else {
      setTitleError("");
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    if (!newDescription.trim()) {
      setDesError("Product Description is required.");
    } else {
      setDesError("");
    }
  };

  const submitPost = async () => {
    try {
      if (!fileData || !validateForm()) return;

      const url = await UploadFile(fileData);
      if (url) { 
        const response = await PostApi.postProduct({
          title: title,
          description: description,
          tag: tag,
          imageUrl: url,
          dateAdded: `${new Date().toISOString().split("T")[0]} ${new Date().toLocaleTimeString().split("PM")[0].trimEnd()}`,
        });
  
        if (response) {
          alert("Added successfully..");
          history.go(0);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };  

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    submitPost();
  };

  const UploadFile = async(fileData: File) => {
  try {
    const filename = `${uuidv4()}_${fileData.name}`;
    const data = await supabase.storage.from('GreenWave').upload(filename, fileData);
    if (data) {
      const uploadedImageURL = await supabase.storage.from('GreenWave').getPublicUrl(filename);
      return uploadedImageURL.data.publicUrl;
    }
  } catch (error) {
    console.error('Error occurred while uploading the image:', error);
  }
}

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-8 mt-8 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium">Product Name</label>
            <input type="text" id="title" name="title" value={title} onChange={handleTitleChange} className="mt-1 p-2 w-full border rounded" />
            {titleError && <p className="text-red-600">{titleError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block font-medium">Tags</label>
            <input type="text" placeholder="(optional)" id="tag" name="tag" value={tag} onChange={(e) => setTags(e.target.value.split(","))} className="mt-1 p-2 w-full border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium">Description</label>
            <textarea id="description" name="description" rows={3} value={description} onChange={handleDescriptionChange} className="mt-1 p-2 w-full border rounded" />
            {desError && <p className="text-red-600">{desError}</p>}
          </div>
          <div className="mb-4">
            <ImageUploader setFileData={setFileData} setImageError={setImageError} />
            {imageError && <p className="text-red-600">{imageError}</p>}
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-gray-600">Add Product</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProductPage;
