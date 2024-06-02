import express, { Express } from 'express';
import serverConfig from './config/serverConfig';
import apiRouter from './routes';
import MqttService from './services/mqtt.Service';
import connectToDb from './config/db.config';

const app: Express = express();

app.use('/api', apiRouter);

const mqttClient = new MqttService();
mqttClient.connect();

app.listen(serverConfig.PORT, () =>{
    console.log(`Server is up on the port ${serverConfig.PORT}`);
    connectToDb();
    console.log("connected to DB");
});