import express from 'express';
import { login, logout, singup } from '../controllers/auth.controller.js';
const route = express.Router();

// route.get('/signup', async (req, res) => {
//     res.send('signup is ready ');
// });

route.get('/signup',singup);

route.get('/login',login);

route.get('/logout',logout);

export default route;