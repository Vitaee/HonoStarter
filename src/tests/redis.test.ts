import Redis from 'ioredis';
import { config } from '../utils/envConfig';


const redis = new Redis({
  port: parseInt(config.REDIS_PORT),          
  host: config.REDIS_HOST,   
  password: config.REDIS_PASSWORD,  
});

const testConnection = async () => {
  try {
    await redis.ping();
    console.log('Connected to Redis successfully');

    await redis.set('test-key', 'Hello, Redis!');
    const value = await redis.get('test-key');
    console.log('Retrieved value from Redis:', value);

    // Disconnect
    redis.disconnect();
  } catch (error) {
    console.error('Failed to connect to Redis:', error);
  }
};

testConnection();