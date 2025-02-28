import React, { useState, useEffect } from 'react';
import { FiTrash2, FiEdit2, FiSearch, FiPlus } from "react-icons/fi";

function CardProfile({ setSidebarSelected }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState({ text: "", type: "" });

  // Fetch all cards
  const fetchCards = async () => {
    try {
      setIsLoading(true);
      setMessage({ text: "", type: "" });
      
      const token = localStorage.getItem('LAPO-ACCESS-TOKEN');
      const response = await fetch("https://lapo-back-end.onrender.com/api/card/", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch cards');
      }
      
      setCards(data);
    } catch (error) {
      console.error("Error fetching cards:", error);
      setMessage({ text: error.message || "Error fetching cards", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  // Delete card
  const handleDelete = async (cardId) => {
    if (window.confirm("Are you sure you want to delete this card?")) {
      try {
        setMessage({ text: "", type: "" });
        const token = localStorage.getItem('LAPO-ACCESS-TOKEN');
        const response = await fetch(`https://lapo-back-end.onrender.com/api/card/${cardId}`, {
          method: "DELETE",
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to delete card');
        }

        setMessage({ text: "Card deleted successfully!", type: "success" });
        fetchCards(); // Refresh the list
      } catch (error) {
        console.error("Error deleting card:", error);
        setMessage({ text: error.message || "Error deleting card", type: "error" });
      }
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="px-6 bg-gray-50 min-h-screen">
        <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Card Profile</h2>
            <p className="text-gray-500 -mt-1 mb-2">Create, view and edit card profiles here.</p>
        </div>
        <hr className="w-full border-t border-[#98A2B3] mb-4" />

        {message.text && (
          <div className={`mb-4 p-3 rounded ${
            message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {message.text}
          </div>
        )}

        <div className="flex justify-between items-center mb-4">
            <div className="relative w-1/3">
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search by card name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-[400px] pl-10 pr-4 py-2 border border-[#D0D5DD] bg-white rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
            </div>
            <button
                onClick={() => setSidebarSelected('Create Profile')}
                className="bg-[#014DAF] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#014DAF] cursor-pointer"
            >
                <FiPlus /> Add Profile
            </button>
        </div>

        <hr className="w-full border-t border-[#98A2B3] mb-4" />

        <div className="bg-white rounded-sm overflow-hidden">
            {isLoading ? (
                <div className="p-4 text-center">Loading...</div>
            ) : cards.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                    No cards found. Add a new card profile to get started.
                </div>
            ) : (
                <table className="w-full border-collapse">
                <thead className="bg-[#F9FAFB] font-extralight text-[#475467] border border-[#EAECF0] text-left">
                    <tr>
                    <th className="p-3 border-r border-[#EAECF0]">
                        Card Name
                    </th>
                    <th className="p-3 border-r border-[#EAECF0]">
                        Currency
                    </th>
                    <th className="p-3 border-r border-[#EAECF0]">
                        Expiration
                    </th>
                    <th className="p-3 border-r border-[#EAECF0]">
                        Bin Prefix
                    </th>
                    <th className="p-3 border-r border-[#EAECF0]">
                        Date Created
                    </th>
                    <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cards
                        .filter((card) =>
                            card?.cardName?.toLowerCase?.()?.includes(searchTerm?.toLowerCase?.() || '') || false
                        )
                        .map((card) => (
                            <tr key={card._id} className="border border-[#EAECF0]">
                                <td className="p-3 border-r border-[#EAECF0]">{card.cardName || 'N/A'}</td>
                                <td className="p-3 border-r border-[#EAECF0]">{card.currency || 'N/A'}</td>
                                <td className="p-3 border-r border-[#EAECF0]">{card.expiration || 'N/A'}</td>
                                <td className="p-3 border-r border-[#EAECF0]">{card.binPrefix || 'N/A'}</td>
                                <td className="p-3 border-r border-[#EAECF0]">
                                    {new Date(card.createdAt).toLocaleString() || 'N/A'}
                                </td>
                                <td className="p-3 flex gap-3">
                                    <button 
                                        className="text-[#475467]"
                                        onClick={() => handleDelete(card._id)}
                                    >
                                        <FiTrash2 />
                                    </button>
                                    <button 
                                        className="text-[#475467]"
                                        onClick={() => setSidebarSelected('Create Profile', card)}
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
    </div>
  )
}

export default CardProfile