// import React, { useState } from 'react';
// import AddCategoryForm from '../AddCategoryForm/AddCategoryForm';
// import { Button, message } from 'antd';

// const ParentComponent: React.FC = () => {
//     const [visible, setVisible] = useState(false);

//     const handleSubmit = async (formData: FormData) => {
//         try {
//             const response = await fetch('/api/categories', {
//                 method: 'POST',
//                 body: formData,
//             });
    
//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(JSON.stringify(errorData));
//             }
    
//             const data = await response.json();
//             console.log('Category added:', data);
//             // Thực hiện các hành động tiếp theo nếu thành công
//         } catch (error) {
//             console.error('Error adding category:', error);
//             message.error('Failed to add category.');
//         }
//     };
    

//     return (
//         <div style={{ padding: '20px' }}>
//             <Button type="primary" onClick={() => setVisible(true)}>Add Category</Button>
//             <AddCategoryForm
//                 visible={visible}
//                 onClose={() => setVisible(false)}
//                 onSubmit={handleSubmit}
//             />
//         </div>
//     );
// };

// export default ParentComponent;
