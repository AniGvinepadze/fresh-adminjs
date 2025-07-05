import mongoose, { Document, model, Schema } from 'mongoose';

const roomsInfoSchema = new Schema({
  rooms_title_en: {
    type: String,
  },
  rooms_title_ge: {
    type: String,
  },
  rooms_description_en: {
    type: String,
  },
  rooms_description_ge: {
    type: String,
  },
  rooms_people_quantity: {
    type: Number,
  },
  rooms_bed_quantity: {
    type: Number,
  },
  rooms_area: {
    type: Number,
  },
  rooms_sofa: {
    type: Number,
  },
  rooms_bath: {
    type: Number,
  },
});

export interface IHome extends Document {
  home_pabellon_section_description_en?: string;
  home_pabellon_section_description_ge?: string;
  home_pabellon_section_little_description_en?: string;
  home_pabellon_section_little_description_ge?: string;
  home_rooms_section_description_en?: string;
  home_rooms_section_description_ge?: string;
  home_rooms_section_title_en?: string;
  home_rooms_section_title_ge?: string;
  home_rooms_section_little_description_en?: string;
  home_rooms_section_little_description_ge?: string;
  home_rooms?: Array<typeof roomsInfoSchema>;
  home_big_description_en?: string;
  home_big_description_ge?: string;
  home_contact_section_title_en?: string;
  home_contact_section_title_ge?: string;
  home_contact_section_about_team_en?: string;
  home_contact_section_about_team_ge?: string;
  home_contact_section_getInTouch_en?: string;
  home_contact_section_getInTouch_ge?: string;
  home_contact_section_email?: string;
  home_contact_section_phone?: string;
  imageUrl?: string;
}

const HomeSchema = new Schema<IHome>({
  home_pabellon_section_description_en: {
    type: String,
  },
  home_pabellon_section_description_ge: {
    type: String,
  },
  home_pabellon_section_little_description_en: {
    type: String,
  },
  home_pabellon_section_little_description_ge: {
    type: String,
  },
  home_rooms_section_title_en: {
    type: String,
  },
  home_rooms_section_title_ge: {
    type: String,
  },
  home_rooms_section_description_en: {
    type: String,
  },
  home_rooms_section_description_ge: {
    type: String,
  },
  home_rooms_section_little_description_en: {
    type: String,
  },
  home_rooms_section_little_description_ge: {
    type: String,
  },
  home_rooms: {
    type: [roomsInfoSchema],
  },
  home_big_description_en: {
    type: String,
  },
  home_big_description_ge: {
    type: String,
  },
  home_contact_section_title_en: {
    type: String,
  },
  home_contact_section_title_ge: {
    type: String,
  },
  home_contact_section_getInTouch_en: {
    type: String,
  },
  home_contact_section_getInTouch_ge: {
    type: String,
  },
  home_contact_section_about_team_en: {
    type: String,
  },
  home_contact_section_about_team_ge: {
    type: String,
  },
  home_contact_section_email: {
    type: String,
  },
  home_contact_section_phone: {
    type: String,
  },
  imageUrl: { 
    type: String 
  },
});

export const Home = model<IHome>('Home', HomeSchema);
