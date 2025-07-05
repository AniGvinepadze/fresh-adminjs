import { model, Schema } from 'mongoose';

export interface IAgro extends Document {
  imageUrl?: string;
  secondImageUrl?: string;
  thirdImageUrl?: string;
  fourthImageUrl?: string;
}

const AgroSchema = new Schema<IAgro>({
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

export const AgroImages = model<IAgro>('AgroImages', AgroSchema);
