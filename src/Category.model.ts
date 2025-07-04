// pabelon/src/Category.model.ts
import { model, Schema, Document } from "mongoose";

export interface ICategory extends Document {
    title: string;
    imageUrl?: string;
}

export const CategorySchema = new Schema<ICategory>(
    {
        title: { type: String, required: true },
        imageUrl: { type: String },
    },
    { timestamps: true }
);

export const Category = model<ICategory>('Category_new', CategorySchema);