import mongoose, { Document, model, Schema } from 'mongoose';

export interface BookMakrine extends mongoose.Document {
  book_title_en?: string;
  book_title_ge?: string;
  check_in_en?: string;
  check_in_ge?: string;
  bookBtn_en?: string;
  bookBtn_ge?: string;
  select_date_en?: string;
  select_date_ge?: string;
  adults_en?: string;
  adults_ge?: string;
  name_en?: string;
  name_ge?: string;
}

export const BookMakrineSchema = new Schema<BookMakrine>({
  book_title_en: {
    type: String,
  },
  book_title_ge: {
    type: String,
  },
  check_in_en: {
    type: String,
  },
  check_in_ge: {
    type: String,
  },
  bookBtn_en: {
    type: String,
  },
  bookBtn_ge: {
    type: String,
  },
  select_date_en: {
    type: String,
  },
  select_date_ge: {
    type: String,
  },
  adults_en: {
    type: String,
  },
  adults_ge: {
    type: String,
  },
  name_en: {
    type: String,
  },
  name_ge: {
    type: String,
  },
});

export const BookMakrine = model<BookMakrine>('BookMakrine', BookMakrineSchema);
