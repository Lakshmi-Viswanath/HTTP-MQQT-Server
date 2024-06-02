import mongoose from 'mongoose';
import serverConfig from './serverConfig';

async function connectToDb() : Promise<void>{
    try {
        await mongoose.connect(serverConfig.DB_URL);
    } catch (error) {
        console.log('Unable to connect to the DB server');
        console.log(error); 
    }
}

export default connectToDb;