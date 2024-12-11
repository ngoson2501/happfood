"use client"

import { FC, useState } from "react";
import Image from "next/image";

interface StepProps {
  title: string;
  description: string;
  image?: string; // Image là tùy chọn (optional)
}

const Step: FC<StepProps> = ({ title, description, image }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <li className="flex flex-col mb-5">
        <div className="text-black font-[500] py-1 rounded flex gap-[15px] items-center">
          <div className="bg-black w-2 h-2 rounded-full"></div>
          <p>{title}</p>
        </div>
        {/* <p className="text-[15px] font-[300]" style={{ color: "rgba(0, 0, 0, 40%)" }}>
          {description}
        </p> */}

      <div className="text-[15px] font-[300]" style={{ color: "rgba(0, 0, 0, 60%)" }}>
        {description
          .split('\n') // Tách đoạn văn bằng ký tự ngắt dòng
          .filter((paragraph) => paragraph.trim() !== "") // Loại bỏ đoạn trống
          .map((paragraph, index) => (
            <p key={index} className="mb-8">
              {paragraph.trim()} {/* Loại bỏ khoảng trắng thừa */}
            </p>
          ))}
      </div>

        {/* Hiển thị hình ảnh nếu có */}
        {image && (
          <div className="my-4 w-full h-fit flex justify-center">
            <div className="w-[294px] xl:w-[313px] flex justify-center">
              <Image
                className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] rounded-[5px] object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-105 cursor-pointer"
                src={image}
                alt={`Step ${title}`}
                width={150}
                height={150}
                onClick={() => handleImageClick(image)}
              />
            </div>
          </div>
        )}

        {/* Hiển thị ảnh lớn khi được nhấp */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleClose}
          >
            <div className="bg-white p-4 rounded">
              <Image
                src={selectedImage}
                alt="Full Size"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default Step;
