// const express= require('express');
import express from 'express';
// import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';
import moviesRoutes from './routes/movie.route.js';
import tvRoutes from './routes/tv.route.js';
import searchRoute from './routes/search.route.js';

// dotenv.config();
import { ENC_VARS } from './config/envVars.js';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';
import cookieParser from 'cookie-parser';
import { protectRoute } from './middleware/protectRoute.js';

const app = express();
const PORT = ENC_VARS.PORT;
app.use(cookieParser());

// will allows us to use the req.body in the web body
app.use(express.json());

// console.log("MONGO_URI",process.env.MONGO_URI);
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/movie",protectRoute, moviesRoutes);
app.use("/api/v1/tv",protectRoute,tvRoutes);
app.use("/api/v1/search",protectRoute,searchRoute);




app.listen(PORT, () => {
    console.log('server is running on port :localhost' + PORT);
    connectDB();
}); 



// time of the video
// 1:54:06 / 6:52:54
// 2:03:38 / 6:52:54



