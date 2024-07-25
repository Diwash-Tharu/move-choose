// const express= require('express');
import express from 'express';

import authRoutes from './routes/auth.route.js';
const app = express();

app.use("/api/v1/auth",authRoutes);


app.listen(3000, () => {
    console.log('server is running on port 3000');
}); 
