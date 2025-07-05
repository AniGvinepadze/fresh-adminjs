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
  conference_rooms_title_en?: string;
  conference_rooms_title_ge?: string;
  conference_rooms_section_description_en?: string;
  conference_rooms_section_description_ge?: string;
  conference_rooms_section_little_description_en?: string;
  conference_rooms_section_little_description_ge?: string;
  imageUrl?: string;
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
  imageUrl: {
    type: String,
  },
});

export const MeetingsEvent = model<MeetingsEvent>('MeetingsEvent', MeetingsEventSchema);
