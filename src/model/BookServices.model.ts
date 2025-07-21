import mongoose, { Document, model, Schema } from 'mongoose';

export interface BookServices extends mongoose.Document {
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
}

export const BookServicesSchema = new Schema<BookServices>({
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
});

export const BookServices = model<BookServices>('BookServices', BookServicesSchema);
