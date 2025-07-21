import { model, Schema } from 'mongoose';
export const FooterSchema = new Schema({
    contactUs_en: {
        type: String,
    },
    contactUs_ge: {
        type: String,
    },
    email_en: {
        type: String,
    },
    email_ge: {
        type: String,
    },
    phone_en: {
        type: String,
    },
    phone_ge: {
        type: String,
    },
    rooms_en: {
        type: String,
    },
    rooms_ge: {
        type: String,
    },
    home_en: {
        type: String,
    },
    home_ge: {
        type: String,
    },
    services_en: {
        type: String,
    },
    services_ge: {
        type: String,
    },
    restaurant_en: {
        type: String,
    },
    restaurant_ge: {
        type: String,
    },
    faqs_en: {
        type: String,
    },
    faqs_ge: {
        type: String,
    },
    instagram_en: {
        type: String,
    },
    instagram_ge: {
        type: String,
    },
    facebook_en: {
        type: String,
    },
    facebook_ge: {
        type: String,
    },
    linkedIn_en: {
        type: String,
    },
    linkedIn_ge: {
        type: String,
    },
});
export const Footer = model('Footer', FooterSchema);
