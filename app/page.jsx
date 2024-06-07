"use client";
import { useEffect, useState } from "react";
export default function Home() {
  return (
    <div className="p-6">
      <nav className="">
        <span className="font-extrabold text-4xl">Finacial Tracker</span>
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
                    Remark
                  </label>
                  <input
                    type="text"
                    name="remark"
                    id="remark"
                    autoComplete="remark"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    autoComplete="amount"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-[30px]"
                  />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    autoComplete="type"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Income</option>
                    <option>Expense</option>
                  </select>
                </div>
                <div className="mb-3">
                  <button
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
                    Type
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
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">John Doe</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">1200</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Income
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">12-12-2021</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Jane Doe</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">1200</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Expense
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">12-12-2021</div>
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Jane Doe</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">1200</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Expense
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">12-12-2021</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Jane Doe</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">1200</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Expense
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">12-12-2021</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
