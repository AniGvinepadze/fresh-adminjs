import mongoose, { Document, model, Schema } from 'mongoose';

export interface IAboutUs extends Document {
  aboutus_title_en?: string;
  aboutus_title_ge?: string;
  aboutus_section_little_description_en?: string;
  aboutus_section_little_description_ge?: string;
  aboutus_section_description_en?: string;
  aboutus_section_description_ge?: string;
  aboutus_experience_overview_en?: string;
  aboutus_experience_overview_ge?: string;
  aboutus_facilities_and_services_en?: string;
  aboutus_facilities_and_services_ge?: string;
  aboutus_wine_collections_and_story_en?: string;
  aboutus_wine_collections_and_story_ge?: string;
  aboutus_historical_culture_heritage_en?: string;
  aboutus_historical_culture_heritage_ge?: string;
  aboutus_family_tradition_en?: string;
  aboutus_family_tradition_ge?: string;
  aboutus_farmToTable_experience_en?: string;
  aboutus_farmToTable_experience_ge?: string;
  iliaImageUrl?: string;
  artWorkImageUrl?: string;
}

export const AboutUsSchema = new Schema<IAboutUs>({
  aboutus_title_en: {
    type: String,
  },
  aboutus_title_ge: {
    type: String,
  },
  aboutus_section_little_description_en: {
    type: String,
  },
  aboutus_section_little_description_ge: {
    type: String,
  },
  aboutus_section_description_en: {
    type: String,
  },
  aboutus_section_description_ge: {
    type: String,
  },
  aboutus_experience_overview_en: {
    type: String,
  },
  aboutus_experience_overview_ge: {
    type: String,
  },
  aboutus_facilities_and_services_en: {
    type: String,
  },
  aboutus_facilities_and_services_ge: {
    type: String,
  },
  aboutus_wine_collections_and_story_en: {
    type: String,
  },
  aboutus_wine_collections_and_story_ge: {
    type: String,
  },
  aboutus_historical_culture_heritage_en: {
    type: String,
  },
  aboutus_historical_culture_heritage_ge: {
    type: String,
  },
  aboutus_family_tradition_en: {
    type: String,
  },
  aboutus_family_tradition_ge: {
    type: String,
  },
  aboutus_farmToTable_experience_en: {
    type: String,
  },
  aboutus_farmToTable_experience_ge: {
    type: String,
  },

  iliaImageUrl: {
    type: String,
  },
  artWorkImageUrl: {
    type: String,
  },
});

export const AboutUs = model<IAboutUs>('AboutUs', AboutUsSchema);
