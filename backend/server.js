// const express= require('express');
import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';

dotenv.config();
const app = express();

console.log("MONGO_URI",process.env.MONGO_URI);
app.use("/api/v1/auth",authRoutes);


app.listen(3000, () => {
    console.log('server is running on port 3000');
}); 
