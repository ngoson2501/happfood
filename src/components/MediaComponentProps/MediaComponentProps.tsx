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
  isVideo: boolean;
  alt?: string;
}

const MediaComponent: React.FC<MediaComponentProps> = ({ src, isVideo, alt = 'Media content' }) => {
  return (
    <div className="bg-black w-full xl:w-2/3 h-[300px] lg:h-[450px]">
      {isVideo ? (
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
      )}
    </div>
  );
}

export default MediaComponent;

