import mongoose, { Document, model, Schema } from 'mongoose';

export interface Contact extends mongoose.Document {
  experience_title_en?: string;
  experience_title_ge?: string;
  experience_description_en?: string;
  experience_description_ge?: string;
  imageUrl?: string;
}

export const ContactSchema = new Schema<Contact>({
  experience_title_en: {
    type: String,
  },
  experience_title_ge: {
    type: String,
  },
  experience_description_en: {
    type: String,
  },
  experience_description_ge: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

export const Contact = model<Contact>('Contact', ContactSchema);
