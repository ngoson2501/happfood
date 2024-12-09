// import { NextRequest, NextResponse } from 'next/server';
// import connect from '../../../../../../utils/db';
// import Recipe from '../../../../../../models/recipe';

// export const PATCH = async (request: NextRequest) => {
//   try {
//     console.log("Received PATCH request for editing recipe");
//     console.log('Request URL:', request.url);
//     console.log('Request method:', request.method);

//     await connect();

//     const data = await request.formData();

//     const recipeId = data.get('idRecipe')?.toString(); // Lấy id của công thức
//     if (!recipeId) {
//       return NextResponse.json({ success: false, message: 'Recipe ID is required' }, { status: 400 });
//     }

//     console.log("Form Data for updating:");
//     data.forEach((value, key) => {
//       console.log(key, value);
//     });

//     // Lấy công thức hiện tại từ database
//     const existingRecipe = await Recipe.findById(recipeId);
//     if (!existingRecipe) {
//       return NextResponse.json({ success: false, message: 'Recipe not found' }, { status: 404 });
//     }

//     // Xử lý hashtags
//     const hashtags = [...data.keys()]
//       .filter(key => key.startsWith('hashtags['))
//       .map(key => JSON.parse(data.get(key)?.toString() || '{}'));

//     // Xử lý ingredients
//     const ingredients = [...data.keys()]
//       .filter(key => key.startsWith('ingredients['))
//       .map(key => JSON.parse(data.get(key)?.toString() || '{}'));

//     // Xử lý directions
//     const directions: { title: string; description: string; image: Buffer | null }[] = [];
//     const directionKeys = [...data.keys()].filter(key => key.startsWith('directions['));

//     for (const key of directionKeys) {
//       const match = key.match(/^directions\[(\d+)\]\[(\w+)\]$/);
//       if (match) {
//         const [_, directionIndexStr, field] = match;
//         const directionIndex = parseInt(directionIndexStr, 10);

//         directions[directionIndex] = directions[directionIndex] || {
//           title: '',
//           description: '',
//           image: existingRecipe?.directions?.[directionIndex]?.image || null, // Giữ giá trị cũ
//         };
//         const direction = directions[directionIndex];

//         if (field === 'image') {
//           const imageFile = data.get(key);

//           if (imageFile && imageFile instanceof File) {
//             try {
//               const imageArrayBuffer = await imageFile.arrayBuffer();
//               const imageBuffer = Buffer.from(imageArrayBuffer);
//               direction.image = imageBuffer; // Cập nhật image nếu có
//             } catch (err) {
//               console.error('Error processing image:', err);
//             }
//           }
//         } else if (field === 'title' || field === 'description') {
//           direction[field as 'title' | 'description'] = data.get(key)?.toString() || '';
//         }
//       }
//     }

//     // Xử lý media
//     const media = data.get('media');
//     let mediaBuffer: Buffer | null = null;
//     if (media && media instanceof File) {
//       const mediaArrayBuffer = await media.arrayBuffer();
//       mediaBuffer = Buffer.from(mediaArrayBuffer);
//     }

//     // Xử lý ration
//     const ration = data.get('ration');
//     const parsedRation = ration ? JSON.parse(ration.toString()) : { value: 1, unit: 'người' };

//     // Tạo updatedFields
//     const updatedFields: any = {
//       name: data.get('name')?.toString(),
//       videoLink: data.get('videoLink')?.toString(),
//       cookTime: data.get('cookTime')?.toString(),
//       description: data.get('description')?.toString(),
//       hashtags,
//       ingredients,
//       directions,
//       media: mediaBuffer,
//       ration: parsedRation,
//     };

//     // Xóa các trường không cần cập nhật (nếu null hoặc undefined)
//     for (const key in updatedFields) {
//       if (updatedFields[key] === undefined || updatedFields[key] === null) {
//         delete updatedFields[key];
//       }
//     }

//     // Cập nhật công thức trong database
//     const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, updatedFields, { new: true });

//     if (!updatedRecipe) {
//       return NextResponse.json({ success: false, message: 'Failed to update recipe' }, { status: 500 });
//     }

//     return NextResponse.json({ success: true, message: 'Recipe updated successfully', data: updatedRecipe });
//   } catch (error: any) {
//     console.error("Error during PATCH request:", error);
//     return NextResponse.json({ success: false, message: error.message }, { status: 500 });
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

