import { model, Schema } from 'mongoose';
export const PostSchema = new Schema({
    title: { type: String, required: true },
    imageUrl: { type: String },
}, { timestamps: true });
export const Post = model('Post', PostSchema);
