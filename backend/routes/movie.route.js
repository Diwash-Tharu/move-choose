import express from 'express';
import { getTrandingMovie, getMovieTrailers } from '../controllers/movie.contoller.js';

const router = express.Router();

router.get('/trending', getTrandingMovie)
router.get('/:id/trailers', getMovieTrailers)

export default router;

