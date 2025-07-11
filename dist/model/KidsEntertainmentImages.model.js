import { model, Schema } from 'mongoose';
const KidsEntertainmentImageSchema = new Schema({
    imageUrl: {
        type: String,
    },
    secondImageUrl: {
        type: String,
    },
    thirdImageUrl: {
        type: String,
    },
    fourthImageUrl: {
        type: String,
    },
});
export const KidsEntertainmentImage = model('KidsEntertainmentImage', KidsEntertainmentImageSchema);
