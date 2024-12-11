import React, { useEffect, useState } from "react";
import Image from 'next/image';

interface EditUserFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => Promise<void>;
  editData?: {
    id: string;
    username: string;
    email: string;
    role: string;
    avatar?: string;
  };
}

const EditUserForm: React.FC<EditUserFormProps> = ({ visible, onClose, onSubmit, editData }) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (editData) {
      setUsername(editData.username || "");
      setEmail(editData.email || "");
      setRole(editData.role || "user");
      setImagePreview(editData.avatar || null);
    }
  }, [editData]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleFinish = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!username || !email || !role) {
      alert("Please fill all required fields!");
      return;
    }

    const formData = new FormData();
    formData.append("id", editData?.id || ""); // Pass User ID
    formData.append("username", username);
    formData.append("email", email);
    formData.append("role", role);
    if (file) formData.append("avatar", file);

    await onSubmit(formData);
    onClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h3 className="text-xl font-semibold mb-4">Edit User</h3>
        <form onSubmit={handleFinish}>

        <div className="mb-4">
        {imagePreview && (
            <div className="flex justify-center mt-2">
            <Image
                src={imagePreview}
                alt="Avatar preview"
                width={96} // Kích thước cố định tương ứng với w-24
                height={96} // Kích thước cố định tương ứng với h-24
                className="w-[100px] h-[100px] object-cover rounded-full border border-gray-300"
            />
            </div>
        )}
        <label className="block text-sm font-medium text-gray-700">Avatar:</label>
        <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
        </div>


          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Role:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
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

export default EditUserForm;
