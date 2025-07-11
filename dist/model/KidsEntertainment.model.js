import { model, Schema } from 'mongoose';
export const KidsEntertainmentSchema = new Schema({
    kids_entertainment_title_en: {
        type: String,
    },
    kids_entertainment_title_ge: {
        type: String,
    },
    kids_entertainment_section_little_description_en: {
        type: String,
    },
    kids_entertainment_section_little_description_ge: {
        type: String,
    },
    kids_entertainment_section_description_en: {
        type: String,
    },
    kids_entertainment_section_description_ge: {
        type: String,
    },
    kids_entertainment_play_area_en: {
        type: String,
    },
    kids_entertainment_play_area_ge: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
});
export const KidsEntertainment = model('KidsEntertainment', KidsEntertainmentSchema);
