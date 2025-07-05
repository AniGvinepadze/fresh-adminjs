import mongoose, { Document, model, Schema } from 'mongoose';

export interface Wine extends mongoose.Document {
  wine_section_little_description_en?: string;
  wine_section_little_description_ge?: string;
  wine_section_description_en?: string;
  wine_section_description_ge?: string;
  winemaking_heritage_en?: string;
  winemaking_heritage_ge?: string;
  wine_culture_en?: string;
  wine_culture_ge?: string;
  imageUrl?: string;
}

export const WineSchema = new Schema<Wine>({
  wine_section_little_description_en: {
    type: String,
  },
  wine_section_little_description_ge: {
    type: String,
  },
  wine_section_description_en: {
    type: String,
  },
  wine_section_description_ge: {
    type: String,
  },
  winemaking_heritage_en: {
    type: String,
  },
  winemaking_heritage_ge: {
    type: String,
  },
  wine_culture_en: {
    type: String,
  },
  wine_culture_ge: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

export const Wine = model<Wine>('Wine', WineSchema);
