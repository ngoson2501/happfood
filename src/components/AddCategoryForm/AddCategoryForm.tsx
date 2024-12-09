




// import React, { useState } from 'react';
// import { useUser } from '@/context/User-provider';
// import { Form, Input, Button, Upload, Modal, message } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// interface AddCategoryFormProps {
//     visible: boolean;
//     onClose: () => void;
//     onSubmit: (formData: FormData) => void;
// }

// const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ visible, onClose, onSubmit }) => {
//     const infoUser = useUser();
//     const [form] = Form.useForm();
//     const [file, setFile] = useState<File | null>(null);

//     // Hàm xử lý thay đổi file
//     const handleFileChange = (file: File) => {
//         setFile(file);
//     };

//     const handleFinish = (values: any) => {
//         if (!infoUser) {
//             message.error("User information is not available.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("title", values.title);
//         formData.append("user", infoUser.id);

//         if (file) {
//             formData.append("coverImage", file);
//         } else {
//             message.error("Please upload a cover image.");
//             return;
//         }

//         // Gọi hàm onSubmit và reset form
//         onSubmit(formData);
//         form.resetFields();
//         setFile(null); // Reset file sau khi gửi
//     };

//     return (
//         <Modal
//             title="Add Category"
//             visible={visible}
//             onCancel={onClose}
//             footer={null}
//         >
//             <Form form={form} onFinish={handleFinish}>
//                 <Form.Item
//                     label="Title"
//                     name="title"
//                     rules={[{ required: true, message: 'Please input the category title!' }]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Cover Image"
//                     rules={[{ required: true, message: 'Please upload a cover image!' }]}
//                 >
//                     <Upload
//                         name="coverImage"
//                         listType="picture"
//                         maxCount={1}
//                         beforeUpload={(file) => {
//                             handleFileChange(file as File); // Gọi hàm xử lý file
//                             return false; // Ngăn không cho tải lên tự động
//                         }}
//                         onRemove={() => {
//                             setFile(null); // Reset file khi file bị xóa
//                         }}
//                     >
//                         <Button icon={<UploadOutlined />}>Upload Cover Image</Button>
//                     </Upload>
//                 </Form.Item>

//                 <Form.Item>
//                     <Button type="primary" htmlType="submit">Submit</Button>
//                 </Form.Item>
//             </Form>
//         </Modal>
//     );
// };

// export default AddCategoryForm;




// import React, { useState } from 'react';
// import { Form, Input, Button, Upload, Modal, message } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// interface AddCategoryFormProps {
//     visible: boolean;
//     onClose: () => void;
//     onSubmit: (formData: FormData) => Promise<void>; // Đảm bảo onSubmit trả về Promise<void>
// }

// const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ visible, onClose, onSubmit }) => {
//     const [form] = Form.useForm();
//     const [file, setFile] = useState<File | null>(null);

//     const handleFileChange = (file: File) => {
//         setFile(file);
//     };

//     const handleFinish = async (values: any) => {
//         const formData = new FormData();
//         formData.append("title", values.title);
//         if (file) {
//             formData.append("coverImage", file);
//         } else {
//             message.error("Please upload a cover image.");
//             return;
//         }

//         // Gọi hàm onSubmit và reset form
//         await onSubmit(formData);
//         form.resetFields();
//         setFile(null); // Reset file sau khi gửi
//     };

//     return (
//         <Modal
//             title="Add Category"
//             visible={visible}
//             onCancel={onClose}
//             footer={null}
//         >
//             <Form form={form} onFinish={handleFinish}>
//                 <Form.Item
//                     label="Title"
//                     name="title"
//                     rules={[{ required: true, message: 'Please input the category title!' }]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Cover Image"
//                     rules={[{ required: true, message: 'Please upload a cover image!' }]}
//                 >
//                     <Upload
//                         name="coverImage"
//                         listType="picture"
//                         maxCount={1}
//                         beforeUpload={(file) => {
//                             handleFileChange(file as File);
//                             return false; // Ngăn không cho tải lên tự động
//                         }}
//                         onRemove={() => {
//                             setFile(null); // Reset file khi file bị xóa
//                         }}
//                     >
//                         <Button icon={<UploadOutlined />}>Upload Cover Image</Button>
//                     </Upload>
//                 </Form.Item>

//                 <Form.Item>
//                     <Button type="primary" htmlType="submit">Submit</Button>
//                 </Form.Item>
//             </Form>
//         </Modal>
//     );
// };

