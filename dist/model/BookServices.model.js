import { model, Schema } from 'mongoose';
export const BookServicesSchema = new Schema({
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
    bookBtn_en: {
        type: String,
    },
    bookBtn_ge: {
        type: String,
    },
    select_date_en: {
        type: String,
    },
    select_date_ge: {
        type: String,
    },
    adults_en: {
        type: String,
    },
    adults_ge: {
        type: String,
    },
});
export const BookServices = model('BookServices', BookServicesSchema);
