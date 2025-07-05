import { model, Schema } from 'mongoose';

export interface IKids extends Document {
  imageUrl?: string;
  secondImageUrl?: string;
  thirdImageUrl?: string;
  fourthImageUrl?: string;
}

const KidsEntertainmentImageSchema = new Schema<IKids>({
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

export const KidsEntertainmentImage = model<IKids>('KidsEntertainmentImage', KidsEntertainmentImageSchema);
