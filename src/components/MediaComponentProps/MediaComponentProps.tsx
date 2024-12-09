// import React from 'react';

// interface MediaComponentProps {
//   src: string;
//   isVideo: boolean;
// }

// const MediaComponent: React.FC<MediaComponentProps> = ({ src, isVideo }) => {
//   return (
//     <div className="bg-black w-full xl:w-2/3 h-[300px] lg:h-[450px]">
//       {isVideo ? (
//         <video className="bg-black w-full h-full" controls>
//           <source src={src} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <img className="bg-black w-full h-full object-cover" src={src} alt="Media content" />
//       )}
//     </div>
//   );
// }

// export default MediaComponent;



import React from 'react';
import Image from 'next/image';

interface MediaComponentProps {
  src: string;
  // isVideo: boolean;
  alt?: string;
}

const MediaComponent: React.FC<MediaComponentProps> = ({ src, alt = 'Media content' }) => {
  return (
    <div className="bg-black w-full xl:w-2/3 h-[300px] lg:h-[450px] overflow-hidden lg:rounded-[15px]">
      {/* {isVideo ? (
        <video className="bg-black w-full h-full" controls>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="relative w-full h-full">
         <Image
            className="object-contain"
            src={src}
            alt={alt}
            fill
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Thêm thuộc tính sizes
          />
        </div>
      )} */}


        <div className="relative w-full h-full overflow-hidden">
         <Image
            // className="object-contain"
            className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-500 ease-in-out transform group-hover:scale-110"
            src={src}
            alt={alt}
            fill
            quality={100}
            // placeholder="blur"
            // blurDataURL="/icon/loading.png" // URL của hình ảnh mờ
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Thêm thuộc tính sizes
          />
        </div>



    </div>
  );
}

export default MediaComponent;

