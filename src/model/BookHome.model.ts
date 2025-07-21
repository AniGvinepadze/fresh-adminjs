import mongoose, { Document, model, Schema } from 'mongoose';

export interface BookHome extends mongoose.Document {
  book_title_en?: string;
  book_title_ge?: string;
  check_in_en?: string;
  check_in_ge?: string;
  check_out_en?: string;
  check_out_ge?: string;
  bookBtn_en?: string;
  bookBtn_ge?: string;
}

export const BookHomeSchema = new Schema<BookHome>({
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
  check_out_en: {
    type: String,
  },
  check_out_ge: {
    type: String,
  },
  bookBtn_en: {
    type: String,
  },
  bookBtn_ge: {
    type: String,
  },
});

export const BookHome = model<BookHome>('BookHome', BookHomeSchema);
