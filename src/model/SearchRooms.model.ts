import mongoose, { Document, model, Schema } from 'mongoose';

export interface SearchRooms extends mongoose.Document {
  search_title_en?: string;
  search_title_ge?: string;
  check_in_en?: string;
  check_in_ge?: string;
  check_out_en?: string;
  check_out_ge?: string;
  bookBtn_en?: string;
  bookBtn_ge?: string;
}

export const SearchRoomsSchema = new Schema<SearchRooms>({
  search_title_en: {
    type: String,
  },
  search_title_ge: {
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

export const SearchRooms = model<SearchRooms>('SearchRooms', SearchRoomsSchema);
