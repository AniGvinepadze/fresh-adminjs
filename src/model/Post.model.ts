import { model, Schema, Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  imageUrl?: string;
}

export const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    imageUrl: { type: String },
  },  
  { timestamps: true }
);

export const Post = model<IPost>('Post', PostSchema);
