import Bull from 'bull';
import { EmailJobData, UploadJobData } from '../interfaces/job.interface';
import { config } from '../utils/envConfig';


const emailQueue = new Bull<EmailJobData>('emailQueue', {
  redis: {
    host: config.REDIS_HOST,
    port: parseInt(config.REDIS_PORT, 10),
  },
});

const uploadQueue = new Bull<UploadJobData>('uploadQueue', {
  redis: {
    host: config.REDIS_HOST,
    port: parseInt(config.REDIS_PORT, 10),
  },
});

export { emailQueue, uploadQueue };
