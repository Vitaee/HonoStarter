export interface EmailJobData {
    to: string;
    subject: string;
    body: string;
}
  
export interface UploadJobData {
    buffer: Buffer;
    key: string;
    contentType: string;
}