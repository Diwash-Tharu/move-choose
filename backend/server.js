// const express= require('express');
import express from 'express';
// import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';
import { ENC_VARS } from './config/envVars.js';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';


const app = express();
const PORT = ENC_VARS.PORT|| 3000;

// console.log("MONGO_URI",process.env.MONGO_URI);
app.use("/api/v1/auth",authRoutes);


app.listen(PORT, () => {
    console.log('server is running on port :localhost' + PORT);
    connectDB();
}); 
