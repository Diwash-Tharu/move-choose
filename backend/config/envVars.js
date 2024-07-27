import dotenv  from 'dotenv';

// this is the method for connecting the data base 
dotenv.config();

export const ENC_VARS={
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 3000	,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
};