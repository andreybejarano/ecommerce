import mongoose from 'mongoose';

export interface Role extends mongoose.Document {
  name: string
}

const RoleShema = new mongoose.Schema<Role>({
  name: String
});

export default mongoose.models.Role || mongoose.model<Role>('Role', RoleShema);

