// export const refreshAccessToken = async () => {
//     const refreshToken = localStorage.getItem('refreshToken');
  
//     if (refreshToken) {
//       const res = await fetch('/api/auth/refresh', {
//         method: 'POST',
//         body: JSON.stringify({ refreshToken }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       const data = await res.json();
//       if (res.ok) {
//         console.log('new accessToken', data.accessToken)
//         localStorage.setItem('accessToken', data.accessToken);
//         return data.accessToken;
//       } else {
//         console.error('Error refreshing token:', data.message);
//         // Xử lý logout nếu refresh token không hợp lệ
//       }
//     }
//   };



export const refreshAccessToken = async (accessToken: string) => {
  if (accessToken) {
    try {
      const res = await fetch('/api/auth/refresh', {
        method: 'POST',
        body: JSON.stringify({ accessToken }),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (res.ok) {
        console.log('New accessToken:', data.accessToken);
        localStorage.setItem('accessToken', data.accessToken);
        return data.accessToken;
      } else {
        console.error('Error refreshing token:', data.message);

        // Kiểm tra nếu refresh token đã hết hạn hoặc không hợp lệ
        if (data.message === 'Refresh token has expired') {
          console.warn('Refresh token has expired.');
          // Xóa accessToken khỏi localStorage
          localStorage.removeItem('accessToken');
          return null; // Trả về null để thông báo token đã hết hạn
        } else {
          console.error('Invalid refresh token');
        }
      }
    } catch (error) {
      console.error('Network error while refreshing token:', error);
    }
  }
  return null; // Trả về null nếu không có accessToken hoặc xảy ra lỗi
};
