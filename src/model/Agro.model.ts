import mongoose, { Document, model, Schema } from 'mongoose';

export interface Agro extends Document {
  agro_section_little_description_en: string;
  agro_section_little_description_ge: string;
  agro_section_description_en: string;
  agro_section_description_ge: string;
  our_mission_title_en: string;
  our_mission_title_ge: string;
  our_mission_description_en: string;
  our_mission_description_ge: string;
  culinary_description_en: string;
  culinary_description_ge: string;
  imageUrl?: string;
}

export const AgroSchema = new Schema<Agro>({
  agro_section_little_description_en: {
    type: String,
    required: true,
  },
  agro_section_little_description_ge: {
    type: String,
    required: true,
  },
  agro_section_description_en: {
    type: String,
    required: true,
  },
  agro_section_description_ge: {
    type: String,
    required: true,
  },
  our_mission_title_en: {
    type: String,
    required: true,
  },
  our_mission_title_ge: {
    type: String,
    required: true,
  },
  our_mission_description_en: {
    type: String,
    required: true,
  },
  our_mission_description_ge: {
    type: String,
    required: true,
  },
  culinary_description_en: {
    type: String,
    required: true,
  },
  culinary_description_ge: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

export const Agro = model<Agro>('Agro', AgroSchema);
