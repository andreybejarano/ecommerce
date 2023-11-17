import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface User extends mongoose.Document {
  name: string,
  email: string,
  password: string,
  role: mongoose.Types.ObjectId
}

const UserShema = new mongoose.Schema<User>({
  name: String,
  email: String,
  password: String,
  role: { ref: 'Role', type: mongoose.Schema.Types.ObjectId, default: null }
});

UserShema.pre('save', function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  user.password = bcrypt.hashSync(user.password, 10);
  next();
});

export default mongoose.models.User || mongoose.model<User>('User', UserShema);

