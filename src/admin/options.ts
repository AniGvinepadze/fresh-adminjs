import { AdminJSOptions, ResourceOptions } from 'adminjs';
import { Category } from '../model/Category.model.js';
import { Post } from '../model/Post.model.js';
import uploadFeature from '@adminjs/upload';
import componentLoader from './component-loader.js';
import { Home } from '../model/Home.model.js';

const categoryResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const PostResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};

const HomeResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const options: AdminJSOptions = {
  rootPath: '/admin',
  componentLoader,
  resources: [
    {
      resource: Category,
      options: categoryResourceOptions,
      features: [
        uploadFeature({
          componentLoader,
          provider: {
            aws: {
              bucket: process.env.AWS_S3_BUCKET!,
              region: process.env.AWS_REGION!,
              accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
            },
          },
          properties: {
            key: 'imageUrl',
            file: 'uploadImage',
            mimeType: 'mimeType',
            bucket: 'bucket',
            size: 'size',
            filename: 'filename',
          },
          uploadPath: (record, filename) => `images/${record.id()}/${filename}`,
        }),
      ],
    },
    {
      resource: Post,
      options: PostResourceOptions,
      features: [
        uploadFeature({
          componentLoader,
          provider: {
            aws: {
              bucket: process.env.AWS_S3_BUCKET!,
              region: process.env.AWS_REGION!,
              accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
            },
          },
          properties: {
            key: 'imageUrl',
            file: 'uploadImage',
            mimeType: 'mimeType',
            bucket: 'bucket',
            size: 'size',
            filename: 'filename',
          },
          uploadPath: (record, mimeType) => `posts/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: Home,
      options: HomeResourceOptions,
      features: [
        uploadFeature({
          componentLoader,
          provider: {
            aws: {
              bucket: process.env.AWS_S3_BUCKET!,
              region: process.env.AWS_REGION!,
              accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
              secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
            },
          },
          properties: {
            key: 'imageUrl',
            file: 'uploadImage',
            mimeType: 'mimeType',
            bucket: 'bucket',
            size: 'size',
            filename: 'filename',
          },
          uploadPath: (record, mimeType) => `posts/${record.id()}.${mimeType}`,
        }),
      ],
    },
  ],
};

export default options;
