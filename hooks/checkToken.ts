"use client";

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export const useCheckToken = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Bỏ qua kiểm tra trên các trang không cần đăng nhập
    if (pathname === '/' || pathname === '/login' || pathname === '/register' || pathname === '/forgot_password') return;

    // Kiểm tra nếu accessToken tồn tại
    const accessToken = localStorage.getItem('accessToken');

    // Nếu không có accessToken, chuyển hướng đến trang đăng nhập
    if (!accessToken) {
      router.push('/login');
    }
  }, [pathname, router]);
};




