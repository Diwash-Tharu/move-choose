import express from 'express';
import { getTrandingMovie } from '../controllers/movie.contoller.js';

const router = express.Router();

router.get('/trending', getTrandingMovie)

export default router;

