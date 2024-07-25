import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
},
email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
},
password: {
    type: String,
    required: true,
},
image: {
    type: String,
    default:""
},
searchHistorty: {   
    type: Array,
    default: [],
},


});

 export const User = mongoose.model("User", userSchema);