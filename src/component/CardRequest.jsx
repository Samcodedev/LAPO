import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const CardRequest = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: 847264905,
      date: "11/14/2024 10:27:43",
      status: "Ready",
    },
    {
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: 847264905,
      date: "11/14/2024 10:27:43",
      status: "Ready",
    },
    {
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: 847264905,
      date: "11/14/2024 10:27:43",
      status: "In Progress",
    },
    {
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: 847264905,
      date: "11/14/2024 10:27:43",
      status: "Pending",
    },
    {
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: 847264905,
      date: "11/14/2024 10:27:43",
      status: "Acknowledged",
    },
  ];

  return (
    <div className="px-6 bg-gray-50 min-h-screen">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Card Request</h2>
        <p className="text-gray-500 -mt-1 mb-2">
          View and attend to card requests here.
        </p>
      </div>
      <hr className="w-full border-t border-[#98A2B3] mb-4" />

      <div className="relative w-1/3 mb-4">
        <FiSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search by branch"
          className="w-[400px] pl-10 pr-4 py-2 border border-[#D0D5DD] bg-white rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
        />
      </div>

      <hr className="w-full border-t border-[#98A2B3] mb-4" />

      <div className="mt-6 overflow-x-auto rounded-sm">
        <table className="w-full border-collapse bg-white border border-[#EAECF0]">
          <thead>
            <tr className="bg-[#F9FAFB] text-[#475467] text-left">
              <th className="p-3 border border-[#EAECF0]">Branch</th>
              <th className="p-3 border border-[#EAECF0]">Initiator</th>
              <th className="p-3 border border-[#EAECF0]">Quantity</th>
              <th className="p-3 border border-[#EAECF0]">Batch</th>
              <th className="p-3 border border-[#EAECF0]">Date Requested</th>
              <th className="p-3 border border-[#EAECF0]">Status</th>
              <th className="p-3 border border-[#EAECF0]">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-gray-900 text-sm">
                <td className="p-3 border border-[#EAECF0]">{item.branch}</td>
                <td className="p-3 border border-[#EAECF0]">
                  {item.initiator}
                </td>
                <td className="p-3 border border-[#EAECF0]">{item.quantity}</td>
                <td className="p-3 border border-[#EAECF0]">{item.batch}</td>
                <td className="p-3 border border-[#EAECF0]">{item.date}</td>
                <td className="p-3 border border-[#EAECF0]">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Ready"
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : item.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-700 border border-yellow-300"
                        : item.status === "Pending"
                        ? "bg-gray-100 text-gray-700 border border-gray-300"
                        : "bg-blue-100 text-blue-700 border border-blue-300"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3 border border-[#EAECF0] text-blue-600 cursor-pointer">
                  View
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardRequest;
