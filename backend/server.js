// const express= require('express');
import express from 'express';
// import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';
import { ENC_VARS } from './config/envVars.js';
import { connect } from 'mongoose';
import { connectDB } from './config/db.js';


const app = express();
const PORT = ENC_VARS.PORT;

// will allows us to use the req.body in the web body
app.use(express.json());

// console.log("MONGO_URI",process.env.MONGO_URI);
app.use("/api/v1/auth",authRoutes);


app.listen(PORT, () => {
    console.log('server is running on port :localhost' + PORT);
    connectDB();
}); 


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+ ENC_VARS.TMDB_API_KEY
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

// time of the video
// 54:31 / 6:52:54
