import React from "react";
import { FaDownload } from "react-icons/fa";
import { MdOutlineCheckCircle, MdLocalShipping } from "react-icons/md";
import { TbProgress } from "react-icons/tb";
import download from '../assets/icons/download.svg'
import progress from '../assets/icons/progress.svg'
import ready from '../assets/icons/ready.svg'
import dispatch from '../assets/icons/dispatch.svg'
import acknowledgement from '../assets/icons/acknowledgement.svg'

const CardRequestDetails = ({setIsSuccessOpen}) => {
  return (
    <div className="p-5 -mt-5">
        <div className="p-6 border border-[#E2E2E2] bg-white rounded-lg">
            <h2 className="text-xl font-semibold -mt-1 mb-4">Card Request Details</h2>
            <div className="grid grid-cols-2 gap-y-6">
                <div className="mr-25">
                    <label className="block text-[#344054] font-medium mb-1.5">Branch Name</label>
                    <input type="text" value="Corporate" disabled className="w-full py-2 px-3 border border-[#D0D5DD] text-[#101828] rounded-lg bg-[#F5F5F7]" />
                </div>
                <div className="mr-25">
                    <label className="block text-[#344054] font-medium mb-1.5">Initiator</label>
                    <input type="text" value="RootUser" disabled className="w-full py-2 px-3 border border-[#D0D5DD] text-[#101828] rounded-lg bg-[#F5F5F7]" />
                </div>
                <div className="mr-25">
                    <label className="block text-[#344054] font-medium mb-1.5">Card Type</label>
                    <input type="text" value="Classic Debit" disabled className="w-full py-2 px-3 border border-[#D0D5DD] text-[#101828] rounded-lg bg-[#F5F5F7]" />
                </div>
                <div className="mr-25">
                    <label className="block text-[#344054] font-medium mb-1.5">Card Charges</label>
                    <input type="text" value="₦1,500" disabled className="w-full py-2 px-3 border border-[#D0D5DD] text-[#101828] rounded-lg bg-[#F5F5F7]" />
                </div>
                <div className="mr-25">
                    <label className="block text-[#344054] font-medium mb-1.5">Quantity</label>
                    <input type="text" value="10" disabled className="w-full py-2 px-3 border border-[#D0D5DD] text-[#101828] rounded-lg bg-[#F5F5F7]" />
                </div>
                <div className="mr-25">
                    <label className="block text-[#344054] font-medium mb-1.5">Batch</label>
                    <input type="text" value="847264905" disabled className="w-full py-2 px-3 border border-[#D0D5DD] text-[#101828] rounded-lg bg-[#F5F5F7]" />
                </div>
                <div className="mt-4 w-full">
                    <label className="block text-[#344054] font-medium mb-1.5">Date Requested</label>
                    <p className="mt-3">11/14/2024 10:27:43</p>
                </div>
                <div className="mt-4 w-full">
                    <label className="block text-[#344054] font-medium mb-3.5">Status</label>
                    <span className="px-7 py-2 bg-[#F9FAFB] text-[#344054] border border-[#EAECF0] font-medium rounded-3xl">Pending</span>
                </div>
                {/* <div className="mr-25 flex items-center justify-between bg-amber-200">
                </div> */}
            </div>
            

            {/* Actions */}
            <h1 className="mt-12 font-medium">Actions</h1>
            <div className="mt-3 flex gap-3 flex-wrap">
                <button onClick={()=> setIsSuccessOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-[#344054] text-white rounded-lg cursor-pointer">
                <img src={download} alt="" /> Download for Production
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#B54708] opacity-50 text-white rounded-lg cursor-pointer">
                <img src={progress} alt="" /> Mark as In Progress
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#067647] text-white opacity-50 rounded-lg cursor-pointer">
                <img src={ready} alt="" /> Mark as Ready
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#8020E7] opacity-50 text-white rounded-lg cursor-pointer">
                <img src={dispatch} alt="" /> Send to Dispatch
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#014DAF] opacity-50 text-white rounded-lg cursor-pointer">
                <img src={acknowledgement} alt="" /> Mark as Acknowledged
                </button>
            </div>
            </div>
    </div>
  );
};

export default CardRequestDetails;
