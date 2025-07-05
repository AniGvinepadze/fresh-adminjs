import mongoose, { Document, model, Schema } from 'mongoose';

export interface SpaWellness extends mongoose.Document {
  wellness_and_fitness_title_en?: string;
  wellness_and_fitness_title_ge?: string;
  wellness_and_fitness_section_little_description_en?: string;
  wellness_and_fitness_section_little_description_ge?: string;
  wellness_and_fitness_section_description_en?: string;
  wellness_and_fitness_section_description_ge?: string;
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
  imageUrl?: string;
}

export const SpaWellnessSchema = new Schema<SpaWellness>({
  wellness_and_fitness_title_en: {
    type: String,
  },
  wellness_and_fitness_title_ge: {
    type: String,
  },
  wellness_and_fitness_section_little_description_en: {
    type: String,
  },
  wellness_and_fitness_section_little_description_ge: {
    type: String,
  },
  wellness_and_fitness_section_description_en: {
    type: String,
  },
  wellness_and_fitness_section_description_ge: {
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
  imageUrl: {
    type: String,
  },
});

export const SpaWellness = model<SpaWellness>('SpaWellness', SpaWellnessSchema);
