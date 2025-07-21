import mongoose, { Document, model, Schema } from 'mongoose';

export interface Footer extends mongoose.Document {
  contactUs_en?: string;
  contactUs_ge?: string;
  email_en?: string;
  email_ge?: string;
  phone_en?: string;
  phone_ge?: string;
  rooms_en?: string;
  rooms_ge?: string;
  home_en?: string;
  home_ge?: string;
  services_en?: string;
  services_ge?: string;
  restaurant_en?: string;
  restaurant_ge?: string;
  faqs_en?: string;
  faqs_ge?: string;
  instagram_en?: string;
  instagram_ge?: string;
  facebook_en?: string;
  facebook_ge?: string;
  linkedIn_en?: string;
  linkedIn_ge?: string;
}

export const FooterSchema = new Schema<Footer>({
  contactUs_en: {
    type: String,
  },
  contactUs_ge: {
    type: String,
  },
  email_en: {
    type: String,
  },
  email_ge: {
    type: String,
  },
  phone_en: {
    type: String,
  },
  phone_ge: {
    type: String,
  },
  rooms_en: {
    type: String,
  },
  rooms_ge: {
    type: String,
  },
  home_en: {
    type: String,
  },
  home_ge: {
    type: String,
  },
  services_en: {
    type: String,
  },
  services_ge: {
    type: String,
  },
  restaurant_en: {
    type: String,
  },
  restaurant_ge: {
    type: String,
  },
  faqs_en: {
    type: String,
  },
  faqs_ge: {
    type: String,
  },
  instagram_en: {
    type: String,
  },
  instagram_ge: {
    type: String,
  },
  facebook_en: {
    type: String,
  },
  facebook_ge: {
    type: String,
  },
  linkedIn_en: {
    type: String,
  },
  linkedIn_ge: {
    type: String,
  },
});

export const Footer = model<Footer>('Footer', FooterSchema);
