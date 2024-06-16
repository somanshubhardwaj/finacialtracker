// Models/User.js

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  // Add more fields if necessary
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
