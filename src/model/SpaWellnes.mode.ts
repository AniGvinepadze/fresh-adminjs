import mongoose, { Document, model, Schema } from 'mongoose';

export interface SpaWellness extends mongoose.Document {
  our_facilities_en?: string;
  our_facilities_ge?: string;
  our_facilities_spa_en?: string;
  our_facilities_spa_ge?: string;
  our_facilities_heated_indoor_pool_en?: string;
  our_facilities_heated_indoor_pool_ge?: string;
  our_facilities_outdoor_pool_en?: string;
  our_facilities_outdoor_pool_ge?: string;
  our_facilities_gym_en?: string;
  our_facilities_gym_ge?: string;
  spa_and_wellness_title_en?: string;
  spa_and_wellness_title_ge?: string;
  spa_and_wellness_section_little_description_en?: string;
  spa_and_wellness_section_little_description_ge?: string;
  spa_and_wellness_section_description_en?: string;
  spa_and_wellness_section_description_ge?: string;
  spa_and_wellness_section_about_room_en?: string;
  spa_and_wellness_section_about_room_ge?: string;
  spa_and_wellness_section_menu_en?: string;
  spa_and_wellness_section_menu_ge?: string;
  pool_title_en?: string;
  pool_title_ge?: string;
  pool_section_little_description_en?: string;
  pool_section_little_description_ge?: string;
  pool_section_description_en?: string;
  pool_section_description_ge?: string;
  out_door_pool_section_description_en?: string;
  out_door_pool_section_description_ge?: string;
  in_door_pool_section_description_en?: string;
  in_door_pool_section_description_ge?: string;
  firstSpaImageUrl?: string;
  secondSpaImageUrl?: string;
  thirdSpaImageUrl?: string;
  firstPoolImageUrl?: string;
  secondPoolImageUrl?: string;
  thirdPoolImageUrl?: string;
  menuImgUrl?: string;
}

export const SpaWellnessSchema = new Schema<SpaWellness>({
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

export const SpaWellness = model<SpaWellness>('SpaWellness', SpaWellnessSchema);
