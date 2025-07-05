import { model, Schema } from 'mongoose';

export interface IMakrine extends Document {
  imageUrl?: string;
  secondImageUrl?: string;
  thirdImageUrl?: string;
  fourthImageUrl?: string;
  
}

const MakrinetImageSchema = new Schema<IMakrine>({
  imageUrl: {
    type: String,
  },
  secondImageUrl: {
    type: String,
  },
  thirdImageUrl: {
    type: String,
  },
  fourthImageUrl: {
    type: String,
  },
});

export const MakrinetImage = model<IMakrine>('MakrinetImage', MakrinetImageSchema);
