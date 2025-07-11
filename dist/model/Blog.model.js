import { model, Schema } from 'mongoose';
export const BlogSchema = new Schema({
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
export const Blog = model('Blog', BlogSchema);
