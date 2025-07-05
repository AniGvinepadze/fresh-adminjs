import mongoose, { Document, model, Schema } from 'mongoose';

export interface Blog extends mongoose.Document {
  blog_title_en?: string;
  blog_title_ge?: string;
  imageUrl?: string;
}

export const BlogSchema = new Schema<Blog>({
  blog_title_en: {
    type: String,
  },
  blog_title_ge: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

export const Blog = model<Blog>('Blog', BlogSchema);
