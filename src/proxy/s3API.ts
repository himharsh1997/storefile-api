import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { AppConfig } from '@config';
import { createReadStream } from 'fs';

export class S3API {
  private client: S3Client;
  constructor() {
    this.client = new S3Client({
      region: 'ap-south-1',
      credentials: {
        accessKeyId: AppConfig.AWS_ACCESS_KEY_ID,
        secretAccessKey: AppConfig.AWS_SECRET_KEY
      }
    });
  }

  async uploadFile(fileName: string): Promise<string> {
    const fileStream = createReadStream(`${fileName}`);
    const bucketName = 'storefile-api-dev';
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: fileStream
    });
    await this.client.send(command);
    return `https://${bucketName}.s3.ap-south-1.amazonaws.com/${fileName}`;
  }
}