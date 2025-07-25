import mongoose, { Document, model, Schema } from 'mongoose';

export interface Wine extends mongoose.Document {
  wine_page_title_en?: string;
  wine_page_title_ge?: string;
  wine_page_breath_deeply_en?: string;
  wine_page_breath_deeply_ge?: string;
  wine_page_mission_en?: string;
  wine_page_mission_ge?: string;
  wine_categories_title_en?: string;
  wine_categories_title_ge?: string;
  wine_categories_first_title_en?: string;
  wine_categories_first_title_ge?: string;
  wine_categories_first_description_en?: string;
  wine_categories_first_description_ge?: string;
  wine_categories_second_title_en?: string;
  wine_categories_second_title_ge?: string;
  wine_categories_second_description_en?: string;
  wine_categories_second_description_ge?: string;
  wine_categories_third_title_en?: string;
  wine_categories_third_title_ge?: string;
  wine_categories_third_description_en?: string;
  wine_categories_third_description_ge?: string;
  wine_categories_fourth_title_en?: string;
  wine_categories_fourth_title_ge?: string;
  wine_categories_fourth_description_en?: string;
  wine_categories_fourth_description_ge?: string;
  wine_page_table_en?: string;
  wine_page_table_ge?: string;
  winePageImageFirst?: string;
  winePageImageSecond?: string;
}

export const WineSchema = new Schema<Wine>({
  wine_page_title_en: { type: String },
  wine_page_title_ge: { type: String },
  wine_page_breath_deeply_en: { type: String },
  wine_page_breath_deeply_ge: { type: String },
  wine_page_mission_en: { type: String },
  wine_page_mission_ge: { type: String },
  wine_categories_title_en: { type: String },
  wine_categories_title_ge: { type: String },
  wine_categories_first_title_en: { type: String },
  wine_categories_first_title_ge: { type: String },
  wine_categories_first_description_en: { type: String },
  wine_categories_first_description_ge: { type: String },
  wine_categories_second_title_en: { type: String },
  wine_categories_second_title_ge: { type: String },
  wine_categories_second_description_en: { type: String },
  wine_categories_second_description_ge: { type: String },
  wine_categories_third_title_en: { type: String },
  wine_categories_third_title_ge: { type: String },
  wine_categories_third_description_en: { type: String },
  wine_categories_third_description_ge: { type: String },
  wine_categories_fourth_title_en: { type: String },
  wine_categories_fourth_title_ge: { type: String },
  wine_categories_fourth_description_en: { type: String },
  wine_categories_fourth_description_ge: { type: String },
  wine_page_table_en: { type: String },
  wine_page_table_ge: { type: String },
  winePageImageFirst: { type: String },
  winePageImageSecond: { type: String },
});

export const Wine = model<Wine>('Wine', WineSchema);
