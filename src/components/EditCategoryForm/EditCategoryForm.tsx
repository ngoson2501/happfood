"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface EditCategoryFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => Promise<void>;
  editData?: any; // Dữ liệu category để chỉnh sửa
}

const EditCategoryForm: React.FC<EditCategoryFormProps> = ({ visible, onClose, onSubmit, editData }) => {
  const [title, setTitle] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [topic, setTopic] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (editData) {
      setTitle(editData.title || '');
      setTopic(editData.topic || '');
      setImagePreview(editData.coverImage || null); // URL của hình ảnh hiện tại
    }
  }, [editData]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setFile(file);
      setImagePreview(URL.createObjectURL(file)); // Tạo URL tạm thời cho file mới
    }
  };

  const handleFinish = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!title || !topic) {
      alert("Please fill all required fields!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("topic", topic);
    if (file) formData.append("coverImage", file);

    await onSubmit(formData);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Edit Category</h3>
        <form onSubmit={handleFinish}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category title"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Cover Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {imagePreview && (
              <div className="mt-2">
                <Image
                  src={imagePreview}
                  alt="Selected cover"
                  width={96} // Kích thước cố định tương ứng với w-24
                  height={96} // Kích thước cố định tương ứng với h-24
                  className="w-full h-40 object-cover rounded-md border border-gray-300"
                />
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Topic:</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select a topic</option>
              <option value="nguyên liệu">Nguyên liệu</option>
              <option value="phương pháp nấu">Phương pháp nấu</option>
              <option value="lễ tết">Lễ tết</option>
              <option value="thể loại">Thể loại</option>
            </select>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Submit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryForm;
