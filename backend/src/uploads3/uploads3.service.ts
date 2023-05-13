import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3'
@Injectable()
export class Uploads3Service {
  async upload2() {
    const region = 'ap-northeast-2'; // 서울
    const accessKeyId = ''; // IAM에서 생성한 사용자의 accessKeyId
    const secretAccessKey = ''; // IAM에서 생성한 사용자의 secretAccessKey

    const s3 = new AWS.S3({
      region,
      accessKeyId,
      secretAccessKey,
    })

    const upload = multer({
      storage: multerS3({
        s3,
        bucket:'',
        key: (req, file, callback) => {
          const key = file.filename;
          callback(null, key)
        },
        acl: 'public-read'
      })
      
    })

    return upload;

  }

  async upload(file) {
    //const demomp3 = new FileSystem('/Users/seokwon/Documents/SKYCC/backend/mp3/demomp3.m4a');
    //console.log(demomp3);
    const albumBucketName = ''; // S3의 버킷 이름
    const region = 'ap-northeast-2'; // 서울
    const accessKeyId = ''; // IAM에서 생성한 사용자의 accessKeyId
    const secretAccessKey = ''; // IAM에서 생성한 사용자의 secretAccessKey

    AWS.config.update({
      region,
      accessKeyId,
      secretAccessKey,
    });
    var base64data = new Buffer(file, 'binary');

    //let base64data = Buffer.from(file ,'binary'); 
    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: albumBucketName,
        Key: file.name,
        Body: base64data,
        ACL: 'public-read',
      },
    });

    const promise = upload.promise();

    promise.then(
      function (data) {
        console.log('Successfully uploaded photo.');
      },
      function (err) {
        return console.log(
          'There was an error uploading your photo: ',
          err.message,
        );
      },
    );
  }
}
