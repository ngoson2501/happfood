// import { NextRequest, NextResponse } from 'next/server';
// import connect from '../../../../../../utils/db';
// import Recipe from '../../../../../../models/recipe';
// import { v2 as cloudinary } from 'cloudinary';

// // Cấu hình Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const POST = async (request: NextRequest) => {
//   try {
//     // Kết nối đến MongoDB
//     await connect();

//     // Lấy form data từ request
//     const data = await request.formData();

//     // Xử lý hashtags
//     const hashtags = [...data.keys()]
//       .filter(key => key.startsWith('hashtags['))
//       .map(key => JSON.parse(data.get(key)?.toString() || '{}'));

//     // Xử lý ingredients
//     const ingredients = [...data.keys()]
//       .filter(key => key.startsWith('ingredients['))
//       .map(key => JSON.parse(data.get(key)?.toString() || '{}'));

//     // Xử lý directions (bao gồm image)
//     const directions: { title: string; description: string; image: string | null }[] = [];
//     const directionKeys = [...data.keys()].filter(key => key.startsWith('directions['));

//     for (const key of directionKeys) {
//       const match = key.match(/^directions\[(\d+)\]\[(\w+)\]$/);
//       if (match) {
//         const [_, directionIndexStr, field] = match;
//         const directionIndex = parseInt(directionIndexStr, 10);

//         // Đảm bảo phần tử direction đã tồn tại
//         directions[directionIndex] = directions[directionIndex] || { title: '', description: '', image: null };
//         const direction = directions[directionIndex];

//         if (field === 'image') {
//           const imageFile = data.get(key);

//           if (imageFile && imageFile instanceof File) {
//             try {
//               // Tải file lên Cloudinary qua buffer
//               const uploadResult = await new Promise((resolve, reject) => {
//                 const uploadStream = cloudinary.uploader.upload_stream(
//                   { folder: 'directions' },
//                   (error, result) => {
//                     if (error) reject(error);
//                     else resolve(result);
//                   }
//                 );

//                 // Chuyển đổi file thành buffer và truyền vào uploadStream
//                 const reader = new FileReader();
//                 reader.onloadend = () => {
//                   if (reader.result) {
//                     const buffer = Buffer.from(reader.result as ArrayBuffer);
//                     uploadStream.end(buffer);
//                   }
//                 };
//                 reader.onerror = (err) => reject(err);
//                 reader.readAsArrayBuffer(imageFile);
//               });

//               // Cập nhật URL của hình ảnh
//               direction.image = (uploadResult as any).secure_url;
//             } catch (err) {
//               console.error('Error uploading image to Cloudinary:', err);
//             }
//           }
//         } else if (field === 'title' || field === 'description') {
//           direction[field as 'title' | 'description'] = data.get(key)?.toString() || '';
//         }
//       }
//     }

//     // Xử lý media (nếu có)
//     const media = data.get('media');
//     let mediaUrl: string | null = null;
//     if (media && media instanceof File) {
//       try {
//         // Tải file lên Cloudinary qua buffer
//         const uploadResult = await new Promise((resolve, reject) => {
//           const uploadStream = cloudinary.uploader.upload_stream(
//             { folder: 'media' },
//             (error, result) => {
//               if (error) reject(error);
//               else resolve(result);
//             }
//           );

//           // Chuyển đổi file thành buffer và truyền vào uploadStream
//           const reader = new FileReader();
//           reader.onloadend = () => {
//             if (reader.result) {
//               const buffer = Buffer.from(reader.result as ArrayBuffer);
//               uploadStream.end(buffer);
//             }
//           };
//           reader.onerror = (err) => reject(err);
//           reader.readAsArrayBuffer(media);
//         });

//         mediaUrl = (uploadResult as any).secure_url;
//       } catch (err) {
//         console.error('Error uploading media to Cloudinary:', err);
//       }
//     }

//     // Xử lý ration
//     const ration = data.get('ration');
//     const parsedRation = ration ? JSON.parse(ration.toString()) : { value: 1, unit: 'người' };

//     // Tạo và lưu công thức mới vào MongoDB
//     const newRecipe = new Recipe({
//       name: data.get('name')?.toString() || '',
//       cookTime: data.get('cookTime')?.toString() || '',
//       ration: parsedRation,
//       description: data.get('description')?.toString() || '',
//       hashtags,
//       ingredients,
//       directions,
//       media: mediaUrl,
//       user: data.get('id')?.toString() || '',
//       views: 0,
//       likes: [],
//       videoLink: data.get('videoLink')?.toString() || '',
//     });

//     await newRecipe.save();

//     // Console các trường vừa lưu vào database
// console.log("Saved Recipe:");

