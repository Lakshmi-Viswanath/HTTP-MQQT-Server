import Redis from 'ioredis';
import serverConfig from './serverConfig';

const redisConfig = {
    host: serverConfig.REDIS_HOST,
    port: serverConfig.REDIS_PORT,
    username: serverConfig.REDIS_USERNAME,
    password: serverConfig.REDIS_PASSWORD
  };

const redisConnection = new Redis(redisConfig);

export default redisConnection;