import { model, Schema } from 'mongoose';
export const BookHomeSchema = new Schema({
    book_title_en: {
        type: String,
    },
    book_title_ge: {
        type: String,
    },
    check_in_en: {
        type: String,
    },
    check_in_ge: {
        type: String,
    },
    check_out_en: {
        type: String,
    },
    check_out_ge: {
        type: String,
    },
    bookBtn_en: {
        type: String,
    },
    bookBtn_ge: {
        type: String,
    },
});
export const BookHome = model('BookHome', BookHomeSchema);