// console.log({
//   name: newRecipe.name,
//   cookTime: newRecipe.cookTime,
//   ration: newRecipe.ration,
//   description: newRecipe.description,
//   hashtags: newRecipe.hashtags,
//   ingredients: newRecipe.ingredients,
//   directions: newRecipe.directions,
//   media: newRecipe.media,
//   user: newRecipe.user,
//   views: newRecipe.views,
//   likes: newRecipe.likes,
//   videoLink: newRecipe.videoLink,
// });

//     return NextResponse.json({ success: true, message: 'Recipe added successfully' });
//   } catch (error: any) {
//     console.error(error);
//     return NextResponse.json({ success: false, message: error.message });
//   }
// };




















// import { NextRequest, NextResponse } from 'next/server';
// import connect from '../../../../../../utils/db';
// import Recipe from '../../../../../../models/recipe';
// import { v2 as cloudinary } from 'cloudinary';

// // Cấu hình Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export const POST = async (request: NextRequest) => {
//   try {
//     // Kết nối đến MongoDB
//     await connect();

//     // Lấy form data từ request
//     const data = await request.formData();

//     // Xử lý hashtags
//     const hashtags = [...data.keys()]
//       .filter(key => key.startsWith('hashtags['))
//       .map(key => JSON.parse(data.get(key)?.toString() || '{}'));

//     // Xử lý ingredients
//     const ingredients = [...data.keys()]
//       .filter(key => key.startsWith('ingredients['))
//       .map(key => JSON.parse(data.get(key)?.toString() || '{}'));

//     // Xử lý directions (bao gồm image)
//     const directions: { title: string; description: string; image: string | null }[] = [];
//     const directionKeys = [...data.keys()].filter(key => key.startsWith('directions['));

//     for (const key of directionKeys) {
//       const match = key.match(/^directions\[(\d+)\]\[(\w+)\]$/);
//       if (match) {
//         const [_, directionIndexStr, field] = match;
//         const directionIndex = parseInt(directionIndexStr, 10);

//         // Đảm bảo phần tử direction đã tồn tại
//         directions[directionIndex] = directions[directionIndex] || { title: '', description: '', image: null };
//         const direction = directions[directionIndex];

//         if (field === 'image') {
//           const imageFile = data.get(key);

//           if (imageFile && imageFile instanceof File) {
//             try {
//               // Tải file lên Cloudinary qua buffer
//               const uploadResult = await cloudinary.uploader.upload_stream(
//                 { folder: 'directions' },
//                 (error, result) => {
//                   if (error) {
//                     console.error('Error uploading image to Cloudinary:', error);
//                   } else {
//                     // Cập nhật URL của hình ảnh
//                     direction.image = result?.secure_url || null;
//                   }
//                 }
//               );

//               // Chuyển đổi file thành buffer và truyền vào uploadStream
//               const buffer = await imageFile.arrayBuffer();
//               const bufferData = Buffer.from(buffer);
//               uploadResult.end(bufferData);
//             } catch (err) {
//               console.error('Error uploading image to Cloudinary:', err);
//             }
//           }
//         } else if (field === 'title' || field === 'description') {
//           direction[field as 'title' | 'description'] = data.get(key)?.toString() || '';
//         }
//       }
//     }

//     // Xử lý media (nếu có)
//     const media = data.get('media');
//     let mediaUrl: string | null = null;
//     if (media && media instanceof File) {
//       try {
//         // Tải file lên Cloudinary qua buffer
//         const uploadResult = await cloudinary.uploader.upload_stream(
//           { folder: 'media' },
//           (error, result) => {
//             if (error) {
//               console.error('Error uploading media to Cloudinary:', error);
//             } else {
//               mediaUrl = result?.secure_url || null;
//             }
//           }
//         );

//         // Chuyển đổi file thành buffer và truyền vào uploadStream
//         const buffer = await media.arrayBuffer();
//         const bufferData = Buffer.from(buffer);
//         uploadResult.end(bufferData);
//       } catch (err) {
//         console.error('Error uploading media to Cloudinary:', err);
//       }
//     }

//     // Xử lý ration
//     const ration = data.get('ration');
//     const parsedRation = ration ? JSON.parse(ration.toString()) : { value: 1, unit: 'người' };

//     // Tạo và lưu công thức mới vào MongoDB
//     const newRecipe = new Recipe({
//       name: data.get('name')?.toString() || '',
//       cookTime: data.get('cookTime')?.toString() || '',
//       ration: parsedRation,
//       description: data.get('description')?.toString() || '',
//       hashtags,
//       ingredients,
//       directions,
//       media: mediaUrl,
//       user: data.get('id')?.toString() || '',
//       views: 0,
//       likes: [],
//       videoLink: data.get('videoLink')?.toString() || '',
//     });

