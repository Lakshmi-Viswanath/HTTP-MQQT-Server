import dotenv from 'dotenv';
dotenv.config();

export default {
    PORT : process.env.PORT || 3000,
    REDIS_KEY : process.env.REDIS_KEY || 'FULLSTACK_TASK_Lakshmi',
    REDIS_PORT: parseInt(process.env.REDIS_PORT || "6379", 10),
    REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
    REDIS_USERNAME : process.env.REDIS_USERNAME || 'default',
    REDIS_PASSWORD : process.env.REDIS_PASSWORD,
    MQTT_HOST : process.env.MQTT_HOST || 'broker.emqx.io',
    MQTT_PORT : process.env.MQTT_PORT || '1883',
    TOPIC : process.env.TOPIC || '/add',
    MQTT_USERNAME : process.env.MQTT_USERNAME || 'emqx',
    MQTT_PASSWORD : process.env.MQTT_PASSWORD || 'public',
    DB_URL : process.env.DB_URL || '127.0.0.0'
};
