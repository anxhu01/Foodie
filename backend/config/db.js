import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sahooanshuman1205_db_user:ALgNUS4zSohE7CuE@cluster0.fmkisq8.mongodb.net/food-del').then(()=>console.log("DB Connected")); 
}