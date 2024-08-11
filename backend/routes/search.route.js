import express from 'express';

import { searchPerson, searchMovie, searchTv } from '../controllers/search.controller.js';

const route = express.Router();

route.get("/person/:query", searchPerson);
route.get("/move/:query", searchMovie);
route.get("/tv/:query", searchTv);

export default route;