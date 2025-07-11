import { model, Schema } from 'mongoose';
export const AboutUsSchema = new Schema({
    aboutus_title_en: {
        type: String,
    },
    aboutus_title_ge: {
        type: String,
    },
    aboutus_section_little_description_en: {
        type: String,
    },
    aboutus_section_little_description_ge: {
        type: String,
    },
    aboutus_section_description_en: {
        type: String,
    },
    aboutus_section_description_ge: {
        type: String,
    },
    aboutus_experience_overview_en: {
        type: String,
    },
    aboutus_experience_overview_ge: {
        type: String,
    },
    aboutus_facilities_and_services_en: {
        type: String,
    },
    aboutus_facilities_and_services_ge: {
        type: String,
    },
    aboutus_wine_collections_and_story_en: {
        type: String,
    },
    aboutus_wine_collections_and_story_ge: {
        type: String,
    },
    aboutus_historical_culture_heritage_en: {
        type: String,
    },
    aboutus_historical_culture_heritage_ge: {
        type: String,
    },
    aboutus_family_tradition_en: {
        type: String,
    },
    aboutus_family_tradition_ge: {
        type: String,
    },
    aboutus_farmToTable_experience_en: {
        type: String,
    },
    aboutus_farmToTable_experience_ge: {
        type: String,
    },
    iliaImageUrl: {
        type: String,
    },
    artWorkImageUrl: {
        type: String,
    },
});
export const AboutUs = model('AboutUs', AboutUsSchema);
