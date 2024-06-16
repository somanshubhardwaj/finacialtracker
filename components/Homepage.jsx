"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Homepage() {
  const { status, data: session } = useSession();
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const fetchTransactions = async () => {
    const response = await axios.get("/api/transaction");
    setTransactions(response.data);
  };
  useEffect(() => {
    fetchTransactions();
  }, []);
  const addTransaction = async (e) => {
    const response = await axios.post("/api/transaction", e);
    setTransactions([...transactions, response.data]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ amount, description });
    setAmount("");
    setDescription("");
  };

  return (
    <div className="p-6">
      <nav className="flex justify-between">
        <span className="font-extrabold text-4xl">Finacial Tracker</span>
        <div className="flex items-center space-x-4">
          <span className="text-lg">Welcome,{session.user.name}!</span>
         
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </div>
      </nav>
      <hr className="mt-6 mb-6" />
      <div className="flex  flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3  h-full">
          <div className="">
            <span className="font-bold text-2xl ">Add Transaction</span>
            <div className="mt-3">
              <form className="">
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    description
                  </label>
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    name="description"
                    id="description"
                    autoComplete="description"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    name="amount"
                    id="amount"
                    autoComplete="amount"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]"
                  />
                </div>

                <div className="mb-3">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add Transaction
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 md:px-4  h-full">
          <span className="font-bold text-2xl">Transactions</span>
          <div className="mt-3">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Remark
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {transaction.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {transaction.amount}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {transaction.date}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
