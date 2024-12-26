// "use client";

// import { useState } from "react";
// import { Input, List, Spin } from "antd";
// import { useRouter } from "next/navigation";
// import useItemList from "../../../hooks/useItemList";

// const { Search: AntdSearch } = Input;

// const Search = () => {
//   const router = useRouter();
//   const { categories, loading, error } = useItemList();

//   // Chuyển đổi `categories` thành danh sách tiêu đề
//   const categoryTitles: string[] = categories.map((category) => category.title);

//   const [searchValue, setSearchValue] = useState<string>(""); // Lưu giá trị tìm kiếm
//   const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const handleSearch = (value: string) => {
//     const trimmedValue = value.trim();
//     if (trimmedValue) {
//       const results = categoryTitles.filter((title) =>
//         title.toLowerCase().includes(trimmedValue.toLowerCase())
//       );
//       setFilteredCategories(results);
//     } else {
//       setFilteredCategories(categoryTitles); // Hiển thị tất cả khi input rỗng
//     }
//     setShowSuggestions(true); // Luôn hiển thị gợi ý sau khi tìm kiếm
//   };

//   const handleSearchButton = (value: string) => {
//     const trimmedValue = value.trim();
//     if (trimmedValue) {
//       router.push(`/categories/${encodeURIComponent(trimmedValue)}?title=${encodeURIComponent(trimmedValue)}`);
//     }
//   };

//   const handleFocus = () => {
//     if (!searchValue.trim()) {
//       setFilteredCategories(categoryTitles); // Hiển thị tất cả khi input rỗng
//     }
//     setShowSuggestions(true);
//   };

//   const handleBlur = () => {
//     setTimeout(() => setShowSuggestions(false), 200); // Thêm độ trễ để tránh mất tiêu điểm khi chọn mục gợi ý
//   };

//   const handleSuggestionClick = (suggestion: string) => {
//     setSearchValue(suggestion); // Điền giá trị gợi ý vào thanh tìm kiếm
//     setShowSuggestions(false); // Ẩn gợi ý sau khi chọn
//   };

//   // Giới hạn số lượng gợi ý hiển thị (ví dụ: chỉ hiển thị 5 gợi ý)
//   const limitedFilteredCategories = filteredCategories.slice(0, 5);

//   return (
//     <div className="bg-red-500 relative w-full max-w-md mx-auto">
//       <AntdSearch
//         placeholder="Search categories"
//         value={searchValue}
//         onChange={(e) => {
//           setSearchValue(e.target.value);
//           handleSearch(e.target.value); // Lọc khi người dùng gõ vào
//         }}
//         onSearch={handleSearchButton}
//         onFocus={handleFocus} // Hiển thị gợi ý khi focus
//         onBlur={handleBlur}
//         enterButton
//       />
//       {loading && (
//         <div className="flex justify-center items-center mt-2">
//           <Spin />
//         </div>
//       )}
//       {error && <div className="text-red-500 mt-2">{error}</div>}
//       {showSuggestions && limitedFilteredCategories.length > 0 && (
//         <div className="absolute z-10 w-full bg-white border border-gray-300 shadow-lg">
//           <List
//             size="small"
//             dataSource={limitedFilteredCategories} // Sử dụng danh sách gợi ý đã giới hạn
//             renderItem={(item) => (
//               <List.Item
//                 className="hover:bg-gray-100 cursor-pointer"
//                 onClick={() => handleSuggestionClick(item)} // Chọn gợi ý khi click
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;


















// "use client";

// import { useState } from "react";
// import { Input, List, Spin } from "antd";
// import { useRouter } from "next/navigation";
// import useItemList from "../../../hooks/useItemList";

// const { Search: AntdSearch } = Input;

// const Search = () => {
//   const router = useRouter();
//   const { categories, loading, error } = useItemList();

//   // Chuyển đổi `categories` thành danh sách tiêu đề
//   const categoryTitles: string[] = categories.map((category) => category.title);

//   const [searchValue, setSearchValue] = useState<string>(""); // Lưu giá trị tìm kiếm
//   const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const handleSearch = (value: string) => {
//     const trimmedValue = value.trim();
//     if (trimmedValue) {
//       const results = categoryTitles.filter((title) =>
//         title.toLowerCase().includes(trimmedValue.toLowerCase())
//       );
//       setFilteredCategories(results);
//     } else {
//       setFilteredCategories(categoryTitles); // Hiển thị tất cả khi input rỗng
//     }
//     setShowSuggestions(true); // Luôn hiển thị gợi ý sau khi tìm kiếm
//   };