// export default AddCategoryForm;





// // AddCategoryForm.tsx
// import React, { useState } from 'react';
// import { Form, Input, Button, Upload, Modal, message } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// interface AddCategoryFormProps {
//     open: boolean;
//     onClose: () => void;
//     onSubmit: (formData: FormData) => Promise<void>;
// }

// const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ open, onClose, onSubmit }) => {
//     const [form] = Form.useForm();
//     const [file, setFile] = useState<File | null>(null);

//     const handleFileChange = (file: File) => {
//         setFile(file);
//     };

//     const handleFinish = async (values: any) => {
//         const formData = new FormData();
//         formData.append("title", values.title);
//         if (file) {
//             formData.append("coverImage", file);
//         } else {
//             message.error("Please upload a cover image.");
//             return;
//         }
    
//         await onSubmit(formData);
//         form.resetFields();
//         setFile(null); // Reset file sau khi gửi
//     };

//     return (
//         <Modal
//             title="Add Category"
//             open={open}
//             onCancel={onClose}
//             footer={null}
//         >
//             <Form form={form} onFinish={handleFinish}>
//                 <Form.Item
//                     label="Title"
//                     name="title"
//                     rules={[{ required: true, message: 'Please input the category title!' }]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Cover Image"
//                     rules={[{ required: true, message: 'Please upload a cover image!' }]}
//                 >
//                     <Upload
//                         name="coverImage"
//                         listType="picture"
//                         maxCount={1}
//                         beforeUpload={(file) => {
//                             handleFileChange(file as File);
//                             return false;
//                         }}
//                         onRemove={() => {
//                             setFile(null); // Reset file khi file bị xóa
//                         }}
//                     >
//                         <Button icon={<UploadOutlined />}>Upload Cover Image</Button>
//                     </Upload>
//                 </Form.Item>

//                 <Form.Item>
//                     <Button type="primary" htmlType="submit">Submit</Button>
//                 </Form.Item>
//             </Form>
//         </Modal>
//     );
// };

// export default AddCategoryForm;






// import React, { useState } from 'react';
// import { Form, Input, Button, Upload, Modal, message } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';

// interface AddCategoryFormProps {
//     visible: boolean;
//     onClose: () => void;
//     onSubmit: (formData: FormData) => Promise<void>;
// }

// const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ visible, onClose, onSubmit }) => {
//     const [form] = Form.useForm();
//     const [file, setFile] = useState<File | null>(null);

//     const handleFileChange = (file: File) => {
//         setFile(file);
//     };

//     const handleFinish = async (values: any) => {
//         const formData = new FormData();
//         formData.append("title", values.title);
//         if (file) {
//             formData.append("coverImage", file);
//         } else {
//             message.error("Please upload a cover image.");
//             return;
//         }

//         // Gọi hàm onSubmit và reset form
//         await onSubmit(formData);
//         form.resetFields();
//         setFile(null); // Reset file sau khi gửi
//     };

//     return (
//         <Modal
//             title="Add Category"
//             visible={visible}
//             onCancel={onClose}
//             footer={null}
//         >
//             <Form form={form} onFinish={handleFinish}>
//                 <Form.Item
//                     label="Title"
//                     name="title"
//                     rules={[{ required: true, message: 'Please input the category title!' }]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Cover Image"
//                     rules={[{ required: true, message: 'Please upload a cover image!' }]}
//                 >
//                     <Upload
//                         name="coverImage"
//                         listType="picture"
//                         maxCount={1}
//                         beforeUpload={(file) => {
//                             handleFileChange(file as File);
//                             return false; // Ngăn không cho tải lên tự động
//                         }}
//                         onRemove={() => {
//                             setFile(null); // Reset file khi file bị xóa
//                         }}
//                     >
//                         <Button icon={<UploadOutlined />}>Upload Cover Image</Button>
//                     </Upload>
//                 </Form.Item>

//                 <Form.Item>
//                     <Button type="primary" htmlType="submit">Submit</Button>
//                 </Form.Item>
//             </Form>
//         </Modal>
//     );
// };

// export default AddCategoryForm;





// import React, { useState } from 'react';

// interface AddCategoryFormProps {
//     visible: boolean;
//     onClose: () => void;
//     onSubmit: (formData: FormData) => Promise<void>;
// }

