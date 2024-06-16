// app/api/transaction/route.js
import { connectDB } from '@/lib/db';
import Transaction from '../../../models/Transaction';
import User from '../../../models/Users';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  await connectDB();

  const user = await User.findOne({ email: session.user.email });
  const transactions = await Transaction.find({ user: user._id });

  return new Response(JSON.stringify(transactions), { status: 200 });
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  await connectDB();
  
  const user = await User.findOne({ email: session.user.email });
  const { amount, description } = await req.json();
  const transaction = new Transaction({ amount, description, user: user._id, date: new Date() });
  await transaction.save();

  return new Response(JSON.stringify(transaction), { status: 201 });
}
