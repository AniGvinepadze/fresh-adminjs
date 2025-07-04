import mongoose, { Document, model, Schema } from 'mongoose';

interface Translation {
  rooms_title: string;
  rooms_description: string;
}

const roomsInfoSchema = new Schema({
  rooms_title: {
    type: String,
    required: false,
  },
  rooms_description: {
    type: String,
    required: false,
  },
  rooms_people_quantity: {
    type: Number,
    required: false,
  },
  rooms_bed_quantity: {
    type: Number,
    required: false,
  },
  rooms_area: {
    type: Number,
    required: false,
  },
  rooms_sofa: {
    type: Number,
    required: false,
  },
  rooms_bath: {
    type: Number,
    required: false,
  },
});

export interface IHome extends Document {
  home_pabellon_section_description: Map<string, string>;
  home_pabellon_section_little_description: Map<string, string>;
  home_rooms_section_description: Map<string, string>;
  home_rooms_section_title: Map<string, string>;
  home_rooms_section_little_description: Map<string, string>;
  home_rooms: Array<Map<string, Translation>>;
  home_big_description: Map<string, string>;
  home_contact_section_title: Map<string, string>;
  home_contact_section_about_team: Map<string, string>;
  home_contact_section_getInTouch: Map<string, string>;
  home_contact_section_email: string;
  home_contact_section_phone: string;
  imageUrl?: string;
}

export const HomeSchema = new Schema<IHome>({
  home_pabellon_section_description: {
    type: Map,
    of: String,
    required: true,
  },
  home_pabellon_section_little_description: {
    type: Map,
    of: String,
    required: true,
  },
  home_rooms_section_title: {
    type: Map,
    of: String,
    required: true,
  },
  home_rooms_section_description: {
    type: Map,
    of: String,
    required: true,
  },
  home_rooms_section_little_description: {
    type: Map,
    of: String,
    required: true,
  },
  home_rooms: {
    type: [roomsInfoSchema],
    required: true,
  },
  home_big_description: {
    type: Map,
    of: String,
    required: true,
  },
  home_contact_section_title: {
    type: Map,
    of: String,
    required: true,
  },
  home_contact_section_getInTouch: {
    type: Map,
    of: String,
    required: true,
  },
  home_contact_section_about_team: {
    type: Map,
    of: String,
    required: true,
  },
  home_contact_section_email: {
    type: String,
    required: true,
  },
  home_contact_section_phone: {
    type: String,
    required: true,
  },
  imageUrl: { type: String },
});

export const Home = model<IHome>('Home', HomeSchema);