// const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ visible, onClose, onSubmit }) => {
//     const [title, setTitle] = useState<string>('');
//     const [file, setFile] = useState<File | null>(null);

//     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files && event.target.files[0]) {
//             setFile(event.target.files[0]);
//         }
//     };

//     const handleFinish = async (event: React.FormEvent) => {
//         event.preventDefault(); // Ngừng hành động mặc định của form (trang bị lại trang)

//         if (!title) {
//             alert("Please input the category title!");
//             return;
//         }

//         if (!file) {
//             alert("Please upload a cover image.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("title", title);
//         formData.append("coverImage", file);

       

//         // Gọi hàm onSubmit và reset form
//         await onSubmit(formData);

//         // Reset form sau khi submit thành công
//         setTitle('');
//         setFile(null);
//         onClose();
//     };

//     if (!visible) return null; // Không hiển thị nếu modal không visible

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
//                 <h3 className="text-xl font-semibold mb-4">Add Category</h3>
//                 <form onSubmit={handleFinish}>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">Title:</label>
//                         <input
//                             type="text"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             required
//                             className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter category title"
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">Cover Image:</label>
//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={handleFileChange}
//                             required
//                             className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     <div className="flex justify-between items-center mt-4">
//                         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//                             Submit
//                         </button>
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddCategoryForm;









// import React, { useState } from 'react';

// interface AddCategoryFormProps {
//   visible: boolean;
//   onClose: () => void;
//   onSubmit: (formData: FormData) => Promise<void>;
// }

// const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ visible, onClose, onSubmit }) => {
//   const [title, setTitle] = useState<string>('');
//   const [file, setFile] = useState<File | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleFinish = async (event: React.FormEvent) => {
//     event.preventDefault(); // Ngừng hành động mặc định của form (trang bị lại trang)

//     if (!title) {
//       alert("Please input the category title!");
//       return;
//     }

//     if (!file) {
//       alert("Please upload a cover image.");
//       return;
//     }

//     // Tạo FormData và append các trường cần thiết
//     const formData = new FormData();
//     formData.append("title", title); // Gửi title
//     formData.append("file", file);   // Gửi ảnh dưới dạng file

//     // Gọi hàm onSubmit và reset form
//     await onSubmit(formData);

//     // Reset form sau khi submit thành công
//     setTitle('');
//     setFile(null);
//     onClose();
//   };

//   if (!visible) return null; // Không hiển thị nếu modal không visible

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
//         <h3 className="text-xl font-semibold mb-4">Add Category</h3>
//         <form onSubmit={handleFinish}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Title:</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter category title"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Cover Image:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex justify-between items-center mt-4">
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//               Submit
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCategoryForm;


























// import React, { useState } from 'react';

// interface AddCategoryFormProps {
//   visible: boolean;
//   onClose: () => void;
//   onSubmit: (formData: FormData) => Promise<void>;
// }

// const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ visible, onClose, onSubmit }) => {
//   const [title, setTitle] = useState<string>('');
//   const [file, setFile] = useState<File | null>(null);

//   // Xử lý thay đổi file từ input
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       setFile(event.target.files[0]);
//     }
//   };

//   // Xử lý form submit
//   const handleFinish = async (event: React.FormEvent) => {
//     event.preventDefault(); // Ngừng hành động mặc định của form

//     // Kiểm tra nếu chưa nhập title
//     if (!title) {
//       alert("Please input the category title!");
//       return;
//     }

//     // Kiểm tra nếu chưa chọn file
//     if (!file) {
//       alert("Please upload a cover image.");
//       return;
//     }

//     // Tạo FormData và append các trường cần thiết
//     const formData = new FormData();
//     formData.append("title", title); // Gửi title
//     formData.append("coverImage", file); // Gửi ảnh với tên trường 'coverImage'

//     // Gọi hàm onSubmit và reset form sau khi gửi thành công
//     await onSubmit(formData);

//     // Reset form
//     setTitle('');
//     setFile(null);
//     onClose(); // Đóng modal sau khi gửi
//   };

//   if (!visible) return null; // Không hiển thị nếu modal không visible

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
//         <h3 className="text-xl font-semibold mb-4">Add Category</h3>
//         <form onSubmit={handleFinish}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Title:</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter category title"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Cover Image:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               required
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex justify-between items-center mt-4">
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//               Submit
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCategoryForm;









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

