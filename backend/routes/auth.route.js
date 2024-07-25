import express from 'express';
import { login, logout, singup } from '../controllers/auth.controller.js';
const route = express.Router();

// route.get('/signup', async (req, res) => {
//     res.send('signup is ready ');
// });

route.post('/signup',singup);

route.post('/login',login);

route.post('/logout',logout);

export default route;


// diwash123