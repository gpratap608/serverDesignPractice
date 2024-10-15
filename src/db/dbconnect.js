import mongoose from 'mongoose'
import { db_name } from '../constants.js';


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`) 
        console.log(`\n MongoDB connected Successfully || DB_HOST : ${connectionInstance.connection.host}`);       
    } catch (error) {
        console.log('File: dbconnect.js', error );
    }
}

export default connectDB