import mongoose, { Document, model, Schema } from 'mongoose';

export interface Services extends Document {
  restaurant_and_bars__title_en?: string;
  restaurant_and_bars__title_ge?: string;
  restaurant_and_bars_section_little_description_en?: string;
  restaurant_and_bars_section_little_description_ge?: string;
  restaurant_and_bars_section_description_en?: string;
  restaurant_and_bars_section_description_ge?: string;
  bars_title_en?: string;
  bars_title_ge?: string;
  bars_section_description_en?: string;
  bars_section_description_ge?: string;
  meetings_and_events_title_en?: string;
  meetings_and_events_title_ge?: string;
  meetings_and_events_section_little_description_en?: string;
  meetings_and_events_section_little_description_ge?: string;
  meetings_and_events_section_description_en?: string;
  meetings_and_events_section_description_ge?: string;
  wellness_and_fitness_title_en?: string;
  wellness_and_fitness_title_ge?: string;
  wellness_and_fitness_section_little_description_en?: string;
  wellness_and_fitness_section_little_description_ge?: string;
  wellness_and_fitness_section_description_en?: string;
  wellness_and_fitness_section_description_ge?: string;
  our_facilities_title_en?: string;
  our_facilities_title_ge?: string;
  our_facilities_spa_en?: string;
  our_facilities_spa_ge?: string;
  our_facilities_indoorPool_en?: string;
  our_facilities_indoorPool_ge?: string;
  our_facilities_outdoorPool_en?: string;
  our_facilities_outdoorPool_ge?: string;
  our_facilities_gym_en?: string;
  our_facilities_gym_ge?: string;
  kids_entertainment_title_en?: string;
  kids_entertainment_title_ge?: string;
  kids_entertainment_section_little_description_en?: string;
  kids_entertainment_section_little_description_ge?: string;
  kids_entertainment_section_description_en?: string;
  kids_entertainment_section_description_ge?: string;
  kids_entertainment_section_big_description_ge?: string;
  kids_entertainment_section_big_description_en?: string;
  restaurantImageUrl?: string;
  barImageUrl?: string;
  meetingsAndEventsImageUrl?: string;
  wellnessAndFitnessImageUrl?: string;
  kidsEntertainmentImageUrl?: string;
  artImageUrl?: string;
}

export const ServicesSchema = new Schema<Services>({
  restaurant_and_bars__title_en: {
    type: String,
  },
  restaurant_and_bars__title_ge: {
    type: String,
  },
  restaurant_and_bars_section_little_description_en: {
    type: String,
  },
  restaurant_and_bars_section_little_description_ge: {
    type: String,
  },
  restaurant_and_bars_section_description_en: {
    type: String,
  },
  restaurant_and_bars_section_description_ge: {
    type: String,
  },
  bars_title_en: {
    type: String,
  },
  bars_title_ge: {
    type: String,
  },
  bars_section_description_en: {
    type: String,
  },
  bars_section_description_ge: {
    type: String,
  },
  meetings_and_events_title_en: {
    type: String,
  },
  meetings_and_events_title_ge: {
    type: String,
  },
  meetings_and_events_section_little_description_en: {
    type: String,
  },
  meetings_and_events_section_little_description_ge: {
    type: String,
  },
  meetings_and_events_section_description_en: {
    type: String,
  },
  meetings_and_events_section_description_ge: {
    type: String,
  },
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
  our_facilities_title_en: {
    type: String,
  },
  our_facilities_title_ge: {
    type: String,
  },
  our_facilities_spa_en: {
    type: String,
  },
  our_facilities_spa_ge: {
    type: String,
  },
  our_facilities_indoorPool_en: {
    type: String,
  },
  our_facilities_indoorPool_ge: {
    type: String,
  },
  our_facilities_outdoorPool_en: {
    type: String,
  },
  our_facilities_outdoorPool_ge: {
    type: String,
  },
  our_facilities_gym_en: {
    type: String,
  },
  our_facilities_gym_ge: {
    type: String,
  },
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
  kids_entertainment_section_big_description_en: {
    type: String,
  },
  kids_entertainment_section_big_description_ge: {
    type: String,
  },
  restaurantImageUrl: {
    type: String,
  },
  barImageUrl: {
    type: String,
  },
  meetingsAndEventsImageUrl: {
    type: String,
  },
  wellnessAndFitnessImageUrl: {
    type: String,
  },
  kidsEntertainmentImageUrl: {
    type: String,
  },
  artImageUrl: {
    type: String,
  },
});

export const Services = model<Services>('Services', ServicesSchema);
