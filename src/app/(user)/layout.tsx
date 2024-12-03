"use client";

import Footer from "@/components/Footer/Footer"

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <div>{children}</div>
            <Footer></Footer>
        </>
        
    )
  }
