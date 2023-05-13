import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class Uploads3Service {
  async upload(file) {
    const albumBucketName = process.env.AWS_BUCKET_NAME; // S3의 버킷 이름
    const region = process.env.AWS_REGION; // 서울
    const accessKeyId = process.env.AWS_ACCESS_KEY; // IAM에서 생성한 사용자의 accessKeyId
    const secretAccessKey = process.env.AWS_SECRET_KEY; // IAM에서 생성한 사용자의 secretAccessKey

    AWS.config.update({
      region,
      accessKeyId,
      secretAccessKey,
    });
    const fileuuid = uuidv4();
    const fileContent = file.buffer;
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: albumBucketName,
        Key: fileuuid + '.m4a',
        Body: fileContent,
        ContentType: file.mimeType,
        ContentEncoding: file.encoding,
        ACL: 'public-read',
      },
    });

    const data = await upload.promise();

    return data.Location;
  }
}
