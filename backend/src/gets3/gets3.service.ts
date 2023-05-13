import { Injectable } from '@nestjs/common';
import {
  GetObjectCommand,
  S3Client,
  ListObjectsV2Command,
} from '@aws-sdk/client-s3';
import * as AWS from 'aws-sdk';

@Injectable()
export class Gets3Service {
  async gets3(key: string) {
    const albumBucketName = process.env.AWS_BUCKET_NAME; // S3의 버킷 이름
    const region = process.env.AWS_REGION; // 서울
    const accessKeyId = process.env.AWS_ACCESS_KEY; // IAM에서 생성한 사용자의 accessKeyId
    const secretAccessKey = process.env.AWS_SECRET_KEY; // IAM에서 생성한 사용자의 secretAccessKey
    const client = new S3Client({
      region,
      credentials: {
        secretAccessKey,
        accessKeyId,
      },
    });

    AWS.config.update({
      region,
      accessKeyId,
      secretAccessKey,
    });

    const listCom = new ListObjectsV2Command({
      Bucket: albumBucketName,
      MaxKeys: 1000,
    });

    while (true) {
      const response = await client.send(listCom);
      const contents = response.Contents;

      let flag = false;
      contents.forEach((content) => {
        if (content.Key === key) flag = true;
      });
      if (flag) break;
    }

    const command = new GetObjectCommand({
      Bucket: albumBucketName,
      Key: key,
    });

    try {
      const response = await client.send(command);

      const str = await response.Body.transformToString();
      return JSON.parse(str).results.transcripts[0].transcript;
    } catch (err) {
      console.error(err);
    }
  }
}
