import "./globals.css";
import Header from "@/components/Header/Header";


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          <Header></Header>
          
          <main>{children}</main>
        </body>
      </html>
    )
  }