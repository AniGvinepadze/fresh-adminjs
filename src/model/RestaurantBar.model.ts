import mongoose, { Document, model, Schema } from 'mongoose';

export interface RestaurantBar extends Document {
  makrine_section_little_description_en?: string;
  makrine_section_little_description_ge?: string;
  makrine_section_description_en?: string;
  makrine_section_description_ge?: string;
  makrine_restaurant_title_en?: string;
  makrine_restaurant_title_ge?: string;
  makrine_restaurant_section_description_en?: string;
  makrine_restaurant_section_description_ge?: string;
  makrine_restaurant_section_little_description_en?: string;
  makrine_restaurant_section_little_description_ge?: string;
  makrine_restaurant_community_impact_en?: string;
  makrine_restaurant_community_impact_ge?: string;
  makrine_restaurant_menu_en?: string;
  makrine_restaurant_menu_ge?: string;
  restaurant_and_bar_section_title_en?: string;
  restaurant_and_bar_section_title_ge?: string;
  restaurant_and_bar_section_description_en?: string;
  restaurant_and_bar_section_description_ge?: string;
  lobby_bar_title_en?: string;
  lobby_bar_title_ge?: string;
  lobby_bar_description_en?: string;
  lobby_bar_description_ge?: string;
  lobby_bar_little_description_en?: string;
  lobby_bar_little_description_ge?: string;
  pool_bar_title_en?: string;
  pool_bar_title_ge?: string;
  pool_bar_section_description_en?: string;
  pool_bar_section_description_ge?: string;
  logoImageUrl?: string;
  mainImageUrl?: string;
  makrineRestaurantImageUrl?: string;
  restaurantBarImageUrl?: string;
  lobbyImageUrl?: string;
  poolImageUrl?: string;
  menuImageUrl_en?: string;
  menuImageUrl_ge?: string;
  menuImageUrlSecondPart_en?: string;
  menuImageUrlSecondPart_ge?: string;
  menuLogoImageUrl?:string
}

export const RestaurantBarSchema = new Schema<RestaurantBar>({
  makrine_section_little_description_en: {
    type: String,
  },
  makrine_section_little_description_ge: {
    type: String,
  },
  makrine_section_description_en: {
    type: String,
  },
  makrine_section_description_ge: {
    type: String,
  },
  makrine_restaurant_title_en: {
    type: String,
  },
  makrine_restaurant_title_ge: {
    type: String,
  },
  makrine_restaurant_section_description_en: {
    type: String,
  },
  makrine_restaurant_section_description_ge: {
    type: String,
  },
  makrine_restaurant_section_little_description_en: {
    type: String,
  },
  makrine_restaurant_section_little_description_ge: {
    type: String,
  },
  makrine_restaurant_community_impact_en: {
    type: String,
  },
  makrine_restaurant_community_impact_ge: {
    type: String,
  },
  makrine_restaurant_menu_en: {
    type: String,
  },
  makrine_restaurant_menu_ge: {
    type: String,
  },
  restaurant_and_bar_section_title_en: {
    type: String,
  },
  restaurant_and_bar_section_title_ge: {
    type: String,
  },
  restaurant_and_bar_section_description_en: {
    type: String,
  },
  restaurant_and_bar_section_description_ge: {
    type: String,
  },
  lobby_bar_title_en: {
    type: String,
  },
  lobby_bar_title_ge: {
    type: String,
  },
  lobby_bar_description_en: {
    type: String,
  },
  lobby_bar_description_ge: {
    type: String,
  },
  lobby_bar_little_description_en: {
    type: String,
  },
  lobby_bar_little_description_ge: {
    type: String,
  },
  pool_bar_title_en: {
    type: String,
  },
  pool_bar_title_ge: {
    type: String,
  },
  pool_bar_section_description_en: {
    type: String,
  },
  pool_bar_section_description_ge: {
    type: String,
  },
  logoImageUrl: {
    type: String,
  },
  mainImageUrl: {
    type: String,
  },
  makrineRestaurantImageUrl: {
    type: String,
  },
  restaurantBarImageUrl: {
    type: String,
  },
  lobbyImageUrl: {
    type: String,
  },
  poolImageUrl: {
    type: String,
  },
  menuImageUrl_en: {
    type: String,
  },
  menuImageUrl_ge: {
    type: String,
  },
  menuImageUrlSecondPart_en: {
    type: String,
  },
  menuImageUrlSecondPart_ge: {
    type: String,
  },
  menuLogoImageUrl:{
    type:String
  }
});

export const RestaurantBar = model<RestaurantBar>('RestaurantBar', RestaurantBarSchema);