//   const handleSearchButton = (value: string) => {
//     const trimmedValue = value.trim();
//     if (trimmedValue) {
//       router.push(`/categories/${encodeURIComponent(trimmedValue)}?title=${encodeURIComponent(trimmedValue)}`);
//     }
//   };

//   const handleFocus = () => {
//     if (!searchValue.trim()) {
//       setFilteredCategories(categoryTitles); // Hiển thị tất cả khi input rỗng
//     }
//     setShowSuggestions(true);
//   };

//   const handleBlur = () => {
//     setTimeout(() => setShowSuggestions(false), 200); // Thêm độ trễ để tránh mất tiêu điểm khi chọn mục gợi ý
//   };

//   const handleSuggestionClick = (suggestion: string) => {
//     setSearchValue(suggestion); // Điền giá trị gợi ý vào thanh tìm kiếm
//     setShowSuggestions(false); // Ẩn gợi ý sau khi chọn
//   };

//   // Giới hạn số lượng gợi ý hiển thị (ví dụ: chỉ hiển thị 5 gợi ý)
//   const limitedFilteredCategories = filteredCategories.slice(0, 5);

//   return (
//     <div className="relative w-full max-w-md mx-auto bg-white p-4 rounded-lg shadow-lg">
//       <AntdSearch
//         placeholder="Search categories"
//         value={searchValue}
//         onChange={(e) => {
//           setSearchValue(e.target.value);
//           handleSearch(e.target.value); // Lọc khi người dùng gõ vào
//         }}
//         onSearch={handleSearchButton}
//         onFocus={handleFocus} // Hiển thị gợi ý khi focus
//         onBlur={handleBlur}
//         enterButton
//         className="w-full"
//       />
//       {loading && (
//         <div className="flex justify-center items-center mt-2">
//           <Spin />
//         </div>
//       )}
//       {error && <div className="text-red-500 mt-2">{error}</div>}
//       {showSuggestions && limitedFilteredCategories.length > 0 && (
//         <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-lg shadow-lg max-h-60 overflow-auto mt-2">
//           <List
//             size="small"
//             dataSource={limitedFilteredCategories} // Sử dụng danh sách gợi ý đã giới hạn
//             renderItem={(item) => (
//               <List.Item
//                 className="hover:bg-gray-100 cursor-pointer p-2"
//                 onClick={() => handleSuggestionClick(item)} // Chọn gợi ý khi click
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;































// "use client";

// import { useState } from "react";
// import { Input, List, Spin } from "antd";
// import { useRouter } from "next/navigation";
// import useItemList from "../../../hooks/useItemList";

// const { Search: AntdSearch } = Input;

// const Search = () => {
//   const router = useRouter();
//   const { categories, loading, error } = useItemList();

//   // Chuyển đổi `categories` thành danh sách tiêu đề
//   const categoryTitles: string[] = categories.map((category) => category.title);

//   const [searchValue, setSearchValue] = useState<string>(""); // Lưu giá trị tìm kiếm
//   const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const handleSearch = (value: string) => {
//     const trimmedValue = value.trim();
//     if (trimmedValue) {
//       const results = categoryTitles.filter((title) =>
//         title.toLowerCase().includes(trimmedValue.toLowerCase())
//       );
//       setFilteredCategories(results);
//     } else {
//       setFilteredCategories(categoryTitles); // Hiển thị tất cả khi input rỗng
//     }
//     setShowSuggestions(true); // Luôn hiển thị gợi ý sau khi tìm kiếm
//   };

//   const handleSearchButton = (value: string) => {
//     const trimmedValue = value.trim();
//     if (trimmedValue) {
//       router.push(`/categories/${encodeURIComponent(trimmedValue)}?title=${encodeURIComponent(trimmedValue)}`);
//     }
//   };

//   const handleFocus = () => {
//     if (!searchValue.trim()) {
//       setFilteredCategories(categoryTitles); // Hiển thị tất cả khi input rỗng
//     }
//     setShowSuggestions(true);
//   };

