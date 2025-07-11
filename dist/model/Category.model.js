import { model, Schema } from 'mongoose';
export const CategorySchema = new Schema({
    title: { type: String, required: true },
    imageUrl: { type: String },
}, { timestamps: true });
export const Category = model('Category_new', CategorySchema);
