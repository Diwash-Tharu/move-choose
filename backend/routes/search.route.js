import express from 'express';

import { searchPerson, searchMovie, searchTv } from '../controllers/search.controller.js';
import { get } from 'mongoose';

const route = express.Router();

route.get("/person/:query", searchPerson);
route.get("/move/:query", searchMovie);
route.get("/tv/:query", searchTv);

route.get("/history", getSearchHistory);

export default route;