const multer = require('multer');
const path = require('path');
const crypto = require('crypto');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
require('dotenv').config();

const storeTypes = {
  local: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },

    filename: (request, file, callback) => {
      crypto.randomBytes(2, (error, hash) => {
        if (error) callback(error);

        const date = new Date().toJSON().slice(0, 10);

        file.key = `${date}-${hash.toString('hex')}-${file.originalname}`;

        callback(null, file.key);
      });
    }
  }),

  s3: multerS3({
    s3: new aws.S3(),
    bucket: 'upload-sampi',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (request, file, callback) => {
      crypto.randomBytes(2, (error, hash) => {
        if (error) callback(error);

        const date = new Date().toJSON().slice(0, 10);

        const fileName = `${date}-${hash.toString('hex')}-${file.originalname}`;

        callback(null, fileName);
      });
    }
  })
}

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storeTypes['s3'],
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  FileFilter: (request, file, callback) => {
    const allowedMimes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
    ];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Invalid file type.'));
    }
  },
};
