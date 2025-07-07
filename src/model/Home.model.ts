import mongoose, { Document, model, Schema } from 'mongoose';
import { Rooms, RoomsSchema } from './rooms.model.js';
import { IHomeRoomsInfo } from './HomeRooms.model.js';



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
  // home_rooms?:mongoose.Types.ObjectId[]
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
  hero_imageUrl?: string;
  pabellon_imageUrl?: string;
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
  // home_rooms:[ {
  //   type: [RoomsSchema],
  //   ref:"HomeRoomsInfo",
  // }],
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
  hero_imageUrl: { 
    type: String 
  },
  pabellon_imageUrl: { 
    type: String 
  },
});

export const Home = model<IHome>('Home', HomeSchema);

