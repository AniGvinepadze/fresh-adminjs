import mongoose, { Document, model, Schema } from 'mongoose';

export interface Header extends mongoose.Document {
  home_en?: string;
  home_ge?: string;
  aboutUs_en?: string;
  aboutUs_ge?: string;
  rooms_en?: string;
  rooms_ge?: string;
  services_en?: string;
  services_ge?: string;
  experiences_en?: string;
  experiences_ge?: string;
  barsRestaurant_en?: string;
  barsRestaurant_ge?: string;
  meetingEvents_en?: string;
  meetingEvents_ge?: string;
  spaWellness_en?: string;
  spaWellness_ge?: string;
  kids_en?: string;
  kids_ge?: string;
  wine_en?: string;
  wine_ge?: string;
  agro_en?: string;
  agro_ge?: string;
  contact_en?: string;
  contact_ge?: string;
}

export const HeaderSchema = new Schema<Header>({
  home_en: {
    type: String,
  },
  home_ge: {
    type: String,
  },
  aboutUs_en: {
    type: String,
  },
  aboutUs_ge: {
    type: String,
  },
  rooms_en: {
    type: String,
  },
  rooms_ge: {
    type: String,
  },
  services_en: {
    type: String,
  },
  services_ge: {
    type: String,
  },
  experiences_en: {
    type: String,
  },
  experiences_ge: {
    type: String,
  },
  barsRestaurant_en: {
    type: String,
  },
  barsRestaurant_ge: {
    type: String,
  },
  meetingEvents_en: {
    type: String,
  },
  meetingEvents_ge: {
    type: String,
  },
  spaWellness_en: {
    type: String,
  },
  spaWellness_ge: {
    type: String,
  },
  kids_en: {
    type: String,
  },
  kids_ge: {
    type: String,
  },
  wine_en: {
    type: String,
  },
  wine_ge: {
    type: String,
  },
  agro_en: {
    type: String,
  },
  agro_ge: {
    type: String,
  },
  contact_en: {
    type: String,
  },
  contact_ge: {
    type: String,
  },
});

export const Header = model<Header>('Header', HeaderSchema);