//   const handleBlur = () => {
//     setTimeout(() => setShowSuggestions(false), 200); // Thêm độ trễ để tránh mất tiêu điểm khi chọn mục gợi ý
//   };

//   const handleSuggestionClick = (suggestion: string) => {
//     setSearchValue(suggestion); // Điền giá trị gợi ý vào thanh tìm kiếm
//     setShowSuggestions(false); // Ẩn gợi ý sau khi chọn
//   };

//   // Giới hạn số lượng gợi ý hiển thị (ví dụ: chỉ hiển thị 5 gợi ý)
//   const limitedFilteredCategories = filteredCategories.slice(0, 5);

//   return (
//     <div className="relative w-full max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-lg">
//       <AntdSearch
//         placeholder="Search categories"
//         value={searchValue}
//         onChange={(e) => {
//           setSearchValue(e.target.value);
//           handleSearch(e.target.value); // Lọc khi người dùng gõ vào
//         }}
//         onSearch={handleSearchButton}
//         onFocus={handleFocus} // Hiển thị gợi ý khi focus
//         onBlur={handleBlur}
//         enterButton
//         className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
//       />
//       {loading && (
//         <div className="flex justify-center items-center mt-2">
//           <Spin />
//         </div>
//       )}
//       {error && <div className="text-red-500 mt-2">{error}</div>}
//       {showSuggestions && limitedFilteredCategories.length > 0 && (
//         <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-lg shadow-lg max-h-60 overflow-auto mt-2">
//           <List
//             size="small"
//             dataSource={limitedFilteredCategories} // Sử dụng danh sách gợi ý đã giới hạn
//             renderItem={(item) => (
//               <List.Item
//                 className="hover:bg-gray-100 cursor-pointer p-2"
//                 onClick={() => handleSuggestionClick(item)} // Chọn gợi ý khi click
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;























// "use client";

// import { useState } from "react";
// import { Input, List, Spin } from "antd";
// import { useRouter } from "next/navigation";
// import useItemList from "../../../hooks/useItemList";

// const { Search: AntdSearch } = Input;

// const Search = () => {
//   const router = useRouter();
//   const { categories, loading, error } = useItemList();

//   // Chuyển đổi `categories` thành danh sách tiêu đề
//   const categoryTitles: string[] = categories.map((category) => category.title);

//   const [searchValue, setSearchValue] = useState<string>(""); // Lưu giá trị tìm kiếm
//   const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const handleSearch = (value: string) => {
//     const trimmedValue = value.trim();
//     if (trimmedValue) {
//       const results = categoryTitles.filter((title) =>
//         title.toLowerCase().includes(trimmedValue.toLowerCase())
//       );
//       setFilteredCategories(results);
//     } else {
//       setFilteredCategories(categoryTitles); // Hiển thị tất cả khi input rỗng
//     }
//     setShowSuggestions(true); // Luôn hiển thị gợi ý sau khi tìm kiếm
//   };

//   const handleSearchButton = (value: string) => {
//     const trimmedValue = value.trim();
//     if (trimmedValue) {
//       router.push(`/categories/${encodeURIComponent(trimmedValue)}?title=${encodeURIComponent(trimmedValue)}`);
//     }
//   };

//   const handleFocus = () => {
//     if (!searchValue.trim()) {
//       setFilteredCategories(categoryTitles); // Hiển thị tất cả khi input rỗng
//     }
//     setShowSuggestions(true);
//   };

//   const handleBlur = () => {
//     setTimeout(() => setShowSuggestions(false), 200); // Thêm độ trễ để tránh mất tiêu điểm khi chọn mục gợi ý
//   };

//   const handleSuggestionClick = (suggestion: string) => {
//     setSearchValue(suggestion); // Điền giá trị gợi ý vào thanh tìm kiếm
//     setShowSuggestions(false); // Ẩn gợi ý sau khi chọn
//   };

//   // Giới hạn số lượng gợi ý hiển thị (ví dụ: chỉ hiển thị 5 gợi ý)
//   const limitedFilteredCategories = filteredCategories.slice(0, 5);

