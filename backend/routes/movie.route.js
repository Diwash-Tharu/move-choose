import express from 'express';
import { getTrandingMovie, getMovieTrailers,getMovieDetails, getSimilarMovies } from '../controllers/movie.contoller.js';
import { get } from 'mongoose';

const router = express.Router();

router.get('/trending', getTrandingMovie)
router.get('/:id/trailers', getMovieTrailers)
router.get('/:id/details', getMovieDetails)
router.get('/:id/similar', getSimilarMovies)


export default router;