//     await newRecipe.save();

//     // Console các trường vừa lưu vào database
//     console.log("Saved Recipe:");
//     console.log({
//       name: newRecipe.name,
//       cookTime: newRecipe.cookTime,
//       ration: newRecipe.ration,
//       description: newRecipe.description,
//       hashtags: newRecipe.hashtags,
//       ingredients: newRecipe.ingredients,
//       directions: newRecipe.directions,
//       media: newRecipe.media,
//       user: newRecipe.user,
//       views: newRecipe.views,
//       likes: newRecipe.likes,
//       videoLink: newRecipe.videoLink,
//     });

//     return NextResponse.json({ success: true, message: 'Recipe added successfully' });
//   } catch (error: any) {
//     console.error(error);
//     return NextResponse.json({ success: false, message: error.message });
//   }
// };





import { NextRequest, NextResponse } from 'next/server';
import connect from '../../../../../../utils/db';
import Recipe from '../../../../../../models/recipe';
import { v2 as cloudinary } from 'cloudinary';

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Hàm tiện ích để tải file lên Cloudinary
const uploadToCloudinary = async (fileBuffer: Buffer, folder: string): Promise<string> => {
  try {
    const fileData = `data:image/jpeg;base64,${fileBuffer.toString('base64')}`;
    const result = await cloudinary.uploader.upload(fileData, { folder });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Failed to upload file');
  }
};

export const POST = async (request: NextRequest) => {
  try {
    // Kết nối đến MongoDB
    await connect();

    // Lấy form data từ request
    const data = await request.formData();

    // Xử lý hashtags
    const hashtags = [...data.keys()]
      .filter(key => key.startsWith('hashtags['))
      .map(key => JSON.parse(data.get(key)?.toString() || '{}'));

    // Xử lý ingredients
    const ingredients = [...data.keys()]
      .filter(key => key.startsWith('ingredients['))
      .map(key => JSON.parse(data.get(key)?.toString() || '{}'));

    // Xử lý directions (bao gồm image)
    const directions: { title: string; description: string; image: string | null }[] = [];
    const directionKeys = [...data.keys()].filter(key => key.startsWith('directions['));

    for (const key of directionKeys) {
      const match = key.match(/^directions\[(\d+)\]\[(\w+)\]$/);
      if (match) {
        const [_, directionIndexStr, field] = match;
        const directionIndex = parseInt(directionIndexStr, 10);

        directions[directionIndex] = directions[directionIndex] || { title: '', description: '', image: null };
        const direction = directions[directionIndex];

        if (field === 'image') {
          const imageFile = data.get(key);

          if (imageFile && imageFile instanceof File) {
            const buffer = await imageFile.arrayBuffer();
            const bufferData = Buffer.from(buffer);

            // Tải lên Cloudinary và lưu URL
            direction.image = await uploadToCloudinary(bufferData, 'directions');
          }
        } else if (field === 'title' || field === 'description') {
          direction[field as 'title' | 'description'] = data.get(key)?.toString() || '';
        }
      }
    }

    // Xử lý media (nếu có)
    const media = data.get('media');
    let mediaUrl: string | null = null;
    if (media && media instanceof File) {
      const buffer = await media.arrayBuffer();
      const bufferData = Buffer.from(buffer);

      // Tải lên Cloudinary và lưu URL
      mediaUrl = await uploadToCloudinary(bufferData, 'media');
    }

    // Xử lý ration
    const ration = data.get('ration');
    const parsedRation = ration ? JSON.parse(ration.toString()) : { value: 1, unit: 'người' };

    // Tạo và lưu công thức mới vào MongoDB
    const newRecipe = new Recipe({
      name: data.get('name')?.toString() || '',
      cookTime: data.get('cookTime')?.toString() || '',
      ration: parsedRation,
      description: data.get('description')?.toString() || '',
      hashtags,
      ingredients,
      directions,
      media: mediaUrl,
      user: data.get('id')?.toString() || '',
      views: 0,
      likes: [],
      videoLink: data.get('videoLink')?.toString() || '',
    });

    await newRecipe.save();

    // Ghi log các trường vừa lưu
    console.log("Saved Recipe:");
    console.log({
      name: newRecipe.name,
      cookTime: newRecipe.cookTime,
      ration: newRecipe.ration,
      description: newRecipe.description,
      hashtags: newRecipe.hashtags,
      ingredients: newRecipe.ingredients,
      directions: newRecipe.directions,
      media: newRecipe.media,
      user: newRecipe.user,
      views: newRecipe.views,
      likes: newRecipe.likes,
      videoLink: newRecipe.videoLink,
    });

    return NextResponse.json({ success: true, message: 'Recipe added successfully' });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message });
  }
};
