import { model, Schema } from 'mongoose';

export interface IFurther extends Document {
  further_title_en?: string;
  further_title_ge?: string;
  further_about_team_en?: string;
  further_about_team_ge?: string;
  further_getInTouch_en?: string;
  further_getInTouch_ge?: string;
  further_email?: string;
  further_phone?: string;
  imageUrl?:string
  
}
const FurtherSchema = new Schema<IFurther>({
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
  imageUrl:{
    type:String
  }
});

export const Further = model<IFurther>('Further', FurtherSchema);
