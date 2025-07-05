import mongoose, { Document, model, Schema } from 'mongoose';

export interface Services extends Document {
  restaurant_and_bars__title_en: string;
  restaurant_and_bars__title_ge: string;
  restaurant_and_bars_section_little_description_en: string;
  restaurant_and_bars_section_little_description_ge: string;
  restaurant_and_bars_section_description_en: string;
  restaurant_and_bars_section_description_ge: string;
  bars_title_en: string;
  bars_title_ge: string;
  bars_section_description_en: string;
  bars_section_description_ge: string;
  meetings_and_events_title_en: string;
  meetings_and_events_title_ge: string;
  meetings_and_events_section_little_description_en: string;
  meetings_and_events_section_little_description_ge: string;
  meetings_and_events_section_description_en: string;
  meetings_and_events_section_description_ge: string;
  wellness_and_fitness_title_en: string;
  wellness_and_fitness_title_ge: string;
  wellness_and_fitness_section_little_description_en: string;
  wellness_and_fitness_section_little_description_ge: string;
  wellness_and_fitness_section_description_en: string;
  wellness_and_fitness_section_description_ge: string;
  our_facilities_title_en: string;
  our_facilities_title_ge: string;
  kids_entertainment_title_en: string;
  kids_entertainment_title_ge: string;
  kids_entertainment_section_little_description_en: string;
  kids_entertainment_section_little_description_ge: string;
  kids_entertainment_section_description_en: string;
  kids_entertainment_section_description_ge: string;
    imageUrl?: string;
}

export const ServicesSchema = new Schema<Services>({
  restaurant_and_bars__title_en: {
    type: String,
    required: true,
  },
  restaurant_and_bars__title_ge: {
    type: String,
    required: true,
  },
  restaurant_and_bars_section_little_description_en: {
    type: String,
    required: true,
  },
  restaurant_and_bars_section_little_description_ge: {
    type: String,
    required: true,
  },
  restaurant_and_bars_section_description_en: {
    type: String,
    required: true,
  },
  restaurant_and_bars_section_description_ge: {
    type: String,
    required: true,
  },
  bars_title_en: {
    type: String,
    required: true,
  },
  bars_title_ge: {
    type: String,
    required: true,
  },
  bars_section_description_en: {
    type: String,
    required: true,
  },
  bars_section_description_ge: {
    type: String,
    required: true,
  },
  meetings_and_events_title_en: {
    type: String,
    required: true,
  },
  meetings_and_events_title_ge: {
    type: String,
    required: true,
  },
  meetings_and_events_section_little_description_en: {
    type: String,
    required: true,
  },
  meetings_and_events_section_little_description_ge: {
    type: String,
    required: true,
  },
  meetings_and_events_section_description_en: {
    type: String,
    required: true,
  },
  meetings_and_events_section_description_ge: {
    type: String,
    required: true,
  },
  wellness_and_fitness_title_en: {
    type: String,
    required: true,
  },
  wellness_and_fitness_title_ge: {
    type: String,
    required: true,
  },
  wellness_and_fitness_section_little_description_en: {
    type: String,
    required: true,
  },
  wellness_and_fitness_section_little_description_ge: {
    type: String,
    required: true,
  },
  wellness_and_fitness_section_description_en: {
    type: String,
    required: true,
  },
  wellness_and_fitness_section_description_ge: {
    type: String,
    required: true,
  },
  our_facilities_title_en: {
    type: String,
    required: true,
  },
  our_facilities_title_ge: {
    type: String,
    required: true,
  },
  kids_entertainment_title_en: {
    type: String,
    required: true,
  },
  kids_entertainment_title_ge: {
    type: String,
    required: true,
  },
  kids_entertainment_section_little_description_en: {
    type: String,
    required: true,
  },
  kids_entertainment_section_little_description_ge: {
    type: String,
    required: true,
  },
  kids_entertainment_section_description_en: {
    type: String,
    required: true,
  },
  kids_entertainment_section_description_ge: {
    type: String,
    required: true,
  },

    imageUrl: {
        type: String,
    },  
});

export const Services = model<Services>('Services', ServicesSchema);
