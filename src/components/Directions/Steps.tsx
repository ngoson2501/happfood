// src/app/components/Steps.tsx

"use client"; // Add this line at the top

import Step from "./Step";
import { FC } from "react";

const Steps: FC = () => {
  const stepsData = [
    {
      title: "1. Preliminary processing of grapes",
      description:
        "You will first put 2 tablespoons of raisins in a bowl of water and soak for 10 minutes.",
      images: [
        "/images/directions/recipe34879-cook-step1-636675046932542406.jpg",
        "/images/directions/recipe34879-cook-step1-636675046934792851.jpg",
        "/images/directions/recipe34879-cook-step1-636675046935132610.jpg",
        "/images/directions/recipe34879-cook-step1-636675046941182926.jpg",
        "/images/directions/recipe34879-cook-step1-636675046935132610.jpg",
        "/images/directions/recipe34879-cook-step1-636675046941182926.jpg",
        "/images/directions/recipe34879-cook-step1-636675046935132610.jpg",
        "/images/directions/recipe34879-cook-step1-636675046941182926.jpg",
      ],
    },
    {
      title: "2. Cooking the grapes",
      description:
        "Add the grapes to a saucepan and cook over medium heat for 15 minutes.",
      images: [
        "/images/directions/recipe34879-cook-step1-636675046935132610.jpg",
        "/images/directions/recipe34879-cook-step1-636675046941182926.jpg",
      ],
    },
    // Thêm các bước khác ở đây
  ];

  return (
    <div>
      <ul className="mt-4 pb-3 leading-relaxed text-gray-700 list-disc list-inside t">
        {stepsData.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            description={step.description}
            images={step.images}
          />
        ))}
      </ul>
    </div>
  );
};

export default Steps;
