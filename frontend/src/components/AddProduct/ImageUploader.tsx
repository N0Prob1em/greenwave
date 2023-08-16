import React, { ChangeEvent, useState } from 'react';

interface ImageUploadProps {
    setFileData: React.Dispatch<React.SetStateAction<File | null>>;
    setImageError: React.Dispatch<React.SetStateAction<string>>;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setFileData, setImageError }) => {
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(null);
  const imageFileRegex = /^image\/(png|jpe?g|gif)$/i;

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
        if(!imageFileRegex.test(file.type)){
          setImageError("Please upload a valid image file (PNG, JPEG, or GIF).");
        }else {
          setImageError("");
          setFileData(file);
        }
    }
    else{
      setPreviewUrl(null);
      setImageError("Please upload a valid image file (PNG, JPEG, or GIF).");
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
