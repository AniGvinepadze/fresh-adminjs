import mongoose, { Document, model, Schema } from 'mongoose';

export interface MeetingsEvent extends Document {
  conference_ballroom_title_en?: string;
  conference_ballroom_title_ge?: string;
  conference_ballroom_section_little_description_en?: string;
  conference_ballroom_section_little_description_ge?: string;
  conference_ballroom_section_description_en?: string;
  conference_ballroom_section_description_ge?: string;
  spaces_title_en?: string;
  spaces_title_ge?: string;
  spaces_meeting_room_en?: string;
  spaces_meeting_room_ge?: string;
  spaces_boardroom_en?: string;
  spaces_boardroom_ge?: string;
  spaces_ballroom_en?: string;
  spaces_ballroom_ge?: string;
  conference_rooms_title_en?: string;
  conference_rooms_title_ge?: string;
  conference_rooms_section_description_en?: string;
  conference_rooms_section_description_ge?: string;
  conference_rooms_section_little_description_en?: string;
  conference_rooms_section_little_description_ge?: string;
  meeting_room_iliauri_en?: string;
  meeting_room_iliauri_ge?: string;
  meeting_room_kamara_en?: string;
  meeting_room_kamara_ge?: string;
  kamara_iliauri_en?: string;
  kamara_iliauri_ge?: string;

  boardroom_krebuli_room_en?: string;
  boardroom_krebuli_room_ge?: string;
  ballroom_alazani_hall_en?: string;
  ballroom_alazani_hall_ge?: string;
  conferenceImageUrl?: string;
  artWorkImageUrl?: string;
  conferenceRoomsImageUrl?: string;
}

export const MeetingsEventSchema = new Schema<MeetingsEvent>({
  conference_ballroom_title_en: {
    type: String,
  },
  conference_ballroom_title_ge: {
    type: String,
  },
  conference_ballroom_section_little_description_en: {
    type: String,
  },
  conference_ballroom_section_little_description_ge: {
    type: String,
  },
  conference_ballroom_section_description_en: {
    type: String,
  },
  conference_ballroom_section_description_ge: {
    type: String,
  },
  spaces_title_en: {
    type: String,
  },
  spaces_title_ge: {
    type: String,
  },
  spaces_meeting_room_en: {
    type: String,
  },
  spaces_meeting_room_ge: {
    type: String,
  },
  spaces_boardroom_en: {
    type: String,
  },
  spaces_boardroom_ge: {
    type: String,
  },
  spaces_ballroom_en: {
    type: String,
  },
  spaces_ballroom_ge: {
    type: String,
  },
  conference_rooms_title_en: {
    type: String,
  },
  conference_rooms_title_ge: {
    type: String,
  },
  conference_rooms_section_description_en: {
    type: String,
  },
  conference_rooms_section_description_ge: {
    type: String,
  },
  conference_rooms_section_little_description_en: {
    type: String,
  },
  conference_rooms_section_little_description_ge: {
    type: String,
  },
  conferenceImageUrl: {
    type: String,
  },
  artWorkImageUrl: {
    type: String,
  },
  conferenceRoomsImageUrl: {
    type: String,
  },
  meeting_room_iliauri_en: { type: String },
  meeting_room_iliauri_ge: { type: String },
  meeting_room_kamara_en: { type: String },
  meeting_room_kamara_ge: { type: String },
  kamara_iliauri_en: { type: String },
  kamara_iliauri_ge: { type: String },
  boardroom_krebuli_room_en: { type: String },
  boardroom_krebuli_room_ge: { type: String },
  ballroom_alazani_hall_en: { type: String },
  ballroom_alazani_hall_ge: { type: String },
});

export const MeetingsEvent = model<MeetingsEvent>('MeetingsEvent', MeetingsEventSchema);
