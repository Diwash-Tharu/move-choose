import express from 'express';	

const router = express.Router();


router.get('/trending', getTrandingMovie)
router.get('/:id/trailers', getMovieTrailers)
router.get('/:id/details', getMovieDetails)
router.get('/:id/similar', getSimilarMovies)
router.get('/:catogeory', getMoviesByCatogeory)


export default router;