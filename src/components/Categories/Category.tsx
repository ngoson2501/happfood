// import React from 'react';

// interface CategoryProps {
//     title: string;
//     coverImage: string;
//     color: string;
// }

// const Category: React.FC<CategoryProps> = ({ title, coverImage, color }) => {
//     return (
//         <section
//             className="relative w-[180px] h-[202px] rounded-[30px] flex flex-col items-center justify-center gap-[20px] cursor-pointer hover:shadow-md"
//             style={{ background: `linear-gradient(to bottom, white, ${color})` }}
//         >
//             <div className="relative">
//                 <img
//                     src={`icon/categories/${coverImage}`}
//                     alt={title}
//                     className="relative z-10 w-[80px] h-[80px]"
//                 />
//                 <img
//                     src={`icon/categories/${coverImage}`}
//                     alt={`${title}-Shadow`}
//                     className="absolute top-0 left-0 blur-md opacity-50"
//                     style={{ transform: "translate(10px, 10px)" }}
//                 />
//             </div>
//             <p className="font-Inter font-[600] text-[18px]">{title}</p>
//         </section>
//     );
// };

// export default Category;


import React from 'react';
import Image from 'next/image';

interface CategoryProps {
    title: string;
    coverImage: string;
    color: string;
}

const Category: React.FC<CategoryProps> = ({ title, coverImage, color }) => {
    return (
        // <section
        //     className="relative w-[180px] h-[202px] rounded-[30px] flex flex-col items-center justify-center gap-[20px] cursor-pointer hover:shadow-md"
        //     style={{ background: `linear-gradient(to bottom, white, ${color})` }}
        // >
        //     <div className="relative">
        //         <Image
        //             src={`/icon/categories/${coverImage}`}
        //             alt={title}
        //             width={80}
        //             height={80}
        //             className="relative z-10"
        //         />
        //         <Image
        //             src={`/icon/categories/${coverImage}`}
        //             alt={`${title}-Shadow`}
        //             width={80}
        //             height={80}
        //             className="absolute top-0 left-0 blur-md opacity-50"
        //             style={{ transform: "translate(10px, 10px)" }}
        //         />
        //     </div>
        //     <p className="font-Inter font-[600] text-[18px]">{title}</p>
        // </section>

        <section
        className="relative w-[150px] h-[170px] rounded-[20px] flex flex-col items-center justify-center gap-[10px] cursor-pointer hover:shadow-md"
        style={{ background: `linear-gradient(to bottom, white, ${color})` }}
    >
        <div className="relative">
            <Image
                src={`/icon/categories/${coverImage}`}
                alt={title}
                width={60}
                height={60}
                className="relative z-10"
            />
            <Image
                src={`/icon/categories/${coverImage}`}
                alt={`${title}-Shadow`}
                width={60}
                height={60}
                className="absolute top-0 left-0 blur-md opacity-50"
                style={{ transform: "translate(5px, 5px)" }}
            />
        </div>
        <p className="font-Inter font-[600] text-[16px]">{title}</p>
    </section>

    );
};

export default Category;
