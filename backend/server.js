// const express= require('express');
import express from 'express';
// import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';
import moviesRoutes from './routes/movie.route.js';
// dotenv.config();
import { ENC_VARS } from './config/envVars.js';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';


const app = express();
const PORT = ENC_VARS.PORT;

// will allows us to use the req.body in the web body
app.use(express.json());

// console.log("MONGO_URI",process.env.MONGO_URI);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie",moviesRoutes);



app.listen(PORT, () => {
    console.log('server is running on port :localhost' + PORT);
    connectDB();
}); 



// time of the video

