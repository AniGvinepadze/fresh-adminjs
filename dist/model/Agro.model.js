import { model, Schema } from 'mongoose';
export const AgroSchema = new Schema({
    agro_section_little_description_en: {
        type: String,
    },
    agro_section_little_description_ge: {
        type: String,
    },
    agro_section_description_en: {
        type: String,
    },
    agro_section_description_ge: {
        type: String,
    },
    our_mission_title_en: {
        type: String,
    },
    our_mission_title_ge: {
        type: String,
    },
    our_mission_description_en: {
        type: String,
    },
    our_mission_description_ge: {
        type: String,
    },
    culinary_description_en: {
        type: String,
    },
    culinary_description_ge: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    walnut_imageUrl: {
        type: String,
    },
});
export const Agro = model('Agro', AgroSchema);
