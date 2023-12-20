import 'server-only';

import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export const getUsers = async () => {
  try {
    await dbConnect();
    const users = await User.find({}).select(['-password', '-__v']).populate('role', ['-__v']);
    return users;
  } catch (error) {
    throw error;
  }
};
