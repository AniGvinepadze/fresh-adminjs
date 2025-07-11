import { model, Schema } from 'mongoose';
const AgroSchema = new Schema({
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
export const AgroImages = model('AgroImages', AgroSchema);
