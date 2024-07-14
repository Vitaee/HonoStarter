import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from '../interfaces/user.interface';


const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);