import React from 'react';

const GeneratePage = () => {
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
            Chào mừng bạn đến với HappyFood Blog! Đây là nơi chúng tôi chia sẻ
            những công thức nấu ăn tuyệt vời, với các món ăn đa dạng từ khắp nơi.
            Chúng tôi hy vọng bạn sẽ tìm thấy cảm hứng và khám phá những món ăn
            ngon miệng qua từng bài viết.
          </p>
        </div>
        
      </div>
    
    </>
  );
};

export default GeneratePage;
