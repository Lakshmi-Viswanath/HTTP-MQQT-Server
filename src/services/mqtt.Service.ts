import * as mqtt from 'mqtt';
import serverConfig from '../config/serverConfig';
import { addToList } from '../utils/addToList';

class MqttService {
  private mqttClient: mqtt.MqttClient | null = null;
  private host: string = `mqtt://${serverConfig.MQTT_HOST}:${serverConfig.MQTT_PORT}`;
  private username: string = serverConfig.MQTT_USERNAME; 
  private password: string = serverConfig.MQTT_PASSWORD;

  constructor() {}

  connect(): void {
    // Connect mqtt with credentials 
    this.mqttClient = mqtt.connect(this.host, { username: this.username, password: this.password });

    // Mqtt error callback
    this.mqttClient.on('error', (err: Error) => {
      console.log(err);
      if (this.mqttClient) this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    // mqtt subscriptions
    this.mqttClient.subscribe(serverConfig.TOPIC, { qos: 0 });

    // When a message arrives, console.log it
    this.mqttClient.on('message', (topic: string, message: Buffer) => {
      console.log(`Received message on the topic ${topic}:${message.toString()}`);
      addToList(topic, message.toString());
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }
}

export default MqttService;
