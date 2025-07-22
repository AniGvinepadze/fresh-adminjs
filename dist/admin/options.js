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
import { Wine } from '../model/wine.model.js';
import { HomeRooms } from '../model/HomeRooms.model.js';
import { KidsEntertainmentImage } from '../model/KidsEntertainmentImages.model.js';
import { MakrinetImage } from '../model/MakrineImages.model.js';
import { MeetingImage } from '../model/MeetingsImages.js';
import { AgroImages } from '../model/AgroImages.model.js';
import { Further } from '../model/FurtherQuestion.model.js';
import { Header } from '../model/Header.model.js';
import { BookHome } from '../model/BookHome.model.js';
import { BookMakrine } from '../model/BookMakrine.model.js';
import { BookServices } from '../model/BookServices.model.js';
import { SearchRooms } from '../model/SearchRooms.model.js';
import { Footer } from '../model/Footer.model.js';
const categoryResourceOptions = {
    properties: {
        imageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const PostResourceOptions = {
    properties: {
        imageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const FurtherResourceOptions = {
    properties: {
        imageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const HomeResourceOptions = {
    properties: {
        hero_imageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        pabellon_imageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const AboutUsResourceOptions = {
    properties: {
        iliaImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        artWorkImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const AgroResourceOptions = {
    properties: {
        imageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        walnut_imageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const ServiceResourceOptions = {
    properties: {
        restaurantImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        barImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        meetingsAndEventsImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        wellnessAndFitnessImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        kidsEntertainmentImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        artImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const RestaurantBarResourceOptions = {
    properties: {
        logoImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        mainImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        makrineRestaurantImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        restaurantBarImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        lobbyImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        poolImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        menuImageUrl_en: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        menuImageUrl_ge: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        menuImageUrlSecondPart_en: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        menuImageUrlSecondPart_ge: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        menuLogoImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const kidsEntertainmentResourceOptions = {
    properties: {
        logoImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        poolImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        mainImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        makrineRestaurantImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        restaurantBarImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        lobbyImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const meetingsEventsResourceOptions = {
    properties: {
        conferenceImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        artWorkImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        conferenceRoomsImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const SpaWellnesResourceOptions = {
    properties: {
        firstSpaImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        secondSpaImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        thirdSpaImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        firstPoolImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        secondPoolImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        thirdPoolImageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        menuImgUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const BlogsEventsResourceOptions = {
    properties: {
        imageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const ContactsResourceOptions = {
    properties: {
        imageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const RoomsResourceOptions = {
    properties: {
        imageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const WineEventsResourceOptions = {
    properties: {
        winePageImageFirst: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        winePageImageSecond: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const HomeRoomsResourceOptions = {
    properties: {
        imageUrl: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
    },
};
const KidsEntertainmentImagesResourceOptions = {
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
const MakrineImagesResourceOptions = {
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
const MeeitngImagesResourceOptions = {
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
const AgroImagesResourceOptions = {
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
const options = {
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
            resource: Further,
            options: FurtherResourceOptions,
            features: [
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'iliaImageUrl',
                        file: 'uploadImageIlia',
                        mimeType: 'mimeTypeIlia',
                        bucket: 'bucketIlia',
                        size: 'sizeIlia',
                        filename: 'filenameIlia',
                        filePath: 'filePathIlia',
                        filesToDelete: 'filesToDeleteIlia',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'artWorkImageUrl',
                        file: 'uploadImageArtWork',
                        mimeType: 'mimeTypeArtWork',
                        bucket: 'bucketArtWork',
                        size: 'sizeArtWork',
                        filename: 'filenameArtWork',
                        filePath: 'filePathArtWork',
                        filesToDelete: 'filesToDeleteArtWork',
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'imageUrl',
                        file: 'uploadImage',
                        mimeType: 'mimeType',
                        bucket: 'bucket',
                        size: 'size',
                        filename: 'filename',
                        filePath: 'filePath',
                        filesToDelete: 'filesToDelete',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/image.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'agroImageUrl',
                        file: 'uploadImageAgro',
                        mimeType: 'mimeTypeAgro',
                        bucket: 'bucketAgro',
                        size: 'sizeAgro',
                        filename: 'filenameAgro',
                        filePath: 'AgroPath',
                        filesToDelete: 'AgroDelete',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/agro.${mimeType}`,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'restaurantImageUrl',
                        file: 'uploadImageRestaurant',
                        mimeType: 'mimeTypeRestaurant',
                        bucket: 'bucketRestaurant',
                        size: 'sizeRestaurant',
                        filename: 'filenameRestaurant',
                        filePath: 'filePathRestaurant',
                        filesToDelete: 'filesToDeleteRestaurant',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/restaurant.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'barImageUrl',
                        file: 'uploadImageBar',
                        mimeType: 'mimeTypeBar',
                        bucket: 'bucketBar',
                        size: 'sizeBar',
                        filename: 'filenameBar',
                        filePath: 'filePathBar',
                        filesToDelete: 'filesToDeleteBar',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/bar.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'meetingsAndEventsImageUrl',
                        file: 'uploadImageMeetingsAndEvents',
                        mimeType: 'mimeTypeMeetingsAndEvents',
                        bucket: 'bucketMeetingsAndEvents',
                        size: 'sizeMeetingsAndEvents',
                        filename: 'filenameMeetingsAndEvents',
                        filePath: 'filePathMeetingsAndEvents',
                        filesToDelete: 'filesToDeletemeetingsAndEvents',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/meetingsAndEvents.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'wellnessAndFitnessImageUrl',
                        file: 'uploadImageWellnessAndFitness',
                        mimeType: 'mimeTypeWellnessAndFitness',
                        bucket: 'bucketWellnessAndFitness',
                        size: 'sizeWellnessAndFitness',
                        filename: 'filenameWellnessAndFitness',
                        filePath: 'filePathWellnessAndFitness',
                        filesToDelete: 'filesToDeleteWellnessAndFitness',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/WellnessAndFitness.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'kidsEntertainmentImageUrl',
                        file: 'uploadImageKidsEntertainmentImageUrl',
                        mimeType: 'mimeTypeKidsEntertainmentImageUrl',
                        bucket: 'bucketKidsEntertainmentImageUrl',
                        size: 'sizeKidsEntertainmentImageUrl',
                        filename: 'filenameKidsEntertainmentImageUrl',
                        filePath: 'filePathKidsEntertainmentImageUrl',
                        filesToDelete: 'filesToDeleteKidsEntertainmentImageUrl',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/kidsEntertainmentImageUrl.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'artImageUrl',
                        file: 'uploadImageArt',
                        mimeType: 'mimeTypeArt',
                        bucket: 'bucketArt',
                        size: 'sizeArt',
                        filename: 'filenameArt',
                        filePath: 'filePathArt',
                        filesToDelete: 'filesToDeleteArt',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/art.${mimeType}`,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'logoImageUrl',
                        file: 'uploadImagelogo',
                        mimeType: 'mimeTypelogo',
                        bucket: 'bucketlogo',
                        size: 'sizelogo',
                        filename: 'filenamelogo',
                        filePath: 'filePathlogo',
                        filesToDelete: 'filesToDeletelogo',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/logo.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'restaurantBarImageUrl',
                        file: 'uploadImagerestaurantBar',
                        mimeType: 'mimeTyperestaurantBar',
                        bucket: 'bucketrestaurantBar',
                        size: 'sizerestaurantBar',
                        filename: 'filenamerestaurantBar',
                        filePath: 'filePathrestaurantBar',
                        filesToDelete: 'filesToDeleterestaurantBar',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/restaurantBar.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'lobbyImageUrl',
                        file: 'uploadImagelobby',
                        mimeType: 'mimeTypelobby',
                        bucket: 'bucketlobby',
                        size: 'sizelobby',
                        filename: 'filenamelobby',
                        filePath: 'filePathlobby',
                        filesToDelete: 'filesToDeletelobby',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/lobby.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'poolImageUrl',
                        file: 'uploadImagepool',
                        mimeType: 'mimeTypepool',
                        bucket: 'bucketpool',
                        size: 'sizepool',
                        filename: 'filenamepool',
                        filePath: 'filePathpool',
                        filesToDelete: 'filesToDeletepool',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/pool.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'mainImageUrl',
                        file: 'uploadImagemain',
                        mimeType: 'mimeTypemain',
                        bucket: 'bucketmain',
                        size: 'sizemain',
                        filename: 'filenamemain',
                        filePath: 'filePathmain',
                        filesToDelete: 'filesToDeletemain',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/main.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'makrineRestaurantImageUrl',
                        file: 'uploadImagemakrineRestaurant',
                        mimeType: 'mimeTypemakrineRestaurant',
                        bucket: 'bucketmakrineRestaurant',
                        size: 'sizemakrineRestaurant',
                        filename: 'filenamemakrineRestaurant',
                        filePath: 'filePathmakrineRestaurant',
                        filesToDelete: 'filesToDeletemakrineRestaurant',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/makrineRestaurant.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'menuImageUrl_en',
                        file: 'uploadImagemenuImageUrl_en',
                        mimeType: 'mimeTypemenuImageUrl_en',
                        bucket: 'bucketmenuImageUrl_en',
                        size: 'sizemenuImageUrl_en',
                        filename: 'filenamemenuImageUrl_en',
                        filePath: 'filePathmenuImageUrl_en',
                        filesToDelete: 'filesToDeletemenuImageUrl_en',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/menuImageUrl_en.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'menuImageUrl_ge',
                        file: 'uploadImagemenuImageUrl_ge',
                        mimeType: 'mimeTypemenuImageUrl_ge',
                        bucket: 'bucketmenuImageUrl_ge',
                        size: 'sizemenuImageUrl_ge',
                        filename: 'filenamemenuImageUrl_ge',
                        filePath: 'filePathmenuImageUrl_ge',
                        filesToDelete: 'filesToDeletemenuImageUrl_ge',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/menuImageUrl_ge.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'menuImageUrlSecondPart_en',
                        file: 'uploadImagemenuImageUrlSecondPart_en',
                        mimeType: 'mimeTypemenuImageUrlSecondPart_en',
                        bucket: 'bucketmenuImageUrlSecondPart_en',
                        size: 'sizemenuImageUrlSecondPart_en',
                        filename: 'filenamemenuImageUrlSecondPart_en',
                        filePath: 'filePathmenuImageUrlSecondPart_en',
                        filesToDelete: 'filesToDeletemenuImageUrlSecondPart_en',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/  menuImageUrlSecondPart_en.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'menuImageUrlSecondPart_ge',
                        file: 'uploadImagemenuImageUrlSecondPart_ge',
                        mimeType: 'mimeTypemenuImageUrlSecondPart_ge',
                        bucket: 'bucketmenuImageUrlSecondPart_ge',
                        size: 'sizemenuImageUrlSecondPart_ge',
                        filename: 'filenamemenuImageUrlSecondPart_ge',
                        filePath: 'filePathmenuImageUrlSecondPart_ge',
                        filesToDelete: 'filesToDeletemenuImageUrlSecondPart_ge',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/menuImageUrlSecondPart_ge.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'menuLogoImageUrl',
                        file: 'uploadImagemenuLogoImageUrl',
                        mimeType: 'mimeTypemenuLogoImageUrl',
                        bucket: 'bucketmenuLogoImageUrl',
                        size: 'sizemenuLogoImageUrl',
                        filename: 'filenamemenuLogoImageUrl',
                        filePath: 'filePathmenuLogoImageUrl',
                        filesToDelete: 'filesToDeletemenuLogoImageUrl',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/menuLogoImageUrl.${mimeType}`,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'conferenceImageUrl',
                        file: 'uploadImageConference',
                        mimeType: 'mimeTypeConference',
                        bucket: 'bucketConference',
                        size: 'sizeConference',
                        filename: 'filenameConference',
                        filePath: 'conferenceImagePath ',
                        filesToDelete: 'conferenceImageDelete',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/conference.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'artWorkImageUrl',
                        file: 'uploadImageArtWork',
                        mimeType: 'mimeTypeArtWork',
                        bucket: 'bucketArtWork',
                        size: 'sizeArtWork',
                        filename: 'filenameArtWork',
                        filePath: 'artWorkImagePath',
                        filesToDelete: 'artWorkImageImageDelete',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/arwork.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'conferenceRoomsImageUrl',
                        file: 'uploadImageConferenceRooms',
                        mimeType: 'mimeTypeConferenceRooms',
                        bucket: 'bucketConferenceRooms',
                        size: 'sizeConferenceRooms',
                        filename: 'filenameConferenceRooms',
                        filePath: 'ImagePathConferenceRooms',
                        filesToDelete: 'ImageDeleteConferenceRooms',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/conferenceRooms.${mimeType}`,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'firstSpaImageUrl',
                        file: 'uploadImagefirstSpa',
                        mimeType: 'mimeTypefirstSpa',
                        bucket: 'bucketfirstSpa',
                        size: 'sizefirstSpa',
                        filename: 'filenamefirstSpa',
                        filePath: 'ImagePath firstSpa',
                        filesToDelete: 'ImageDeletefilenamefirstSpa',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/firstSpa.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'secondSpaImageUrl',
                        file: 'uploadImagesecondSpa',
                        mimeType: 'mimeTypesecondSpa',
                        bucket: 'bucketsecondSpa',
                        size: 'sizesecondSpa',
                        filename: 'filenamesecondSpa',
                        filePath: 'ImagePath secondSpa',
                        filesToDelete: 'ImageDeletefilenamesecondSpa',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/secondSpa.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'thirdSpaImageUrl',
                        file: 'uploadImagethirdSpa',
                        mimeType: 'mimeTypethirdSpa',
                        bucket: 'bucketthirdSpa',
                        size: 'sizethirdSpa',
                        filename: 'filenamethirdSpa',
                        filePath: 'ImagePath thirdSpa',
                        filesToDelete: 'ImageDeletefilenamethirdSpa',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/thirdSpa.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'firstPoolImageUrl',
                        file: 'uploadImagefirstPool',
                        mimeType: 'mimeTypefirstPool',
                        bucket: 'bucketfirstPool',
                        size: 'sizefirstPool',
                        filename: 'filenamefirstPool',
                        filePath: 'ImagePath firstPool',
                        filesToDelete: 'ImageDeletefilenamefirstPool',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/firstPool.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'secondPoolImageUrl',
                        file: 'uploadImagesecondPool',
                        mimeType: 'mimeTypesecondPool',
                        bucket: 'bucketsecondPool',
                        size: 'sizesecondPool',
                        filename: 'filenamesecondPool',
                        filePath: 'ImagePath secondPool',
                        filesToDelete: 'ImageDeletefilenamesecondPool',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/secondPool.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'thirdPoolImageUrl',
                        file: 'uploadImagethirdPool',
                        mimeType: 'mimeTypethirdPool',
                        bucket: 'bucketthirdPool',
                        size: 'sizethirdPool',
                        filename: 'filenamethirdPool',
                        filePath: 'ImagePath thirdPool',
                        filesToDelete: 'ImageDeletefilenamethirdPool',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/thirdPool.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'menuImgUrl',
                        file: 'uploadImagemenu',
                        mimeType: 'mimeTypemenu',
                        bucket: 'bucketmenu',
                        size: 'sizemenu',
                        filename: 'filenamemenu',
                        filePath: 'ImagePath menu',
                        filesToDelete: 'ImageDeletefilenamemenu',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}/menu.${mimeType}`,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'winePageImageFirst',
                        file: 'uploadImageWineFirst',
                        mimeType: 'mimeUploadImageWineFirst',
                        bucket: 'bucketWine',
                        size: 'sizeWine',
                        filename: 'filenameWine',
                        filePath: 'filePathWine',
                        filesToDelete: 'filesToDeleteWine',
                    },
                    uploadPath: (record, mimeType) => `images/${record.id()}.${mimeType}`,
                }),
                uploadFeature({
                    componentLoader,
                    provider: {
                        aws: {
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                        },
                    },
                    properties: {
                        key: 'winePageImageSecond',
                        file: 'uploadImageWineSecond',
                        mimeType: 'mimeUploadImageWineSecond',
                        bucket: 'bucketWineSecond',
                        size: 'sizeWineSecond',
                        filename: 'filenameWineSecond',
                        filePath: 'filePathWineSecond',
                        filesToDelete: 'filesToDeleteWineSecond',
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
                            bucket: process.env.AWS_S3_BUCKET,
                            region: process.env.AWS_REGION,
                            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
        { resource: Header },
        { resource: BookHome },
        { resource: BookMakrine },
        { resource: BookServices },
        { resource: SearchRooms },
        { resource: Footer },
    ],
};
export default options;
