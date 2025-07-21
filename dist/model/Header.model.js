import { model, Schema } from 'mongoose';
export const HeaderSchema = new Schema({
    home_en: {
        type: String,
    },
    home_ge: {
        type: String,
    },
    aboutUs_en: {
        type: String,
    },
    aboutUs_ge: {
        type: String,
    },
    rooms_en: {
        type: String,
    },
    rooms_ge: {
        type: String,
    },
    services_en: {
        type: String,
    },
    services_ge: {
        type: String,
    },
    experiences_en: {
        type: String,
    },
    experiences_ge: {
        type: String,
    },
    barsRestaurant_en: {
        type: String,
    },
    barsRestaurant_ge: {
        type: String,
    },
    meetingEvents_en: {
        type: String,
    },
    meetingEvents_ge: {
        type: String,
    },
    spaWellness_en: {
        type: String,
    },
    spaWellness_ge: {
        type: String,
    },
    kids_en: {
        type: String,
    },
    kids_ge: {
        type: String,
    },
    wine_en: {
        type: String,
    },
    wine_ge: {
        type: String,
    },
    agro_en: {
        type: String,
    },
    agro_ge: {
        type: String,
    },
    contact_en: {
        type: String,
    },
    contact_ge: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
});
export const Header = model('Header', HeaderSchema);
