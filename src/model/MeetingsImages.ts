import { model, Schema } from 'mongoose';

export interface IMeeting extends Document {
  imageUrl?: string;
  secondImageUrl?: string;
  thirdImageUrl?: string;
  fourthImageUrl?: string;
}

const MeetingSchema = new Schema<IMeeting>({
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

export const MeetingImage = model<IMeeting>('MeetingImage', MeetingSchema);
