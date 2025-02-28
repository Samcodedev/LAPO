import React, { useState } from 'react'
import add from "../assets/icons/add.svg";
import { FiX } from "react-icons/fi";

function AddProfile({ isOpen, onClose, onAddFee }) {
    const [formData, setFormData] = useState({
        feeName: "",
        value: 0,
        frequency: "",
        currency: "NGN",
        time: "",
        accountPad: "None",
        account: "",
        feeImpact: ""
    });

    const [errors, setErrors] = useState({});
    
    if (!isOpen) return null;

    const validateForm = () => {
        const newErrors = {};
        if (!formData.feeName) newErrors.feeName = "Fee name is required";
        if (!formData.frequency) newErrors.frequency = "Fee frequency is required";
        if (!formData.currency) newErrors.currency = "Currency is required";
        if (!formData.accountPad) newErrors.accountPad = "Account pad is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
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

    const handleSubmit = () => {
        if (validateForm()) {
            const feeData = {
                feeName: formData.feeName,
                value: Number(formData.value),
                frequency: formData.frequency,
                currency: formData.currency,
                time: formData.time,
                accountPad: formData.accountPad,
                account: formData.account
            };
            
            onAddFee(feeData);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-[#000000c7] backdrop-blur-xs bg-opacity-10 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center border-b border-[#EAECF0] p-6">
                    <div className="flex items-center gap-2 text-gray-700">
                        <div className="border border-[#EAECF0] rounded-lg p-2.5 py-3">
                            <img src={add} alt="addFolder" />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold">Add Fee</h2>
                            <p className="text-sm text-gray-500">Fill in fee details.</p>
                        </div>
                    </div>
                    <button
                        onClick={() => onClose()}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <FiX className="text-xl cursor-pointer" />
                    </button>
                </div>

                <div className="space-y-3 p-6">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Fee Name*</label>
                        <input
                            type="text"
                            name="feeName"
                            value={formData.feeName}
                            placeholder="Input fee name"
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.feeName ? 'border-red-500' : 'border-[#D0D5DD]'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.feeName && <p className="text-red-500 text-xs mt-1">{errors.feeName}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">Value</label>
                        <input
                            type="number"
                            name="value"
                            value={formData.value}
                            onChange={handleChange}
                            className="w-full p-2 border border-[#D0D5DD] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Currency */}
                    <div className="mb-4">
                        <label className="text-[#344054]">Currency*</label>
                        <div className="flex gap-4 mt-1">
                            {["NGN", "USD"].map((cur) => (
                                <label key={cur} className="flex items-center text-sm gap-2">
                                    <input
                                        type="radio"
                                        name="currency"
                                        value={cur}
                                        checked={formData.currency === cur}
                                        onChange={handleChange}
                                        className="accent-blue-500"
                                    />
                                    {cur}
                                </label>
                            ))}
                        </div>
                        {errors.currency && <p className="text-red-500 text-xs mt-1">{errors.currency}</p>}
                    </div>

                    {/* Fee Frequency */}
                    <div className="mb-4">
                        <label className="text-[#344054]">Fee Frequency*</label>
                        <div className="flex gap-4 mt-1">
                            {['One Off', 'Monthly'].map((freq) => (
                                <label key={freq} className="flex items-center text-sm gap-2">
                                    <input
                                        type="radio"
                                        name="frequency"
                                        value={freq}
                                        checked={formData.frequency === freq}
                                        onChange={handleChange}
                                        className="accent-blue-500"
                                    />
                                    {freq}
                                </label>
                            ))}
                        </div>
                        {errors.frequency && <p className="text-red-500 text-xs mt-1">{errors.frequency}</p>}
                    </div>

                    {/* Fee Impact */}
                    <div className="mb-4">
                        <label className="text-[#344054]">Fee Impact</label>
                        <div className="flex gap-4 mt-1">
                            {['Issuance', 'Pin Reissue'].map((impact) => (
                                <label key={impact} className="flex items-center text-sm gap-2">
                                    <input
                                        type="radio"
                                        name="feeImpact"
                                        value={impact}
                                        checked={formData.feeImpact === impact}
                                        onChange={handleChange}
                                        className="accent-blue-500"
                                    />
                                    {impact}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Account Pad */}
                    <div className="mb-4">
                        <label className="text-[#344054]">Account Pad*</label>
                        <div className="flex gap-4 mt-1">
                            {['None', 'Branch Code Prefix', 'Branch Code Suffix'].map((pad) => (
                                <label key={pad} className="flex items-center text-sm gap-2">
                                    <input
                                        type="radio"
                                        name="accountPad"
                                        value={pad}
                                        checked={formData.accountPad === pad}
                                        onChange={handleChange}
                                        className="accent-blue-500"
                                    />
                                    {pad}
                                </label>
                            ))}
                        </div>
                        {errors.accountPad && <p className="text-red-500 text-xs mt-1">{errors.accountPad}</p>}
                    </div>

                    {/* Account Input */}
                    <div>
                        <label className="text-[#344054]">Account</label>
                        <input
                            type="text"
                            name="account"
                            value={formData.account}
                            onChange={handleChange}
                            placeholder="Select Account"
                            className="w-full mt-1 p-2 px-3 border border-[#D0D5DD] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Time Input */}
                    <div>
                        <label className="text-[#344054]">Time</label>
                        <input
                            type="text"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            placeholder="Enter time"
                            className="w-full mt-1 p-2 px-3 border border-[#D0D5DD] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className="p-6 border-t border-[#EAECF0]">
                    <button 
                        className="w-full bg-[#014DAF] text-white py-2 rounded-md cursor-pointer transition" 
                        onClick={handleSubmit}
                    >
                        Add Fee
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddProfile