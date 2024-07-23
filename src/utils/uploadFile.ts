import {PutObjectCommand, S3Client} from '@aws-sdk/client-s3';
import { UploadJobData } from '../interfaces/job.interface';
import { config } from './envConfig';

const { AWS_REGION, AWS_ACCESS_KEY, AWS_SECRET_KEY, AWS_BUCKET_NAME } = config;

const s3Client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
  },
});


export { s3Client };  

const uploadFileToS3 = async (data: UploadJobData) => {
    const fileStream = Buffer.from(data.buffer);

    const uploadParams = {
      Bucket: AWS_BUCKET_NAME,
      Body: fileStream,
      Key: data.key,
      ContentType: data.contentType,
    };

    await s3Client.send(new PutObjectCommand(uploadParams));

    const theFile = `https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${data.key}`;

    return theFile;
}
  
export { uploadFileToS3 };
  