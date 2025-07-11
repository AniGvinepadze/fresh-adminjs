import { model, Schema } from 'mongoose';
const HomeSchema = new Schema({
    home_pabellon_section_description_en: {
        type: String,
    },
    home_pabellon_section_description_ge: {
        type: String,
    },
    home_pabellon_section_little_description_en: {
        type: String,
    },
    home_pabellon_section_little_description_ge: {
        type: String,
    },
    home_rooms_section_title_en: {
        type: String,
    },
    home_rooms_section_title_ge: {
        type: String,
    },
    home_rooms_section_description_en: {
        type: String,
    },
    home_rooms_section_description_ge: {
        type: String,
    },
    home_rooms_section_little_description_en: {
        type: String,
    },
    home_rooms_section_little_description_ge: {
        type: String,
    },
    home_big_description_en: {
        type: String,
    },
    home_big_description_ge: {
        type: String,
    },
    home_contact_section_title_en: {
        type: String,
    },
    home_contact_section_title_ge: {
        type: String,
    },
    home_contact_section_getInTouch_en: {
        type: String,
    },
    home_contact_section_getInTouch_ge: {
        type: String,
    },
    home_contact_section_about_team_en: {
        type: String,
    },
    home_contact_section_about_team_ge: {
        type: String,
    },
    home_contact_section_email: {
        type: String,
    },
    home_contact_section_phone: {
        type: String,
    },
    hero_imageUrl: {
        type: String
    },
    pabellon_imageUrl: {
        type: String
    },
});
export const Home = model('Home', HomeSchema);
