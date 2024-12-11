// import User from "../models/user";
// import connect from "./db";

// const updateLastActive = async (userId: string) => {
//   try {
//     await User.findByIdAndUpdate(userId, { lastActive: new Date() });
//   } catch (error) {
//     console.error("Failed to update lastActive:", error);
//   }
// };


// export default updateLastActive



import User from "../models/user";
import connect from "./db";

const updateLastActive = async (userId: string) => {
  try {
    // Đảm bảo kết nối cơ sở dữ liệu
    await connect();

    // Kiểm tra userId
    if (!userId) {
      throw new Error("Invalid userId");
    }

    // Cập nhật thời gian hoạt động
    const result = await User.findByIdAndUpdate(
      userId,
      { lastActive: new Date() },
      { new: true } // Trả về tài liệu đã cập nhật
    );

    if (!result) {
      throw new Error(`User with ID ${userId} not found`);
    }

    console.log(`Updated lastActive for user: ${userId}`);
    return result;
  } catch (error: any) {
    console.error("Failed to update lastActive:", error.message);
    throw new Error(`Failed to update lastActive: ${error.message}`);
  }
};

export default updateLastActive;
