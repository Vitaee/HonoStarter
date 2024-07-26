import { uploadQueue } from '../jobs/queues';
import { Worker, Job } from 'bullmq';
import { config } from '../utils/envConfig';


const redisConfig = {
    host: config.REDIS_HOST,
    port: parseInt(config.REDIS_PORT),
    password: config.REDIS_PASSWORD,
};  

const buffer = Buffer.from('This is a test file content', 'utf-8');

const testUpload = {
  buffer: buffer,
  key: 'testFile.txt',
  contentType: 'text/plain'
};

const addTestJob = async () => {
  await uploadQueue.add('uploadQueue', testUpload);
};

const testWorker = new Worker('uploadQueue', async (job: Job) => {
    console.log(`Processing test job ${job.id} with data:`, job.data);

    if (job.data.buffer && job.data.key === 'testFile.txt') {
      console.log('Test file upload job executed successfully');
    }

  }, {
    connection: redisConfig,
});
  
addTestJob().then(() => {
    console.log('Test job added to the queue');
});

testWorker.on('completed', (job) => {
    console.log(`Test job ${job.id} has been completed`);
    process.exit(0); 
});

testWorker.on('failed', (job, err) => {
    console.log(`Test job ${job!.id} has failed with error: ${err.message}`);
    process.exit(1); 
});
