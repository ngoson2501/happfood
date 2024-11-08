import { useEffect, useState } from 'react';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { refreshAccessToken } from '../utils/refreshToken';

export const useRefreshAccessToken = () => {
  const [refreshing, setRefreshing] = useState(false); // Biến cờ để theo dõi trạng thái làm mới

  useEffect(() => {
    const interval = setInterval(async () => {
      const accessToken = localStorage.getItem('accessToken');
      const currentTime = new Date().getTime();

      // Kiểm tra accessToken
      if (accessToken) {
        const decodedAccessToken = jwt.decode(accessToken) as JwtPayload;

        if (decodedAccessToken) {
          const tokenExpiration = (decodedAccessToken.exp! * 1000); // Thời gian hết hạn của accessToken

          // Nếu accessToken gần hết hạn trong 1 phút thì làm mới
          if (tokenExpiration - currentTime <= 60 * 1000 && !refreshing) {
            setRefreshing(true); // Đánh dấu đang làm mới
            alert("refreshAccessToken");
            await refreshAccessToken();
            setRefreshing(false); // Đánh dấu kết thúc quá trình làm mới
          }
        }
      }
    }, 30 * 1000); // Kiểm tra mỗi 30 giây

    return () => clearInterval(interval);
  }, [refreshing]);
};
