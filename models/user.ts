import { Schema, model, models } from "mongoose";



const UserSchema = new Schema(
    {
        email: {type: String, required: true, unique:true},
        username: {type: String, required: true, unique:true},
        password: {type: String, required: true},
        refreshToken: { type:  String, required: false },
        avatar: { type:  String, required: false },
        role: { type: String, enum: ['user', 'admin'], default: 'user' },
        lastActive: { type: Date, default: null }, // Thời điểm hoạt động gần nhất
        //googleId: { type: String, required: false }, // ID người dùng từ Google
    },
    {
        timestamps: true,
    
    }
)


const User = models.User || model("User", UserSchema)

export default User



 


