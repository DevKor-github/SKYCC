import { Injectable } from '@nestjs/common';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import * as AWS from 'aws-sdk';

@Injectable()
export class Gets3Service {
  

  async gets3() {
    const albumBucketName = process.env.AWS_BUCKET_NAME; // S3의 버킷 이름
    const region = process.env.AWS_REGION; // 서울
    const accessKeyId = process.env.AWS_ACCESS_KEY; // IAM에서 생성한 사용자의 accessKeyId
    const secretAccessKey = process.env.AWS_SECRET_KEY; // IAM에서 생성한 사용자의 secretAccessKey
    const client = new S3Client({
      region,
      credentials: {
        secretAccessKey,
        accessKeyId
      },
    });

    AWS.config.update({
      region,
      accessKeyId,
      secretAccessKey,
    });

    const s3 = new AWS.S3();
    const command = new GetObjectCommand({
      Bucket: albumBucketName,
      Key: 'test-2.json',
    });

    try {
      const response = await client.send(command);
      // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
      const str = await response.Body.transformToString();
      console.log(str);
    } catch (err) {
      console.error(err);
    }
  }
}
