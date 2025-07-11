import { model, Schema } from 'mongoose';
export const ServicesSchema = new Schema({
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
export const Services = model('Services', ServicesSchema);
