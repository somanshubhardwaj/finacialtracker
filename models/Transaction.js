// Models/Transaction.js

import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
});

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
export default Transaction;
