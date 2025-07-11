import { model, Schema } from 'mongoose';
const FurtherSchema = new Schema({
    further_title_en: {
        type: String,
    },
    further_title_ge: {
        type: String,
    },
    further_getInTouch_en: {
        type: String,
    },
    further_getInTouch_ge: {
        type: String,
    },
    further_about_team_en: {
        type: String,
    },
    further_about_team_ge: {
        type: String,
    },
    further_email: {
        type: String,
    },
    further_phone: {
        type: String,
    },
    imageUrl: {
        type: String
    }
});
export const Further = model('Further', FurtherSchema);
