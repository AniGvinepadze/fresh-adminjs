import { AdminJSOptions, ResourceOptions } from 'adminjs';
import { Category } from '../model/Category.model.js';
import { Post } from '../model/Post.model.js';
import uploadFeature from '@adminjs/upload';
import componentLoader from './component-loader.js';
import { Home } from '../model/Home.model.js';
import { AboutUs } from '../model/AbouUs.model.js';
import { Agro } from '../model/Agro.model.js';
import { RestaurantBar } from '../model/RestaurantBar.model.js';
import { Services } from '../model/Service.model.js';
import { KidsEntertainment } from '../model/KidsEntertainment.model.js';
import { MeetingsEvent } from '../model/MeetingEvent.model.js';
import { SpaWellness } from '../model/SpaWellnes.mode.js';
import { Blog } from '../model/Blog.model.js';

import { Contact } from '../model/Contact.model.js';
import { Rooms } from '../model/rooms.model.js';
import { Wine } from '../model/winee.model.js';
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
const AboutUsResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const AgroResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const ServiceResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const RestaurantBarResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const kidsEntertainmentResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const meetingsEventsResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const SpaWellnesResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const BlogsEventsResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const ContactsResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const RoomsResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const WineEventsResourceOptions: ResourceOptions = {
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: AboutUs,
      options: AboutUsResourceOptions,
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: Agro,
      options: AgroResourceOptions,
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: Services,
      options: ServiceResourceOptions,
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: RestaurantBar,
      options: RestaurantBarResourceOptions,
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: KidsEntertainment,
      options: kidsEntertainmentResourceOptions,
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: MeetingsEvent,
      options: meetingsEventsResourceOptions,
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: SpaWellness,
      options: SpaWellnesResourceOptions,
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: Blog,
      options: BlogsEventsResourceOptions,
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: Contact,
      options: ContactsResourceOptions,
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: Rooms,
      options: RoomsResourceOptions,
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
    {
      resource: Wine,
      options: WineEventsResourceOptions,
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
          uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
        }),
      ],
    },
  ],
};

export default options;
