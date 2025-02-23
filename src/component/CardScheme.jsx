import React from "react";
import { FiTrash2, FiEdit2, FiSearch, FiPlus } from "react-icons/fi";

const data = [
  { scheme: "Verve", panLength: 18 },
  { scheme: "Verve", panLength: 18 },
  { scheme: "Verve", panLength: 18 },
];

const CardScheme = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Heading */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Card Scheme</h2>
        <p className="text-gray-500">Add, view and edit card schemes here.</p>
      </div>

      {/* Search and Button */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-1/3">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by scheme name"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700">
          <FiPlus /> Add Scheme
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-600 text-left">
            <tr>
              <th className="p-3">Scheme Name</th>
              <th className="p-3">PAN Length</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t">
                <td className="p-3">{row.scheme}</td>
                <td className="p-3">{row.panLength}</td>
                <td className="p-3 flex gap-3">
                  <button className="text-red-500 hover:text-red-700">
                    <FiTrash2 />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <FiEdit2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardScheme;
