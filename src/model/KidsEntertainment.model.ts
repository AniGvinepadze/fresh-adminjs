import mongoose, { Document, model, Schema } from 'mongoose';

export interface KidsEntertainment extends Document {
  kids_entertainment_title_en?: string;
  kids_entertainment_title_ge?: string;
  kids_entertainment_section_little_description_en?: string;
  kids_entertainment_section_little_description_ge?: string;
  kids_entertainment_section_description_en?: string;
  kids_entertainment_section_description_ge?: string;
  kids_entertainment_play_area_en?: string;
  kids_entertainment_play_area_ge?: string;
  imageUrl?: string;
}

export const KidsEntertainmentSchema = new Schema<KidsEntertainment>({
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
  kids_entertainment_play_area_en: {
    type: String,
  },
  kids_entertainment_play_area_ge: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

export const KidsEntertainment = model<KidsEntertainment>('KidsEntertainment', KidsEntertainmentSchema);
