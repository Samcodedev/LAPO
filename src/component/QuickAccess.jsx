import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import manageCard from '../assets/icons/Frame 1618867979.svg'
import issueInstantCard from '../assets/icons/Frame 1618867977.svg'
import issuePersonalizedCard from '../assets/icons/Frame 1618867978.svg'
import reviewCardRequests from '../assets/icons/Frame 1618867976.svg'

function QuickAccess() {
  return (
    <div className="bg-white border border-[#E2E2E2] p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold -mt-2 mb-2">Your Quick Access</h2>
        <div className="flex mt-5 space-x-4">
            <button className="flex-1 bg-[#F1F7FF] text-[#121212] font-medium py-3 px-6 rounded-lg flex items-center gap-3">
                <img src={manageCard} alt="manageCard" className='w-10' />
                <span>Manage a Card</span>
                <MdKeyboardArrowRight size={20} />
            </button>
            <button className="flex-1 bg-[#F1F7FF] text-[#121212] font-medium py-3 px-6 rounded-lg flex items-center gap-3">
                <img src={issueInstantCard} alt="issueInstantCard" className='w-10' />
                <span>Issue Instant Card</span>
                <MdKeyboardArrowRight size={20} />
            </button>
            <button className="flex-1 bg-[#F1F7FF] text-[#121212] font-medium py-3 px-6 rounded-lg flex items-center gap-3">
                <img src={issuePersonalizedCard} alt="issuePersonalizedCard" className='w-10' />
                <span>Issue Personalized Card</span>
                <MdKeyboardArrowRight size={20} />
            </button>
            <button className="flex-1 bg-[#F1F7FF] text-[#121212] font-medium py-3 px-6 rounded-lg flex items-center gap-3">
                <img src={reviewCardRequests} alt="reviewCardRequests" className='w-10' />
                <span>Review Card Requests</span>
                <MdKeyboardArrowRight size={20} />
            </button>
        </div>
    </div>
  )
}

export default QuickAccess