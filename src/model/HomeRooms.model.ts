import { model, Schema } from 'mongoose';

export interface IHomeRoomsInfo extends Document {
  imageUrl?: string;
  rooms_title_en?: string;
  rooms_title_ge?: string;
  rooms_description_en?: string;
  rooms_description_ge?: string;
  rooms_people_quantity?: number;
  rooms_bed_quantity?: number;
  rooms_area?: number;
  rooms_sofa?: number;
  rooms_bath?: number;
}

const RoomsInfoSchema = new Schema<IHomeRoomsInfo>({
    imageUrl: {
    type: String,
  },
  rooms_title_en: {
    type: String,
  },
  rooms_title_ge: {
    type: String,
  },
  rooms_description_en: {
    type: String,
  },
  rooms_description_ge: {
    type: String,
  },
  rooms_people_quantity: {
    type: Number,
  },
  rooms_bed_quantity: {
    type: Number,
  },
  rooms_area: {
    type: Number,
  },
  rooms_sofa: {
    type: Number,
  },
  rooms_bath: {
    type: Number,
  },
});


export const HomeRooms = model<IHomeRoomsInfo>('HomeRooms', RoomsInfoSchema);