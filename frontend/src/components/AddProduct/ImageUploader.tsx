import React, { ChangeEvent, useState } from 'react';

interface ImageUploadProps {
    setFileData: React.Dispatch<React.SetStateAction<File | null>>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setFileData }) => {
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
        setFileData(file);
    }
  };

  return (
    <div>
      <input type="file" className="border rounded p-2" onChange={handleFileChange} />
      {previewUrl && <img src={previewUrl as string} className="object-contain h-48 w-96 ..." alt="Uploaded" />}
    </div> 
    
  );
};

export default ImageUpload;
