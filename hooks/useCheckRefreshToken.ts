import { useEffect } from 'react';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const useCheckRefreshToken = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const refreshToken = localStorage.getItem('refreshToken');
      const currentTime = new Date().getTime();

      // Kiểm tra refreshToken
      if (refreshToken) {
        const decodedRefreshToken = jwt.decode(refreshToken) as JwtPayload;

        if (decodedRefreshToken) {
          const refreshTokenExpiration = (decodedRefreshToken.exp! * 1000); // Thời gian hết hạn của refreshToken

          // Nếu refreshToken đã hết hạn, thực hiện đăng xuất
          if (refreshTokenExpiration <= currentTime || (refreshTokenExpiration - currentTime <= 60 * 1000)) {
            handleLogout(); // Gọi hàm xử lý đăng xuất
          }
        }
      }
    }, 30 * 1000); // Kiểm tra mỗi 30 giây

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    // Xóa accessToken và refreshToken khỏi localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Có thể thêm logic thông báo cho người dùng và điều hướng về trang đăng nhập
    alert('Your session has expired. Please log in again.');
    window.location.href = '/login'; // Điều hướng đến trang đăng nhập
  };
};
