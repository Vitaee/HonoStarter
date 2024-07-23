import { emailQueue, uploadQueue } from './queues';
import { EmailJobData, UploadJobData } from '../interfaces/job.interface';
import { Job } from 'bull';


emailQueue.process(async (job: Job<EmailJobData>) => {
  console.log(`Processing email job with id: ${job.id}`);
  const data: EmailJobData = job.data;
  console.log(data);

  /* example
  const emailJobData: EmailJobData = {
    to: userData.email,
    subject: 'Welcome!',
    body: 'Thank you for signing up!',
  };

  // Add job to the email queue
  await emailQueue.add('sendWelcomeEmail', emailJobData);
  */

});

uploadQueue.process(async (job: Job<UploadJobData>) => {
  console.log(`Processing upload job with id: ${job.id}`);
  const data: UploadJobData = job.data;
  console.log(data);

  /* example
  cconst fileData = await c.req.formData();
  const buffer = await fileData.get('file').arrayBuffer();

  const uploadJobData: UploadJobData = {
    buffer: Buffer.from(buffer),
    key: 'your-file-key', // Replace with your logic to generate the key
    contentType: fileData.get('file').type,
  };

  // Add job to the upload queue
  await uploadQueue.add('uploadImage', uploadJobData);
  */

});