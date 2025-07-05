import mongoose, { Document, model, Schema } from 'mongoose';

export interface RestaurantBar extends Document {
  makrine_section_little_description_en: string;
  makrine_section_little_description_ge: string;
  makrine_section_description_en: string;
  makrine_section_description_ge: string;
  makrine_restaurant_title_en: string;
  makrine_restaurant_title_ge: string;
  makrine_restaurant_section_description_en: string;
  makrine_restaurant_section_description_ge: string;
  makrine_restaurant_section_little_description_en: string;
  makrine_restaurant_section_little_description_ge: string;
  makrine_restaurant_community_impact_en: string;
  makrine_restaurant_community_impact_ge: string;
  makrine_restaurant_menu_en: string;
  makrine_restaurant_menu_ge: string;
  restaurant_and_bar_section_title_en: string;
  restaurant_and_bar_section_title_ge: string;
  restaurant_and_bar_section_description_en: string;
  restaurant_and_bar_section_description_ge: string;
  lobby_bar_title_en: string;
  lobby_bar_title_ge: string;
  lobby_bar_description_en: string;
  lobby_bar_description_ge: string;
  lobby_bar_little_description_en: string;
  lobby_bar_little_description_ge: string;
  pool_bar_title_en: string;
  pool_bar_title_ge: string;
  pool_bar_section_description_en: string;
  pool_bar_section_description_ge: string;
  imageUrl?: string;
}

export const RestaurantBarSchema = new Schema<RestaurantBar>({
  makrine_section_little_description_en: {
    type: String,
    required: true,
  },
  makrine_section_little_description_ge: {
    type: String,
    required: true,
  },
  makrine_section_description_en: {
    type: String,
    required: true,
  },
  makrine_section_description_ge: {
    type: String,
    required: true,
  },
  makrine_restaurant_title_en: {
    type: String,
    required: true,
  },
  makrine_restaurant_title_ge: {
    type: String,
    required: true,
  },
  makrine_restaurant_section_description_en: {
    type: String,
    required: true,
  },
  makrine_restaurant_section_description_ge: {
    type: String,
    required: true,
  },
  makrine_restaurant_section_little_description_en: {
    type: String,
    required: true,
  },
  makrine_restaurant_section_little_description_ge: {
    type: String,
    required: true,
  },
  makrine_restaurant_community_impact_en: {
    type: String,
    required: true,
  },
  makrine_restaurant_community_impact_ge: {
    type: String,
    required: true,
  },
  makrine_restaurant_menu_en: {
    type: String,
    required: true,
  },
  makrine_restaurant_menu_ge: {
    type: String,
    required: true,
  },
  restaurant_and_bar_section_title_en: {
    type: String,
    required: true,
  },
  restaurant_and_bar_section_title_ge: {
    type: String,
    required: true,
  },
  restaurant_and_bar_section_description_en: {
    type: String,
    required: true,
  },
  restaurant_and_bar_section_description_ge: {
    type: String,
    required: true,
  },
  lobby_bar_title_en: {
    type: String,
    required: true,
  },
  lobby_bar_title_ge: {
    type: String,
    required: true,
  },
  lobby_bar_description_en: {
    type: String,
    required: true,
  },
  lobby_bar_description_ge: {
    type: String,
    required: true,
  },
  lobby_bar_little_description_en: {
    type: String,
    required: true,
  },
  lobby_bar_little_description_ge: {
    type: String,
    required: true,
  },
  pool_bar_title_en: {
    type: String,
    required: true,
  },
  pool_bar_title_ge: {
    type: String,
    required: true,
  },
  pool_bar_section_description_en: {
    type: String,
    required: true,
  },
  pool_bar_section_description_ge: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

export const RestaurantBar = model<RestaurantBar>('RestaurantBar', RestaurantBarSchema);
