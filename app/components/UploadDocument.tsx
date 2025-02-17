// Example: components/UploadDocument.tsx
"use client";

import { useState } from 'react';
import { uploadDocument } from '@/utils/supabase/uploadDocument';

export default function UploadDocument() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      const data = await uploadDocument(file);
      setMessage('File uploaded successfully!');
      console.log('Upload result:', data);
    } catch (error: any) {
      setMessage(`Upload failed: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 border rounded">
      <h2 className="text-xl mb-4">Upload Document</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="mt-4 bg-green-500 text-white p-2 rounded">
        Upload
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
