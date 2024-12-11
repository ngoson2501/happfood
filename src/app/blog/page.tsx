"use client"
import React from 'react';

const BlogPage = () => {
  return (

    <>
    
    <div className="flex flex-col gap-[60px] xl:gap-[114px] mt-[50px]  xl:mt-[120px]">
        <div className=" px-[10px] xl:px-0 flex flex-col justify-center font-Inter items-center gap-[20px] lg:gap-[30px]">
          <h1 className=" text-[25px] lg:text-[30px] text-center xl:text-[40px] font-[700]">
          Welcome to the HappyFood Blog
          </h1>
          <p
            className="text-[14px] lg:text-[15px] xl:text-[16px] text-center max-w-[700px] font-light"
            style={{ color: "rgba(0, 0, 0, 60%)" }}
          >
            Đây là tổng hợp những công thức nấu ăn tuyệt vời mà bạn đã chia sẻ
            cho chính tôi. Với sự đa dạng từ những cách chế biến và nguyên liệu,
            chúng tôi cảm ơn vì những công thức vô cùng tuyệt vời mà bạn đã chia
            sẻ với chúng tôi.
          </p>
        </div>
        
      </div>
    
    </>
  );
};

export default BlogPage;
