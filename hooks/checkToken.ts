// "use client";

// import { useEffect } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import jwt, { JwtPayload } from 'jsonwebtoken';
// import { refreshAccessToken } from '../utils/refreshToken';

// export const checkToken = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     // Các trang không cần kiểm tra accessToken
//     if (pathname === '/' || pathname === '/login') return;

//     // Hàm kiểm tra và làm mới accessToken nếu cần
//     const checkAccessToken = async () => {
//       const accessToken = localStorage.getItem('accessToken');
//       const currentTime = new Date().getTime();

//       if (accessToken) {
//         const decodedAccessToken = jwt.decode(accessToken) as JwtPayload;

//         if (decodedAccessToken) {
//           const tokenExpiration = decodedAccessToken.exp! * 1000;

//           if (tokenExpiration - currentTime <= 60 * 1000 || tokenExpiration <= currentTime) {
//             const newAccessToken = await refreshAccessToken(accessToken);

//             if (!newAccessToken) {
//               handleLogout();
//             }
//           }

//           if (tokenExpiration <= currentTime) {
//             handleLogout();
//           }
//         }
//       } else {
//         handleLogout();
//       }
//     };

//     // Kiểm tra ngay lập tức khi component render
//     checkAccessToken();

//     // Sau đó, tiếp tục kiểm tra mỗi 5 giây
//     const interval = setInterval(checkAccessToken, 5 * 1000);

//     return () => clearInterval(interval);
//   }, [pathname]);

//   const handleLogout = () => {
//     if (pathname === '/' || pathname === '/login') return;
//     localStorage.removeItem('accessToken');
//     window.location.href = '/login';
//   };
// };


















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









// "use client";

// import { useEffect } from 'react';
// import { usePathname, useRouter } from 'next/navigation';

// export const useCheckToken = () => {
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     // Các trang không yêu cầu đăng nhập
//     const publicPaths = ['/', '/login', '/register', '/forgotPassword'];

//     // Bỏ qua kiểm tra nếu pathname nằm trong publicPaths
//     if (publicPaths.includes(pathname)) return;

//     // Kiểm tra accessToken
//     const accessToken = localStorage.getItem('accessToken');

//     // Nếu không có accessToken, chuyển hướng đến trang đăng nhập
//     if (!accessToken) {
//       router.push('/login');
//     }
//   }, [pathname, router]);
// };
