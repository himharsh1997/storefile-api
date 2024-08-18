import { S3API } from '../proxy/s3API';

export class FileBiz {

  async uploadFile(fileName: string): Promise<{url: string}> {
    try {
      const s3API = new S3API();
      const fileS3URI = await s3API.uploadFile(fileName);
      return {
        url: fileS3URI
      }
    } catch (error) {
      throw error;
    }
  }

  async getUserFiles(): Promise<unknown> {
    try {
      return [];
    } catch (error) {
      throw error;
    }
  }
}