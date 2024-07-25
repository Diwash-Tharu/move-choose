import dotenv  from 'dotenv';

// this is the method for connecting the data base 
dotenv.config();

export const ENC_VARS={
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 3000	,

}