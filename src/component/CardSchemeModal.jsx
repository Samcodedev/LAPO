import React, { useState } from "react";
import addFolder from "../assets/icons/addFolder.svg";
import { FiX, FiCreditCard } from "react-icons/fi";

const CardSchemeModal = ({ isOpen, onClose }) => {
  const [schemeName, setSchemeName] = useState("Verve");
  const [panLength, setPanLength] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000c7] backdrop-blur-xs bg-opacity-10 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center border-b border-[#EAECF0] p-6">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="border border-[#EAECF0] rounded-lg p-2.5 py-3">
              <img src={addFolder} alt="addFolder" />
            </div>

            <div className="flex flex-col">
              <h2 className="text-lg font-bold">Add Card Scheme</h2>
              <p className="text-sm text-gray-500">
                Fill in scheme name and PAN length.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FiX className="text-xl cursor-pointer" />
          </button>
        </div>

        <div className="mt-4 space-y-3 p-6">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Scheme Name*
            </label>
            <input
              type="text"
              value={schemeName}
              onChange={(e) => setSchemeName(e.target.value)}
              className="w-full p-2 border border-[#D0D5DD] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              PAN Length
            </label>
            <select
              value={panLength}
              onChange={(e) => setPanLength(Number(e.target.value))}
              className="w-full p-2 border border-[#D0D5DD] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Array.from({ length: 20 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-6 border-t border-[#EAECF0]">
          <button className="w-full bg-[#014DAF] text-white py-2 rounded-md cursor-pointer transition">
            Add Scheme
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSchemeModal;
