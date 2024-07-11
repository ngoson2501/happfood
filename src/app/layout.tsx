import "./globals.css";
import Header from "@/components/Header/Header";


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className=" flex justify-center flex-col items-center  ">
          {/* Layout UI */}
         
         {/* <div className="bg-yellow-400  w-full max-w-[1425px]">
         
         </div> */}

         <Header></Header>
        
          
          <main className=" w-full max-w-[1425px] ">{children}</main>

         
        </body>
      </html>
    )
  }