//   return (
//     <div className="bg-white relative w-full max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto  p-4 rounded-lg shadow-lg">
//       <AntdSearch
//         placeholder="Search categories"
//         value={searchValue}
//         onChange={(e) => {
//           setSearchValue(e.target.value);
//           handleSearch(e.target.value); // Lọc khi người dùng gõ vào
//         }}
//         onSearch={handleSearchButton}
//         onFocus={handleFocus} // Hiển thị gợi ý khi focus
//         onBlur={handleBlur}
//         enterButton
//         className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-full"
//       />
//       {loading && (
//         <div className="flex justify-center items-center mt-2">
//           <Spin />
//         </div>
//       )}
//       {error && <div className="text-red-500 mt-2">{error}</div>}
//       {showSuggestions && limitedFilteredCategories.length > 0 && (
//         <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-lg shadow-lg max-h-60 overflow-auto mt-2">
//           <List
//             size="small"
//             dataSource={limitedFilteredCategories} // Sử dụng danh sách gợi ý đã giới hạn
//             renderItem={(item) => (
//               <List.Item
//                 className="hover:bg-gray-100 cursor-pointer p-2"
//                 onClick={() => handleSuggestionClick(item)} // Chọn gợi ý khi click
//               >
//                 {item}
//               </List.Item>
//             )}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

















"use client";

import { useState } from "react";
import { Input, List, Spin } from "antd";
import { useRouter } from "next/navigation";
import useItemList from "../../../hooks/useItemList";
import { SearchOutlined } from "@ant-design/icons";


const { Search: AntdSearch } = Input;

const Search = () => {
  const router = useRouter();
  const { categories, loading, error } = useItemList();

  // Chuyển đổi `categories` thành danh sách tiêu đề
  const categoryTitles: string[] = categories.map((category) => category.title);

  const [searchValue, setSearchValue] = useState<string>(""); // Lưu giá trị tìm kiếm
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      const results = categoryTitles.filter((title) =>
        title.toLowerCase().includes(trimmedValue.toLowerCase())
      );
      setFilteredCategories(results);
    } else {
      setFilteredCategories(categoryTitles); // Hiển thị tất cả khi input rỗng
    }
    setShowSuggestions(true); // Luôn hiển thị gợi ý sau khi tìm kiếm
  };

  const handleSearchButton = (value: string) => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      router.push(`/categories/${encodeURIComponent(trimmedValue)}?title=${encodeURIComponent(trimmedValue)}`);
    }
  };

  const handleFocus = () => {
    if (!searchValue.trim()) {
      setFilteredCategories(categoryTitles); // Hiển thị tất cả khi input rỗng
    }
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200); // Thêm độ trễ để tránh mất tiêu điểm khi chọn mục gợi ý
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchValue(suggestion); // Điền giá trị gợi ý vào thanh tìm kiếm
    setShowSuggestions(false); // Ẩn gợi ý sau khi chọn
  };

  // Giới hạn số lượng gợi ý hiển thị (ví dụ: chỉ hiển thị 5 gợi ý)
  const limitedFilteredCategories = filteredCategories.slice(0, 5);

  return (
    // <div className="bg-white relative w-full max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto  p-4 mb-5 rounded-lg shadow-lg">
    <div className="bg-white relative w-full max-w-md lg:max-w-2xl xl:max-w-3xl mx-auto  rounded-lg ">
      {/* <AntdSearch
        placeholder="Search categories"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleSearch(e.target.value); // Lọc khi người dùng gõ vào
        }}
        onSearch={handleSearchButton}
        onFocus={handleFocus} // Hiển thị gợi ý khi focus
        onBlur={handleBlur}
        enterButton
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-full"
      /> */}

<AntdSearch
  placeholder="Search categories"
  value={searchValue}
  onChange={(e) => {
    setSearchValue(e.target.value);
    handleSearch(e.target.value);
  }}
  onSearch={handleSearchButton}
  onFocus={handleFocus}
  onBlur={handleBlur}
  className=" w-full"
/>

      {/* {loading && (
        <div className="flex justify-center items-center mt-2">
          <Spin />
        </div>
      )} */}
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {showSuggestions && limitedFilteredCategories.length > 0 && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-lg shadow-lg max-h-60 overflow-auto mt-2 left-0 right-0">
          <List
            size="small"
            dataSource={limitedFilteredCategories} // Sử dụng danh sách gợi ý đã giới hạn
            renderItem={(item) => (
              <List.Item
                className="hover:bg-gray-100  cursor-pointer p-2"
                onClick={() => handleSuggestionClick(item)} // Chọn gợi ý khi click
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Search;
