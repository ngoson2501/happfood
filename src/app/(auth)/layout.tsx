
'use client'


export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    // useAuth()

    return (
        <>
            {/* <header className="bg-yellow-500 w-[100%] h-[50px]">
            
            </header> */}
            <div>{children}</div>
        
        </>
        
    )
  }