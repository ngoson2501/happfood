
import React from 'react';
import { useUser } from '@/context/User-provider';



interface DescriptionComponentProps {
  name: string;
  description: string;
}

const FoodDescription: React.FC<DescriptionComponentProps> = ({ name, description }) => {
  //const { categories, fetchCategories } = useCategories();
  // Tách đoạn dựa vào ký tự ngắt dòng
  const paragraphs = description.split('\n').filter(paragraph => paragraph.trim() !== '');

  

  return (
    <div className="space-y-4">
      <details className="group [&_summary::-webkit-details-marker]:hidden" open>
        <summary className="flex flex-col cursor-pointer items-center justify-between gap-1.5 py-3 text-gray-900">
          <div className='w-full'>
            <p
              className=" text-[25px] font-Inter font-[500] py-1 line-clamp-4 truncate whitespace-normal text-clip overflow-hidden"
              style={{ lineHeight: "1.1" }}
            >
              {name}
            </p>
          </div>
          <div className=' w-full h-fit rounded-md '>
            
            <svg
              className=" w-full size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </summary>

        <div className="mt-4 pb-3 leading-relaxed text-gray-700">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-8">
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </details>
    </div>
  );
};

export default FoodDescription;