// // Hàm tiện ích để tải file lên Cloudinary
// const uploadToCloudinary = async (fileBuffer: Buffer, folder: string): Promise<string> => {
//   try {
//     const fileData = `data:image/jpeg;base64,${fileBuffer.toString('base64')}`;
//     const result = await cloudinary.uploader.upload(fileData, { folder });
//     return result.secure_url;
//   } catch (error) {
//     console.error('Error uploading to Cloudinary:', error);
//     throw new Error('Failed to upload file');
//   }
// };

// // Hàm tiện ích để xóa file khỏi Cloudinary
// const deleteFromCloudinary = async (publicId: string): Promise<void> => {
//   try {
//     await cloudinary.uploader.destroy(publicId);
//   } catch (error) {
//     console.error('Error deleting from Cloudinary:', error);
//     throw new Error('Failed to delete file');
//   }
// };

// export const PATCH = async (request: NextRequest) => {
//   try {
//     console.log("Received PATCH request for editing recipe");
//     await connect();

//     const data = await request.formData();

//     const recipeId = data.get('idRecipe')?.toString();
//     if (!recipeId) {
//       return NextResponse.json({ success: false, message: 'Recipe ID is required' }, { status: 400 });
//     }

//     const existingRecipe = await Recipe.findById(recipeId);
//     if (!existingRecipe) {
//       return NextResponse.json({ success: false, message: 'Recipe not found' }, { status: 404 });
//     }

//     // Xử lý directions
//     const directions: { title: string; description: string; image: string | null }[] = [];
//     const directionKeys = [...data.keys()].filter(key => key.startsWith('directions['));

//     for (const key of directionKeys) {
//       const match = key.match(/^directions\[(\d+)\]\[(\w+)\]$/);
//       if (match) {
//         const [_, directionIndexStr, field] = match;
//         const directionIndex = parseInt(directionIndexStr, 10);

//         directions[directionIndex] = directions[directionIndex] || {
//           title: '',
//           description: '',
//           image: existingRecipe?.directions?.[directionIndex]?.image || null,
//         };
//         const direction = directions[directionIndex];

//         if (field === 'image') {
//           const imageFile = data.get(key);
//           if (imageFile && imageFile instanceof File) {
//             const buffer = await imageFile.arrayBuffer();
//             const bufferData = Buffer.from(buffer);

//             if (direction.image) {
//               // Xóa ảnh cũ trên Cloudinary
//               const publicId = direction.image.split('/').pop()?.split('.')[0];
//               if (publicId) {
//                 await deleteFromCloudinary(publicId);
//               }
//             }

//             // Tải ảnh mới lên Cloudinary
//             direction.image = await uploadToCloudinary(bufferData, 'directions');
//           }
//         } else if (field === 'title' || field === 'description') {
//           direction[field as 'title' | 'description'] = data.get(key)?.toString() || '';
//         }
//       }
//     }

//     // Xử lý media
//     const media = data.get('media');
//     let mediaUrl = existingRecipe.media;
//     if (media && media instanceof File) {
//       const buffer = await media.arrayBuffer();
//       const bufferData = Buffer.from(buffer);

//       if (mediaUrl) {
//         // Xóa media cũ khỏi Cloudinary
//         const publicId = mediaUrl.split('/').pop()?.split('.')[0];
//         if (publicId) {
//           await deleteFromCloudinary(publicId);
//         }
//       }

//       // Tải media mới lên Cloudinary
//       mediaUrl = await uploadToCloudinary(bufferData, 'media');
//     }

//     // Xử lý ration
//     const ration = data.get('ration');
//     const parsedRation = ration ? JSON.parse(ration.toString()) : existingRecipe.ration;

//     // Cập nhật công thức
//     const updatedFields: any = {
//       name: data.get('name')?.toString(),
//       videoLink: data.get('videoLink')?.toString(),
//       cookTime: data.get('cookTime')?.toString(),
//       description: data.get('description')?.toString(),
//       hashtags: [...data.keys()]
//         .filter(key => key.startsWith('hashtags['))
//         .map(key => JSON.parse(data.get(key)?.toString() || '{}')),
//       ingredients: [...data.keys()]
//         .filter(key => key.startsWith('ingredients['))
//         .map(key => JSON.parse(data.get(key)?.toString() || '{}')),
//       directions,
//       media: mediaUrl,
//       ration: parsedRation,
//     };

//     // Loại bỏ trường không cần thiết
//     for (const key in updatedFields) {
//       if (updatedFields[key] === undefined || updatedFields[key] === null) {
//         delete updatedFields[key];
//       }
//     }

//     const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, updatedFields, { new: true });
//     if (!updatedRecipe) {
//       return NextResponse.json({ success: false, message: 'Failed to update recipe' }, { status: 500 });
//     }

