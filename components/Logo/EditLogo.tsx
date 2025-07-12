// components/Logo/EditLogo.tsx
"use client";

import useAppStore from "@/store/store";
import { useState } from "react";

const EditLogo = () => {
  const { setIsEditLogoModalOpen } = useAppStore();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    if (!selectedFile) return;
    setUpdating(true);

    // 🟡 Simulate update
    setTimeout(() => {
      alert("Logo updated successfully!");
      setUpdating(false);
      setIsEditLogoModalOpen(false);
    }, 1500);

    // ✅ Real API call example:
    // const formData = new FormData();
    // formData.append("logo", selectedFile);
    // await fetch('/api/update-logo', { method: 'POST', body: formData });
  };

  return (
    <div className="flex mx-auto items-center h-full my-auto backdrop:brightness-75 justify-center max-w-[600px] rounded-lg">
      <div className="p-6 bg-white rounded-lg border-2 w-full max-w-md shadow-md">
        <h6 className=" font-bold mb-4">Edit Logo</h6>
        
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-lg file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 border-2 rounded-lg"
        />

        {preview && (
          <div className="mt-4">
            <p className="text-sm mb-1">Preview:</p>
            <img src={preview} alt="Preview" className="h-24 object-contain" />
          </div>
        )}

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setIsEditLogoModalOpen(false)}
            className="px-4 py-1 border border-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            disabled={!selectedFile || updating}
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {updating ? "Updating..." : "Update Logo"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditLogo;
