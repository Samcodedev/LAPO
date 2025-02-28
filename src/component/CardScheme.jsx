import React, { useState, useEffect } from "react";
import { FiTrash2, FiEdit2, FiSearch, FiPlus } from "react-icons/fi";
import CardSchemeModal from "./CardSchemeModal";

const CardScheme = ({ setIsModalOpen, setEditingScheme, isModalOpen, editingScheme }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [schemes, setSchemes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all schemes
  const fetchSchemes = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('LAPO-ACCESS-TOKEN');
      const response = await fetch("http://localhost:3001/api/scheme/", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log(data);
      setSchemes(data);
    } catch (error) {
      console.error("Error fetching schemes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Delete scheme
  const handleDelete = async (schemeId) => {
    if (window.confirm("Are you sure you want to delete this scheme?")) {
      try {
        const token = localStorage.getItem('LAPO-ACCESS-TOKEN');
        await fetch(`http://localhost:3001/api/scheme/${schemeId}`, {
          method: "DELETE",
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        fetchSchemes(); // Refresh the list
      } catch (error) {
        console.error("Error deleting scheme:", error);
      }
    }
  };

  // Handle edit click
  const handleEdit = (scheme) => {
    setEditingScheme(scheme);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchSchemes();
  }, []);
  
  return (
    <div className="px-6 bg-gray-50 min-h-screen">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Card Scheme</h2>
        <p className="text-gray-500 -mt-1 mb-2">
          Add, view and edit card schemes here.
        </p>
      </div>
      <hr className="w-full border-t border-[#98A2B3] mb-4" />

      <div className="flex justify-between items-center mb-4">
        <div className="relative w-1/3">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by scheme name"
            className="w-[400px] pl-10 pr-4 py-2 border border-[#D0D5DD] bg-white rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            setEditingScheme(null); // Reset editing scheme when adding new
            setIsModalOpen(true);
          }}
          className="bg-[#014DAF] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#014DAF] cursor-pointer"
        >
          <FiPlus /> Add Scheme
        </button>
      </div>

      <hr className="w-full border-t border-[#98A2B3] mb-4" />

      <div className="bg-white rounded-sm overflow-hidden">
        {isLoading ? (
          <div className="p-4 text-center">Loading...</div>
        ) : schemes.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No schemes found. Add a new scheme to get started.
          </div>
        ) : (
          <table className="w-full border-collapse">
            <thead className="bg-[#F9FAFB] font-extralight text-[#475467] border border-[#EAECF0] text-left">
              <tr>
                <th className="p-3 border-r border-[#EAECF0]">
                  Scheme Name
                </th>
                <th className="p-3 border-r border-[#EAECF0]">
                  PAN Length
                </th>
                <th className="p-3 border-r border-[#EAECF0]">
                  Created Date
                </th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {schemes
                .filter((row) =>
                  row?.schemeName?.toLowerCase?.()?.includes(searchTerm?.toLowerCase?.() || '') || false
                )
                .map((row) => (
                  <tr key={row._id} className="border border-[#EAECF0]">
                    <td className="p-3 border-r border-[#EAECF0]">
                      {row.schemeName || 'N/A'}
                    </td>
                    <td className="p-3 border-r border-[#EAECF0]">
                      {row.panLength || 'N/A'}
                    </td>
                    <td className="p-3 border-r border-[#EAECF0]">
                      {new Date(row.createdAt).toLocaleDateString() || 'N/A'}
                    </td>
                    <td className="p-3 flex gap-3">
                      <button 
                        className="text-[#475467]"
                        onClick={() => handleDelete(row._id)}
                      >
                        <FiTrash2 />
                      </button>
                      <button 
                        className="text-[#475467]"
                        onClick={() => handleEdit(row)}
                      >
                        <FiEdit2 />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
      <CardSchemeModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setEditingScheme(null);
        }}
        editingScheme={editingScheme}
        onSuccess={fetchSchemes}
      />
    </div>
  );
};

export default CardScheme;
