import { model, Schema } from 'mongoose';
const MakrinetImageSchema = new Schema({
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
export const MakrinetImage = model('MakrinetImage', MakrinetImageSchema);
