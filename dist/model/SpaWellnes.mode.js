import { model, Schema } from 'mongoose';
export const SpaWellnessSchema = new Schema({
    our_facilities_en: {
        type: String,
    },
    our_facilities_ge: {
        type: String,
    },
    our_facilities_spa_en: {
        type: String,
    },
    our_facilities_spa_ge: {
        type: String,
    },
    our_facilities_heated_indoor_pool_en: {
        type: String,
    },
    our_facilities_heated_indoor_pool_ge: {
        type: String,
    },
    our_facilities_outdoor_pool_en: {
        type: String,
    },
    our_facilities_outdoor_pool_ge: {
        type: String,
    },
    our_facilities_gym_en: {
        type: String,
    },
    our_facilities_gym_ge: {
        type: String,
    },
    spa_and_wellness_title_en: {
        type: String,
    },
    spa_and_wellness_title_ge: {
        type: String,
    },
    spa_and_wellness_section_little_description_en: {
        type: String,
    },
    spa_and_wellness_section_little_description_ge: {
        type: String,
    },
    spa_and_wellness_section_description_en: {
        type: String,
    },
    spa_and_wellness_section_description_ge: {
        type: String,
    },
    spa_and_wellness_section_about_room_en: {
        type: String,
    },
    spa_and_wellness_section_about_room_ge: {
        type: String,
    },
    spa_and_wellness_section_menu_en: {
        type: String,
    },
    spa_and_wellness_section_menu_ge: {
        type: String,
    },
    pool_title_en: {
        type: String,
    },
    pool_title_ge: {
        type: String,
    },
    pool_section_little_description_en: {
        type: String,
    },
    pool_section_little_description_ge: {
        type: String,
    },
    pool_section_description_en: {
        type: String,
    },
    pool_section_description_ge: {
        type: String,
    },
    out_door_pool_section_description_en: {
        type: String,
    },
    out_door_pool_section_description_ge: {
        type: String,
    },
    in_door_pool_section_description_en: {
        type: String,
    },
    in_door_pool_section_description_ge: {
        type: String,
    },
    firstSpaImageUrl: {
        type: String,
    },
    secondSpaImageUrl: {
        type: String,
    },
    thirdSpaImageUrl: {
        type: String,
    },
    firstPoolImageUrl: {
        type: String,
    },
    secondPoolImageUrl: {
        type: String,
    },
    thirdPoolImageUrl: {
        type: String,
    },
    menuImgUrl: {
        type: String,
    },
});
export const SpaWellness = model('SpaWellness', SpaWellnessSchema);
