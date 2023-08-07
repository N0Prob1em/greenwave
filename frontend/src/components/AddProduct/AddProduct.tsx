import React, { useState, useEffect } from "react";
import { supabase } from './superbaseConfig';
import { v4 as uuidv4 } from "uuid";
import PostApi from '../../api/PostApi';
import Navbar from '../Navbar/Navbar';
import ImageUploader from './ImageUploader';

const AddProductPage: React.FC = () => {
  const [fileData, setFileData] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [tag, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [imageUrl, setImgUrl] = useState<string | null>(null);
  const [titleError, setTitleError] = useState<string>("");
  const [tagsError, setTagsError] = useState<string>("");
  const [desError, setDesError] = useState<string>("");
  const [imageError, setImageError] = useState<string>("");
  const imageFileRegex = /^image\/(png|jpe?g|gif)$/i;

  useEffect(() => {
    if (imageUrl !== null) {
      const post = {
        title,
        description,
        tag,
        imageUrl,
        dateAdded: `${new Date().toISOString().split("T")[0]} ${new Date().toLocaleTimeString().split("PM")[0].trimEnd()}`,
      };
      submitPost(post);
    }
  }, [imageUrl, title, description, tag]);

  const validateForm = () => {
    let isValid = true;
    console.log("validate");
    if (!title.trim()) {
      setTitleError("Product Name is required.");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!tag.length) {
      setTagsError("At least one tag is required.");
      isValid = false;
    } else {
      setTagsError("");
    }

    if (!description.length) {
      setDesError("Product Description is required.");
      isValid = false;
    } else {
      setDesError("");
    }

    if (!fileData || !imageFileRegex.test(fileData.type)) {
      setImageError("Please upload a valid image file (PNG, JPEG, or GIF).");
      isValid = false;
    } else {
      UploadFile(fileData);
      setImageError("");
    }

    return isValid;
  };

  const submitPost = async (post: IPost) => {
    try {
      if (!imageUrl || !validateForm()) return;
      const response = await PostApi.postProduct(post);
      if (response) {
        alert("Added successfully..");
        setTitle("");
        setTags([]);
        setDescription("");
        setFileData(null);
        setImgUrl(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  interface IPost {
    title: string,
    description: string,
    tag: string[],
    imageUrl: string | null,
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
  };

  const UploadFile = async(fileData: File) => {
  try {
    const filename = `${uuidv4()}_${fileData.name}`;
    const { data, error } = await supabase.storage.from('GreenWave').upload(filename, fileData);

    if (error) {
      console.error('Failed to upload image.', error);
    } else if (data) {
      const uploadedImageURL = await supabase.storage.from('GreenWave').getPublicUrl(filename);
      setImgUrl(uploadedImageURL.data.publicUrl);
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
            <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 p-2 w-full border rounded" />
            {titleError && <p className="text-red-600">{titleError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block font-medium">Tags</label>
            <input type="text" id="tag" name="tag" value={tag} onChange={(e) => setTags(e.target.value.split(","))} className="mt-1 p-2 w-full border rounded" />
            {tagsError && <p className="text-red-600">{tagsError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-medium">Description</label>
            <textarea id="description" name="description" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 p-2 w-full border rounded" />
            {desError && <p className="text-red-600">{desError}</p>}
          </div>
          <div className="mb-4">
            <ImageUploader setFileData={setFileData} />
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
