import express from 'express';

const route = express.Router();

route.get("/person/:query", searchPerson);
route.get("/move/:query", searchPerson);
route.get("/tv/:query", searchPerson);

export default route;