import express from 'express';	
import { getTrandingTv,getTvTrailers,getTvDetails,getSimilarTv, getTvByCatogeory } from '../controllers/tv.contoller.js';

const router = express.Router();


router.get('/trending', getTrandingTv)
router.get('/:id/trailers', getTvTrailers)
router.get('/:id/details', getTvDetails)
router.get('/:id/similar', getSimilarTv)
router.get('/:catogeory', getTvByCatogeory)


export default router;