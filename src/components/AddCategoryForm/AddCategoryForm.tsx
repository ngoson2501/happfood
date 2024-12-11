"use client"


import React, { useState } from 'react';

interface AddCategoryFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => Promise<void>;
}

const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ visible, onClose, onSubmit }) => {
  const [title, setTitle] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [topic, setTopic] = useState<string>(''); // Thêm state cho topic

  // Xử lý thay đổi file từ input
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  // Xử lý form submit
  const handleFinish = async (event: React.FormEvent) => {
    event.preventDefault(); // Ngừng hành động mặc định của form

    // Kiểm tra nếu chưa nhập title
    if (!title) {
      alert("Please input the category title!");
      return;
    }

    // Kiểm tra nếu chưa chọn file
    if (!file) {
      alert("Please upload a cover image.");
      return;
    }

    // Kiểm tra nếu chưa chọn topic
    if (!topic) {
      alert("Please select a topic.");
      return;
    }

    // Tạo FormData và append các trường cần thiết
    const formData = new FormData();
    formData.append("title", title); // Gửi title
    formData.append("coverImage", file); // Gửi ảnh với tên trường 'coverImage'
    formData.append("topic", topic); // Gửi topic

    // Gọi hàm onSubmit và reset form sau khi gửi thành công
    await onSubmit(formData);

    // Reset form
    setTitle('');
    setFile(null);
    setTopic('');
    onClose(); // Đóng modal sau khi gửi
  };

  if (!visible) return null; // Không hiển thị nếu modal không visible

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Add Category</h3>
        <form onSubmit={handleFinish}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
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
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Topic:</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              required
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

export default AddCategoryForm;

