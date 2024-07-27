import express from 'express';

const router = express.Router();

router.get('/trending', getTrandingMovie)

export default router;

