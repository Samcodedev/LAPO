import React, { useState, useEffect } from 'react';
import AddProfile from './AddProfile';

function ProfileDetails({ editingCard, setSidebarSelected }) {
  const [formData, setFormData] = useState({
    cardName: '',
    cardScheme: '',
    description: '',
    branchBlacklist: '',
    blacklist: false,
    binPrefix: '',
    expiration: '',
    currency: 'NGN',
    fee: null
  });

  const [fees, setFees] = useState([]);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isAddProfileOpen, setIsAddProfileOpen] = useState(false);

  useEffect(() => {
    if (editingCard) {
      setFormData({
        cardName: editingCard.cardName || '',
        cardScheme: editingCard.cardScheme || '',
        description: editingCard.description || '',
        branchBlacklist: editingCard.branchBlacklist || '',
        blacklist: editingCard.blacklist || false,
        binPrefix: editingCard.binPrefix || '',
        expiration: editingCard.expiration ? editingCard.expiration.split('T')[0] : '',
        currency: editingCard.currency || 'NGN',
        fee: editingCard.fee || null
      });
      if (editingCard.fee) {
        setFees([editingCard.fee]);
      }
    }
  }, [editingCard]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.cardName.trim()) newErrors.cardName = "Card name is required";
    if (!formData.cardScheme.trim()) newErrors.cardScheme = "Card scheme is required";
    if (!formData.binPrefix.trim()) newErrors.binPrefix = "BIN prefix is required";
    if (!formData.currency.trim()) newErrors.currency = "Currency is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (!validateForm()) {
        setMessage({ text: "Please fill in all required fields", type: "error" });
        return;
      }

      setIsLoading(true);
      setMessage({ text: "", type: "" });

      const token = localStorage.getItem('LAPO-ACCESS-TOKEN');
      
      const dataToSend = {
        ...formData,
        fee: fees[0] || null
      };

      if (editingCard) {
        const response = await fetch(`https://lapo-back-end.onrender.com/api/card/${editingCard._id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(dataToSend),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Failed to update card');
        }
        
        setMessage({ text: data.message || "Card updated successfully!", type: "success" });
        setTimeout(() => setSidebarSelected('Card Profile'), 1500);
      } else {
        const response = await fetch("https://lapo-back-end.onrender.com/api/card/", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(dataToSend),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message || 'Failed to create card');
        }
        
        setMessage({ text: data.message || "Card created successfully!", type: "success" });
        setTimeout(() => setSidebarSelected('Card Profile'), 1500);
      }
    } catch (error) {
      console.error("Error saving card:", error);
      setMessage({ text: error.message || "Failed to save card profile", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Function to handle adding new fee
  const handleAddFee = (feeData) => {
    setFees([feeData]); // Update fees array
    setFormData(prev => ({
      ...prev,
      fee: feeData // Update formData.fee
    }));
    setMessage({ text: "Fee added successfully!", type: "success" });
  };

  return (
    <div className='p-5'>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 -mt-6">
          <h2 className="text-xl font-bold mb-2">
            {editingCard ? 'Edit Profile' : 'Create Profile'}
          </h2>
          <p className="text-gray-500 -mt-1 mb-6">Fill in profile details and add card fee.</p>
          
          {message.text && (
            <div className={`mb-4 p-3 rounded ${
              message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}>
              {message.text}
            </div>
          )}
        </div>
        <div className='border border-[#E2E2E2] p-5 rounded-xl bg-white'>
          <h2 className="text-lg font-semibold mb-3 -mt-1.5">Profile Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className='mr-25'>
              <label className="block text-sm text-[#344054] font-medium">Card Name*</label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                placeholder="Enter card name"
                className={`w-full border ${errors.cardName ? 'border-red-500' : 'border-[#D0D5DD]'} rounded-md p-2 px-3 mt-1`}
                required
              />
              {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
            </div>
            <div className='mr-25'>
              <label className="block text-sm text-[#344054] font-medium">Bin Prefix*</label>
              <input
                type="text"
                name="binPrefix"
                value={formData.binPrefix}
                onChange={handleChange}
                placeholder="00000000"
                className={`w-full border ${errors.binPrefix ? 'border-red-500' : 'border-[#D0D5DD]'} rounded-md p-2 px-3 mt-1`}
                required
              />
              {errors.binPrefix && <p className="text-red-500 text-xs mt-1">{errors.binPrefix}</p>}
            </div>
            <div className='mr-25'>
              <label className="block text-sm text-[#344054] font-medium">Card Scheme*</label>
              <select
                name="cardScheme"
                value={formData.cardScheme}
                onChange={handleChange}
                className={`w-full border ${errors.cardScheme ? 'border-red-500' : 'border-[#D0D5DD]'} rounded-md p-2 px-3 mt-1`}
                required
              >
                <option value="">Select Card Scheme</option>
                <option value="Verve">Verve</option>
              </select>
              {errors.cardScheme && <p className="text-red-500 text-xs mt-1">{errors.cardScheme}</p>}
            </div>
            <div className='mr-25'>
              <label className="block text-sm text-[#344054] font-medium">Expiration*</label>
              <input
                type="date"
                name="expiration"
                value={formData.expiration}
                onChange={handleChange}
                placeholder="0"
                className="w-full border rounded-md border-[#D0D5DD] px-3 p-2 mt-1"
              />
            </div>
            <div className='mr-25'>
              <label className="block text-sm text-[#344054] font-medium">Description</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded-md border-[#D0D5DD] px-3 p-2 mt-1"
              />
            </div>
            <div className='mr-25'>
              <label className="block text-sm text-[#344054] font-medium">Currency*</label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full border rounded-md border-[#D0D5DD] px-3 p-2 mt-1"
              >
                <option>NGN</option>
              </select>
            </div>
            <div className='mr-25'>
              <label className="block text-sm text-[#344054] font-medium">Branch Blacklist</label>
              <select
                name="branchBlacklist"
                value={formData.branchBlacklist}
                onChange={handleChange}
                className="w-full border rounded-md border-[#D0D5DD] px-3 p-2 mt-1"
              >
                <option>Head Office</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mb-6 border border-[#E2E2E2] p-5 rounded-xl bg-white mt-5">
          <h2 className="text-lg font-semibold mb-3 -mt-2">Fees</h2>
          <button 
            type="button"
            onClick={() => setIsAddProfileOpen(true)} 
            className="bg-[#014DAF] text-white px-4 py-2 rounded-md mb-3 flex items-center cursor-pointer"
          >
            <span className="mr-2">+</span> Add Fee
          </button>
          <div className="border border-[#EAECF0] rounded-md overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#F9FAFB]">
                <tr>
                  {[
                    "Name",
                    "Value",
                    "Frequency",
                    "Currency",
                    "Time",
                    "Account Pad",
                    "Account",
                  ].map((heading) => (
                    <th key={heading} className="p-3 border font-normal text-[#475467] border-[#EAECF0]">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, index) => (
                  <tr key={index}>
                    <td className="p-3 border border-[#EAECF0]">{fee.feeName}</td>
                    <td className="p-3 border border-[#EAECF0]">{fee.value}</td>
                    <td className="p-3 border border-[#EAECF0]">{fee.frequency}</td>
                    <td className="p-3 border border-[#EAECF0]">{fee.currency}</td>
                    <td className="p-3 border border-[#EAECF0]">{fee.time}</td>
                    <td className="p-3 border border-[#EAECF0]">{fee.accountPad}</td>
                    <td className="p-3 border border-[#EAECF0]">{fee.account}</td>
                  </tr>
                ))}
                {fees.length === 0 && (
                  <tr>
                    <td colSpan="7" className="p-3 text-center text-gray-500">
                      No fees added yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <button 
          type="submit"
          disabled={isLoading}
          className={`bg-[#014DAF] text-white px-24 py-3 rounded-md mb-3 flex items-center cursor-pointer ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Saving...' : (editingCard ? 'Update Profile' : 'Create Profile')}
        </button>
        
        <AddProfile 
          isOpen={isAddProfileOpen}
          onClose={() => setIsAddProfileOpen(false)}
          onAddFee={handleAddFee}
        />
      </form>
    </div>
  );
}

export default ProfileDetails;