"use client"
import Step from "./Step";
import { FC } from "react";

interface Direction {
  title: string;
  description: string;
  image?: string; // Hình ảnh là tùy chọn
}

// Đảm bảo rằng prop 'directions' được định nghĩa đúng kiểu
const Steps: FC<{ directions: Direction[] }> = ({ directions }) => {
  return (
    <div>
      <ul className="mt-4 pb-3 leading-relaxed text-gray-700 list-disc list-inside">
        {directions.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            description={step.description}
            image={step.image} // Chuyển hình ảnh vào từng step
          />
        ))}
      </ul>
    </div>
  );
};

export default Steps;


