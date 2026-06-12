import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect("mongodb+srv://2004damanjeetsingh_db_user:2r0zR5RogPNAHsz9@cluster0.uclv6ql.mongodb.net/Expense")
        .then(() => console.log("DB CONNECTED"));
}