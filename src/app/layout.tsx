import "./globals.css";
import Header from "@/components/Header/Header";
import { UserProvider } from "@/context/User-provider";
import { RecipeProvider } from "@/context/RecipeContext";
import { useAuth } from "../../hooks/useAuth";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    useAuth()

    return (
      <html lang="en">
       <UserProvider>
        <RecipeProvider>
        <body className=" flex justify-center flex-col items-center  ">
            {/* Layout UI */}
          
          {/* <div className="bg-yellow-400  w-full max-w-[1425px]">
          
          </div> */}
          
          <Header></Header>
          
            
            <main className=" w-full max-w-[1425px] ">{children}</main>

            
          </body>
        </RecipeProvider>
       
          </UserProvider>
      </html>
    )
  }



