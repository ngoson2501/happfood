
import { createContext, useContext } from "react";


export  interface FoodSection {
    title: string;
    subItems: {title: string, label: string; coverImage: string }[];
  }
  
export interface FoodDirectory {
    Ingredient: FoodSection;
    CookingMethod: FoodSection;
    Holidays: FoodSection;
    Category: FoodSection;
  }
  
  const foodDirectory: FoodDirectory = {
    Ingredient: {

      title: "Nguyên liệu",
      subItems: [
        {title: "Bun-Mi-Mien-Pho", label: "Bún - Mì - Miến - Phở", coverImage: "Noodles.jpeg" },
        {title: "Thuy-Hai-San", label: "Thuỷ hải sản", coverImage: "Seafood.jpeg" },
        {title: "ThitLon-Suon", label: "Thịt lợn - Sườn", coverImage: "Spareribs.jpeg" },
        {title: "ThitGa", label: "Thịt gà", coverImage: "Chicken.jpeg" },
      ],
    },
    CookingMethod: {
      title: "Phương pháp nấu",
      subItems: [
        {title: "Chien-Ran", label: "Chiên - Rán", coverImage: "Fried.jpeg" },
        {title: "Nuong", label: "Nướng", coverImage: "Roast.jpeg" },
        {title: "Xao-Rang-Rim", label: "Xào - Rang - Rim", coverImage: "Stir-fry.jpeg" },
        {title: "Ham-Luoc-Hap", label: "Hầm - Luộc - Hấp", coverImage: "Stew-boil.jpeg" },
        {title: "Canh-Sup", label: "Canh - Súp", coverImage: "Soup.jpeg" },
      ],
    },
    Holidays: {
      title: "Lễ Tết",
      subItems: [
        {title: "Tet-Nguyen-Dan", label: "Tết Nguyên Đán", coverImage: "Tet.jpeg" },
        {title: "Trung-Thu", label: "Trung Thu", coverImage: "Trung-Thu.jpeg" },
        {title: "Giang-Sinh", label: "Giáng Sinh", coverImage: "Christmas.jpeg" },
      ],
    },
    Category: {
      title: "Thể loại",
      subItems: [
        {title: "Mon-Chinh", label: "Món chính", coverImage: "Main-Dish.jpeg"},
        {title: "Mon-Trang-Mieng", label: "Món tráng miệng", coverImage: "Dessert.jpeg" },
        {title: "Mon-Khai-Vi", label: "Món khai vị", coverImage: "Appetizer.jpeg" },
        {title: "Do-Uong", label: "Đồ uống", coverImage: "Beverage.jpeg" },
      ],
    },
    // New: {
    //   title: "Công thức new",
    //   subItems: [
    //     // {title: "Mon-Chinh", label: "Món chính", coverImage: "Main-Dish.jpeg"},
    //     // {title: "Mon-Trang-Mieng", label: "Món tráng miệng", coverImage: "Dessert.jpeg" },
    //     // {title: "Mon-Khai-Vi", label: "Món khai vị", coverImage: "Appetizer.jpeg" },
    //     // {title: "Do-Uong", label: "Đồ uống", coverImage: "Beverage.jpeg" },
    //   ],
    // },
    // Hot: {
    //   title: "Công thức hot",
    //   subItems: [
    //     // {title: "Mon-Chinh", label: "Món chính", coverImage: "Main-Dish.jpeg"},
    //     // {title: "Mon-Trang-Mieng", label: "Món tráng miệng", coverImage: "Dessert.jpeg" },
    //     // {title: "Mon-Khai-Vi", label: "Món khai vị", coverImage: "Appetizer.jpeg" },
    //     // {title: "Do-Uong", label: "Đồ uống", coverImage: "Beverage.jpeg" },
    //   ],
    // },
  };


const FoodDirectoryContext = createContext<FoodDirectory>(foodDirectory)

export const FoodDirectoryProvider = ({children}: {children: React.ReactNode})=>{
    return (
     
        <FoodDirectoryContext.Provider value={foodDirectory}>
            {children}
        </FoodDirectoryContext.Provider>
    
    )
  }


export const useFoodDirectory = ()=> useContext(FoodDirectoryContext)
