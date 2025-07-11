import { model, Schema } from 'mongoose';
export const ContactSchema = new Schema({
    experience_title_en: {
        type: String,
    },
    experience_title_ge: {
        type: String,
    },
    experience_description_en: {
        type: String,
    },
    experience_description_ge: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
});
export const Contact = model('Contact', ContactSchema);
