import { NextRequest, NextResponse } from 'next/server';
import connect from '../../../../../../utils/db';
import Recipe from '../../../../../../models/recipe';

export const POST = async (request: NextRequest) => {
  try {
    // Kết nối đến MongoDB
    await connect();

    // Lấy form data từ request
    const data = await request.formData();

    console.log("Form Data:");
    data.forEach((value, key) => {
      console.log(key, value); // In ra tất cả giá trị form data
    });

    // Xử lý hashtags
    const hashtags = [...data.keys()]
      .filter(key => key.startsWith('hashtags['))
      .map(key => JSON.parse(data.get(key)?.toString() || '{}'));

    // Xử lý ingredients
    const ingredients = [...data.keys()]
      .filter(key => key.startsWith('ingredients['))
      .map(key => JSON.parse(data.get(key)?.toString() || '{}'));

    // Xử lý directions (bao gồm image)
    const directions: { title: string; description: string; image: Buffer | null }[] = [];
    const directionKeys = [...data.keys()].filter(key => key.startsWith('directions['));

    for (const key of directionKeys) {
      const match = key.match(/^directions\[(\d+)\]\[(\w+)\]$/);
      if (match) {
        const [_, directionIndexStr, field] = match;
        const directionIndex = parseInt(directionIndexStr, 10);

        // Đảm bảo phần tử direction đã tồn tại
        directions[directionIndex] = directions[directionIndex] || { title: '', description: '', image: null };
        const direction = directions[directionIndex];

        if (field === 'image') {
          const imageFile = data.get(key);

          if (imageFile && imageFile instanceof File) {
            try {
              // Chuyển file thành buffer
              const imageArrayBuffer = await imageFile.arrayBuffer();
              const imageBuffer = Buffer.from(imageArrayBuffer);

              // Log để kiểm tra hình ảnh
              console.log(`Image for direction ${directionIndex}:`, imageBuffer);

              // Cập nhật trường image
              direction.image = imageBuffer;
            } catch (err) {
              console.error('Error processing image:', err);
            }
          }
        } else if (field === 'title' || field === 'description') {
          direction[field as 'title' | 'description'] = data.get(key)?.toString() || '';
        }
      }
    }

    // Kiểm tra lại directions trước khi lưu
    console.log('Directions before saving:', directions);

    // Xử lý media (nếu có)
    const media = data.get('media');
    let mediaBuffer: Buffer | null = null;
    if (media && media instanceof File) {
      const mediaArrayBuffer = await media.arrayBuffer();
      mediaBuffer = Buffer.from(mediaArrayBuffer);
    }

    // Xử lý ration
    const ration = data.get('ration');
    const parsedRation = ration ? JSON.parse(ration.toString()) : { value: 1, unit: 'người' };

    console.log('Hashtags:', hashtags);
    console.log('Ingredients:', ingredients);
    console.log('Directions:', directions);
    console.log('Media:', mediaBuffer);
    console.log('Ration:', parsedRation);

    // Tạo và lưu công thức mới vào MongoDB
    const newRecipe = new Recipe({
      name: data.get('name')?.toString() || '',
      cookTime: data.get('cookTime')?.toString() || '',
      ration: parsedRation,
      description: data.get('description')?.toString() || '',
      hashtags,
      ingredients,
      directions, // Lưu directions với định dạng mới
      media: mediaBuffer,
      user: data.get('id')?.toString() || '',
      views: 0,
      likes: [],
      videoLink:data.get('videoLink')?.toString() || '',
    });

    await newRecipe.save();

    return NextResponse.json({ success: true, message: 'Recipe added successfully' });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message });
  }
};