//     return NextResponse.json({ success: true, message: 'Recipe updated successfully', data: updatedRecipe });
//   } catch (error: any) {
//     console.error('Error during PATCH request:', error);
//     return NextResponse.json({ success: false, message: error.message }, { status: 500 });
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

// Hàm tiện ích để xóa file khỏi Cloudinary
const deleteFromCloudinary = async (imageUrl: string): Promise<void> => {
  try {
    // Trích xuất publicId từ URL
    const regex = /\/v\d+\/(.+)\.\w+$/;
    const match = imageUrl.match(regex);
    if (!match || !match[1]) {
      console.error('Could not extract publicId from URL:', imageUrl);
      throw new Error('Invalid image URL');
    }

    const publicId = match[1];
    await cloudinary.uploader.destroy(publicId);
    console.log(`Successfully deleted image with publicId: ${publicId}`);
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    throw new Error('Failed to delete file');
  }
};

export const PATCH = async (request: NextRequest) => {
  try {
    console.log("Received PATCH request for editing recipe");
    await connect();

    const data = await request.formData();

    const recipeId = data.get('idRecipe')?.toString();
    if (!recipeId) {
      return NextResponse.json({ success: false, message: 'Recipe ID is required' }, { status: 400 });
    }

    const existingRecipe = await Recipe.findById(recipeId);
    if (!existingRecipe) {
      return NextResponse.json({ success: false, message: 'Recipe not found' }, { status: 404 });
    }

    // Xử lý directions
    const directions: { title: string; description: string; image: string | null }[] = [];
    const directionKeys = [...data.keys()].filter(key => key.startsWith('directions['));

    for (const key of directionKeys) {
      const match = key.match(/^directions\[(\d+)\]\[(\w+)\]$/);
      if (match) {
        const [_, directionIndexStr, field] = match;
        const directionIndex = parseInt(directionIndexStr, 10);

        directions[directionIndex] = directions[directionIndex] || {
          title: '',
          description: '',
          image: existingRecipe?.directions?.[directionIndex]?.image || null,
        };
        const direction = directions[directionIndex];

        if (field === 'image') {
          const imageFile = data.get(key);
          if (imageFile && imageFile instanceof File) {
            const buffer = await imageFile.arrayBuffer();
            const bufferData = Buffer.from(buffer);

            if (direction.image) {
              // Xóa ảnh cũ trên Cloudinary
              await deleteFromCloudinary(direction.image);
            }

            // Tải ảnh mới lên Cloudinary
            direction.image = await uploadToCloudinary(bufferData, 'directions');
          }
        } else if (field === 'title' || field === 'description') {
          direction[field as 'title' | 'description'] = data.get(key)?.toString() || '';
        }
      }
    }

    // Xử lý media
    const media = data.get('media');
    let mediaUrl = existingRecipe.media;
    if (media && media instanceof File) {
      const buffer = await media.arrayBuffer();
      const bufferData = Buffer.from(buffer);

      if (mediaUrl) {
        // Xóa media cũ khỏi Cloudinary
        await deleteFromCloudinary(mediaUrl);
      }

      // Tải media mới lên Cloudinary
      mediaUrl = await uploadToCloudinary(bufferData, 'media');
    }

    // Xử lý ration
    const ration = data.get('ration');
    const parsedRation = ration ? JSON.parse(ration.toString()) : existingRecipe.ration;

    // Cập nhật công thức
    const updatedFields: any = {
      name: data.get('name')?.toString(),
      videoLink: data.get('videoLink')?.toString(),
      cookTime: data.get('cookTime')?.toString(),
      description: data.get('description')?.toString(),
      hashtags: [...data.keys()]
        .filter(key => key.startsWith('hashtags['))
        .map(key => JSON.parse(data.get(key)?.toString() || '{}')),
      ingredients: [...data.keys()]
        .filter(key => key.startsWith('ingredients['))
        .map(key => JSON.parse(data.get(key)?.toString() || '{}')),
      directions,
      media: mediaUrl,
      ration: parsedRation,
    };

    // Loại bỏ trường không cần thiết
    for (const key in updatedFields) {
      if (updatedFields[key] === undefined || updatedFields[key] === null) {
        delete updatedFields[key];
      }
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, updatedFields, { new: true });
    if (!updatedRecipe) {
      return NextResponse.json({ success: false, message: 'Failed to update recipe' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Recipe updated successfully', data: updatedRecipe });
  } catch (error: any) {
    console.error('Error during PATCH request:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
};
