import React, { ChangeEvent, useState } from 'react';
import { supabase } from './superbaseConfig';

interface ImageUploadProps {
    setImgUrl: React.Dispatch<React.SetStateAction<string | null>>;
  }

const ImageUpload: React.FC<ImageUploadProps> = ({ setImgUrl }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const fileData = selectedFile;
    const fileName = selectedFile.name;

    try {
      const { data, error } = await supabase.storage.from('GreenWave').upload(fileName, fileData);
      const url = await supabase.storage.from('GreenWave').getPublicUrl(fileName);

      if (error) {
        console.error('Failed to upload image.', error);
      } else if (data) {
        const uploadedImageURL = await supabase.storage.from('GreenWave').getPublicUrl(fileName);
        setImgUrl(uploadedImageURL.data.publicUrl);
      }
    } catch (error) {
      console.error('Error occurred while uploading the image:', error);
    }
  };

  return (
    <div>
      <input type="file" className="border rounded p-2" onChange={handleFileChange} />
      <button className="bg-gray-600 text-white px-4 py-2.5 rounded hover:font-bold" onClick={handleUpload}>Upload Image</button>
    </div> 
    
  );
};

export default ImageUpload;
