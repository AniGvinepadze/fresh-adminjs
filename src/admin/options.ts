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
import { HomeRooms } from '../model/HomeRooms.model.js';
import { KidsEntertainmentImage } from '../model/KidsEntertainmentImages.model.js';
import { MakrinetImage } from '../model/MakrineImages.model.js';
import { MeetingImage } from '../model/MeetingsImages.js';
import { AgroImages } from '../model/AgroImages.model.js';



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
    hero_imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    pabellon_imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    // rooms_imageUrl: {
    //   isVisible: { list: true, filter: false, show: true, edit: true },
    // },
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
const HomeRoomsResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const KidsEntertainmentImagesResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    secondImageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    thirdImageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    fourthImageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const MakrineImagesResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    secondImageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    thirdImageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    fourthImageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};
const MeeitngImagesResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    secondImageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    thirdImageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    fourthImageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
  },
};

const AgroImagesResourceOptions: ResourceOptions = {
  properties: {
    imageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    secondImageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    thirdImageUrl: {
      isVisible: { list: true, filter: false, show: true, edit: false },
    },
    fourthImageUrl: {
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
            key: 'hero_imageUrl',
            file: 'uploadImageHero',
            mimeType: 'mimeTypeHero',
            bucket: 'bucketHero',
            size: 'sizeHero',
            filename: 'filenameHero',
            filePath: 'filePathHero',
            filesToDelete: 'filesToDeleteHero',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/hero.${mimeType}`,
        }),
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
            key: 'pabellon_imageUrl',
            file: 'uploadImagePabellon',
            mimeType: 'mimeTypePabellon',
            bucket: 'bucketPabellon',
            size: 'sizePabellon',
            filename: 'filenamePabellon',
            filePath: 'filePathPabellon',
            filesToDelete: 'filesToDeletePabellon',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/pabellon.${mimeType}`,
        }),
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
            key: 'rooms_imageUrl',
            file: 'uploadImageRooms',
            mimeType: 'mimeTypeRooms',
            bucket: 'bucketRooms',
            size: 'sizeRooms',
            filename: 'filenameRooms',
            filePath: 'filePathRooms',
            filesToDelete: 'filesToDeleteRooms',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/rooms_image.${mimeType}`,
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
    {
      resource: HomeRooms,
      options: HomeRoomsResourceOptions,
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
      resource: KidsEntertainmentImage,
      options: KidsEntertainmentImagesResourceOptions,
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
            filePath: 'firstImagePath',
            filesToDelete: 'firstImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/first.${mimeType}`,
        }),
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
            key: 'secondImageUrl',
            file: 'uploadImageSecond',
            mimeType: 'mimeTypeSecond',
            bucket: 'bucketSecond',
            size: 'sizeSecond',
            filename: 'filenameSecond',
            filePath: 'secondImagePath',
            filesToDelete: 'secondImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/second.${mimeType}`,
        }),
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
            key: 'thirdImageUrl',
            file: 'uploadImageThird',
            mimeType: 'mimeTypeThird',
            bucket: 'bucketThird',
            size: 'sizeThird',
            filename: 'filenameThird',
            filePath: 'thirdImagePath',
            filesToDelete: 'thirdImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/third.${mimeType}`,
        }),
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
            key: 'fourthImageUrl',
            file: 'uploadImageFourth',
            mimeType: 'mimeTypeFourth',
            bucket: 'bucketFourth',
            size: 'sizeFourth',
            filename: 'filenameFourth',
            filePath: 'fourthImagePath',
            filesToDelete: 'fourthImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/fourth.${mimeType}`,
        }),
      ],
    },
    {
      resource: MakrinetImage,
      options: MakrineImagesResourceOptions,
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
            filePath: 'firstImagePath',
            filesToDelete: 'firstImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/first.${mimeType}`,
        }),
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
            key: 'secondImageUrl',
            file: 'uploadImageSecond',
            mimeType: 'mimeTypeSecond',
            bucket: 'bucketSecond',
            size: 'sizeSecond',
            filename: 'filenameSecond',
            filePath: 'secondImagePath',
            filesToDelete: 'secondImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/second.${mimeType}`,
        }),
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
            key: 'thirdImageUrl',
            file: 'uploadImageThird',
            mimeType: 'mimeTypeThird',
            bucket: 'bucketThird',
            size: 'sizeThird',
            filename: 'filenameThird',
            filePath: 'thirdImagePath',
            filesToDelete: 'thirdImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/third.${mimeType}`,
        }),
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
            key: 'fourthImageUrl',
            file: 'uploadImageFourth',
            mimeType: 'mimeTypeFourth',
            bucket: 'bucketFourth',
            size: 'sizeFourth',
            filename: 'filenameFourth',
            filePath: 'fourthImagePath',
            filesToDelete: 'fourthImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/fourth.${mimeType}`,
        }),
      ],
    },
    {
      resource: MeetingImage,
      options: MeeitngImagesResourceOptions,
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
            filePath: 'firstImagePath',
            filesToDelete: 'firstImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/first.${mimeType}`,
        }),
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
            key: 'secondImageUrl',
            file: 'uploadImageSecond',
            mimeType: 'mimeTypeSecond',
            bucket: 'bucketSecond',
            size: 'sizeSecond',
            filename: 'filenameSecond',
            filePath: 'secondImagePath',
            filesToDelete: 'secondImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/second.${mimeType}`,
        }),
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
            key: 'thirdImageUrl',
            file: 'uploadImageThird',
            mimeType: 'mimeTypeThird',
            bucket: 'bucketThird',
            size: 'sizeThird',
            filename: 'filenameThird',
            filePath: 'thirdImagePath',
            filesToDelete: 'thirdImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/third.${mimeType}`,
        }),
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
            key: 'fourthImageUrl',
            file: 'uploadImageFourth',
            mimeType: 'mimeTypeFourth',
            bucket: 'bucketFourth',
            size: 'sizeFourth',
            filename: 'filenameFourth',
            filePath: 'fourthImagePath',
            filesToDelete: 'fourthImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/fourth.${mimeType}`,
        }),
      ],
    },
    {
      resource: AgroImages,
      options: AgroImagesResourceOptions,
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
            filePath: 'firstImagePath',
            filesToDelete: 'firstImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/first.${mimeType}`,
        }),
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
            key: 'secondImageUrl',
            file: 'uploadImageSecond',
            mimeType: 'mimeTypeSecond',
            bucket: 'bucketSecond',
            size: 'sizeSecond',
            filename: 'filenameSecond',
            filePath: 'secondImagePath',
            filesToDelete: 'secondImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/second.${mimeType}`,
        }),
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
            key: 'thirdImageUrl',
            file: 'uploadImageThird',
            mimeType: 'mimeTypeThird',
            bucket: 'bucketThird',
            size: 'sizeThird',
            filename: 'filenameThird',
            filePath: 'thirdImagePath',
            filesToDelete: 'thirdImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/third.${mimeType}`,
        }),
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
            key: 'fourthImageUrl',
            file: 'uploadImageFourth',
            mimeType: 'mimeTypeFourth',
            bucket: 'bucketFourth',
            size: 'sizeFourth',
            filename: 'filenameFourth',
            filePath: 'fourthImagePath',
            filesToDelete: 'fourthImageDelete',
          },
          uploadPath: (record, mimeType) => `images/${record.id()}/fourth.${mimeType}`,
        }),
      ],
    },
  ],
};

export default options;
