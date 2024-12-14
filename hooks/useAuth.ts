"use client";

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { refreshAccessToken } from '../utils/refreshToken';
import { message } from 'antd';

export const useAuth = () => {
  const pathname = usePathname();
  const router = useRouter();
 

  useEffect(() => {
    // Các trang không cần kiểm tra accessToken
    
    if (pathname === '/' || pathname === '/login' || pathname === '/register' || pathname === '/forgot_password') return;
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    
    if (!accessToken && !refreshToken) {
      //window.location.href = '/login';
      router.push('/login');
      message.error("you are not logged in");
    }
    const interval = setInterval(async () => {
      
     
      const currentTime = new Date().getTime();
      

      // Kiểm tra accessToken
      if (accessToken) {
        const decodedAccessToken = jwt.decode(accessToken) as JwtPayload;

        console.log("decodedAccessToken>>>:", decodedAccessToken);

        if (decodedAccessToken) {
          const tokenExpiration = decodedAccessToken.exp! * 1000; // Lấy thời gian hết hạn

          // Nếu accessToken gần hết hạn trong 1 phút, thực hiện làm mới
          if (tokenExpiration - currentTime <= 60 * 1000 || tokenExpiration <= currentTime) {
            console.log("accessToken đã hết hạn >>>>>>>>");
            const newAccessToken = await refreshAccessToken(accessToken);

            // Nếu không thể làm mới accessToken, thực hiện đăng xuất
            if (!newAccessToken) {
              handleLogout();
            }
          }
          // Kiểm tra xem accessToken đã hết hạn chưa
          if (tokenExpiration <= currentTime) {
            console.log("accessToken đã hết hạn >>>>>>>>");
            //localStorage.removeItem('accessToken'); // Xóa accessToken khỏi localStorage
            handleLogout(); // Đăng xuất
          }
        }
      } else {
        handleLogout(); // Đăng xuất nếu không tìm thấy accessToken
      }
    }, 5 * 1000); // Kiểm tra mỗi 5 giây

    return () => clearInterval(interval);
  }, [pathname]);

  const handleLogout = async () => {
    //if (pathname === '/' || pathname === '/login') return;
    localStorage.removeItem('accessToken'); // Xóa accessToken khỏi localStorage
    window.location.href = '/login'; // Điều hướng đến trang đăng nhập
  };


};




