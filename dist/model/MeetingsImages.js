import { model, Schema } from 'mongoose';
const MeetingSchema = new Schema({
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
export const MeetingImage = model('MeetingImage', MeetingSchema);
