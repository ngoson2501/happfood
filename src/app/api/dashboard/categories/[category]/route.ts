import Category from "../../../../../../models/category"; 
import User from "../../../../../../models/user";
import connect from "../../../../../../utils/db";
import { NextResponse } from "next/server"
import { Types } from "mongoose";
import { request } from "http";
import { message } from "antd";





export const PATCH = async (request: Request, context: { params: any }) => {
    const categoryId = context.params.category;
    try {
      const body = await request.json();
      const { title } = body;
  
      const { searchParams } = new URL(request.url);
      const userId = searchParams.get("userId");
  
      if (!userId || !Types.ObjectId.isValid(userId)) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid or missing userId" }),
          { status: 400 }
        );
      }
  
      if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
        return new NextResponse(
          JSON.stringify({ message: "Invalid or missing categoryId" }),
          { status: 400 }
        );
      }
  
      await connect();
  
      const user = await User.findById(userId);
  
      if (!user) {
        return new NextResponse(JSON.stringify({ message: "User not found" }), {
          status: 404,
        });
      }
  
      const category = await Category.findOne({ _id: categoryId, user: userId });
  
      if (!category) {
        return new NextResponse(
          JSON.stringify({ message: "Category not found" }),
          {
            status: 404,
          }
        );
      }
  
      const updatedCategory = await Category.findByIdAndUpdate(
        categoryId,
        { title },
        { new: true }
      );
  
      return new NextResponse(
        JSON.stringify({
          message: "Category is updated",
          category: updatedCategory,
        }),
        { status: 200 }
      );
    } catch (error: any) {
      return new NextResponse("Error in updating category" + error.message, {
        status: 500,
      });
    }
  };




  export const DELETE = async (request: Request, context: { params: any })=>{

    const categoryId = context.params.category

    try {
    
        const {searchParams} = new URL(request.url)
        const userId = searchParams.get("userId")

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(
              JSON.stringify({ message: "Invalid or missing userId" }),
              { status: 400 }
            );
          }
      
          if (!categoryId || !Types.ObjectId.isValid(categoryId)) {
            return new NextResponse(
              JSON.stringify({ message: "Invalid or missing categoryId" }),
              { status: 400 }
            );
          }


          await connect()


          const user = await User.findById(userId)

          if(!userId){
            return new NextResponse(
                JSON.stringify({message: "User not found"}),
                {status: 404}
            )
          }


          const category = await Category.findOne({_id: categoryId, user: userId})

          if(!category){
            return new NextResponse(
                JSON.stringify({message: "Category not found or does not belong to the user"}),
                {status: 404}
            )
          }

          await Category.findByIdAndDelete(categoryId)

          return new NextResponse(
            JSON.stringify({massage: "Category is deleted"}),
            {status: 200}
          )



    } catch (error: any) {
        return new NextResponse(
            "Error in deleting category" + error.message,
            {status: 500}
        )
        
    }
  }




























    // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
    
  //   const formData = {
  //     name,
  //     cookTime,
  //     hashtags,
  //     description,
  //     // nutritionInformation,
  //     ingredients,
  //     directions,
  //     media,
  //     id: infoUser?.id,
  //   };

    

  //   console.log(formData);


  //   try {
  //     const response = await fetch('/api/recipes/add_recipe', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
        
  //     });

  //     if (response.ok) {
  //       message.success("Recipe added successfully!");
  //       setIsModalVisible(false); // Đóng modal sau khi thành công
  //     } else {
  //       message.error("Failed to add recipe");
  //       console.error("Error:", await response.text());
  //     }
  //   } catch (error) {
  //     message.error("Failed to add recipe");
  //     console.error("Error:", error);
  //   }
  // };











  
//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     // Khởi tạo FormData
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('cookTime', cookTime);
//     formData.append('description', description);
//     formData.append('id', infoUser?.id || '');

//     // Thêm hashtags
//     hashtags.forEach((hashtag, index) => {
//         formData.append(`hashtags[${index}]`, JSON.stringify(hashtag));
//     });

//     // Thêm ingredients
//     ingredients.forEach((ingredient, index) => {
//         formData.append(`ingredients[${index}]`, JSON.stringify(ingredient));
//     });

//     // Thêm directions
//     directions.forEach((direction, index) => {
//         formData.append(`directions[${index}][title]`, direction.title);
//         formData.append(`directions[${index}][description]`, direction.description);

//         // Nếu có file ảnh cho mỗi direction, thêm vào
//         direction.images?.forEach((imageFile, imgIndex) => {
//             formData.append(`directions[${index}][images][${imgIndex}]`, imageFile);
//         });
//     });

//     // Thêm media file
//     if (media) {
//         formData.append('media', media);  // `media` là file ảnh từ input
//     }

//     console.log('FormData:', formData); // Kiểm tra dữ liệu trước khi gửi

//     try {
//       const response = await fetch('/api/recipes/add_recipe', {
//         method: 'POST',
//         body: formData, // Gửi FormData mà không cần headers
//       });

//       if (response.ok) {
//         message.success("Recipe added successfully!");
//         setIsModalVisible(false); // Đóng modal sau khi thành công
//       } else {
//         message.error("Failed to add recipe");
//         console.error("Error:", await response.text());
//       }
//     } catch (error) {
//       message.error("Failed to add recipe");
//       console.error("Error:", error);
//     }
// };









// const handleSubmit = async (event: React.FormEvent) => {
//   event.preventDefault();

//   // Khởi tạo FormData
//   const formData = new FormData();
//   formData.append('name', name);
//   formData.append('cookTime', cookTime);
//   formData.append('description', description);
//   formData.append('id', infoUser?.id || '');

//   // Thêm hashtags
//   hashtags.forEach((hashtag, index) => {
//       formData.append(`hashtags[${index}]`, JSON.stringify(hashtag));
//   });

//   // Thêm ingredients
//   ingredients.forEach((ingredient, index) => {
//       formData.append(`ingredients[${index}]`, JSON.stringify(ingredient));
//   });

//   // Thêm directions
//   directions.forEach((direction, index) => {
//       formData.append(`directions[${index}][title]`, direction.title);
//       formData.append(`directions[${index}][description]`, direction.description);

//       // Kiểm tra nếu mỗi imageFile là một đối tượng File
//       direction.images?.forEach((imageFile, imgIndex) => {
//           // Kiểm tra nếu imageFile là một đối tượng File (bạn cần đảm bảo kiểu dữ liệu đúng)
//           if (imageFile && typeof imageFile !== "string" && imageFile instanceof File) {
//               formData.append(`directions[${index}][images][${imgIndex}]`, imageFile);
//           } else {
//               console.error(`Expected a File object, but got a ${typeof imageFile}`);
//           }
//       });
//   });

//   // Thêm media file
//   if (media) {
//       formData.append('media', media);  // `media` là file ảnh từ input
//   }

//   console.log('FormData:', formData); // Kiểm tra dữ liệu trước khi gửi

//   try {
//       const response = await fetch('/api/recipes/add_recipe', {
//           method: 'POST',
//           body: formData, // Gửi FormData mà không cần headers
//       });

//       if (response.ok) {
//           message.success("Recipe added successfully!");
//           setIsModalVisible(false); // Đóng modal sau khi thành công
//       } else {
//           message.error("Failed to add recipe");
//           console.error("Error:", await response.text());
//       }
//   } catch (error) {
//       message.error("Failed to add recipe");
//       console.error("Error:", error);
//   }
// };

