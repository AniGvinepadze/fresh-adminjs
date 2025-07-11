import { model, Schema } from 'mongoose';
const RoomsInfoSchema = new Schema({
    imageUrl: {
        type: String,
    },
    rooms_title_en: {
        type: String,
    },
    rooms_title_ge: {
        type: String,
    },
    rooms_description_en: {
        type: String,
    },
    rooms_description_ge: {
        type: String,
    },
    rooms_people_quantity: {
        type: Number,
    },
    rooms_bed_quantity: {
        type: Number,
    },
    rooms_area: {
        type: Number,
    },
    rooms_sofa: {
        type: Number,
    },
    rooms_bath: {
        type: Number,
    },
});
export const HomeRooms = model('HomeRooms', RoomsInfoSchema);
