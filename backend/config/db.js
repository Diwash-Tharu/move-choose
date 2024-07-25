import mongoose from 'mongoose';

import { ENC_VARS } from './envVars.js';

export const connectDB = async () => {  

    try{
        const conn = await mongoose.connect(ENC_VARS.MONGO_URI) 

            console.log("MONGO_URI connetcted"+ conn.connection.host);
        }
    catch(error)
    {
        console.log("Error in connecting to the database"+ error.message);

        //1 meas there was a an error , 0 measn the success 
        process.exit(1);

        // console.log("Error in connecting to the database",error);
    }

}