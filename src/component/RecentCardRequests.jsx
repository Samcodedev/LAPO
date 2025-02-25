import React from 'react'
import maximize from '../assets/icons/maximize-2.svg'

function RecentCardRequests() {


  const data = [
    { branch: "Corporate", type: "Instant", quantity: 10, status: "Ready", color: "bg-[#ECFDF3] border-[#ABEFC6] text-[#067647]" },
    { branch: "Corporate", type: "Personalized", quantity: 10, status: "In Progress", color: "bg-[#FFFAEB] border-[#FEDF89] text-[#B54708]" },
    { branch: "Corporate", type: "Personalized", quantity: 10, status: "Acknowledged", color: "bg-[#EFF8FF] border-[#B2DDFF] text-[#175CD3]" },
    { branch: "Corporate", type: "Instant", quantity: 10, status: "Pending", color: "bg-[#F9FAFB] border-[#EAECF0] text-[#344054]" },
  ];

  return (
    <div className="p-4 bg-white rounded-xl border border-[#E2E2E2]">
        <div className='flex items-center justify-between'>
            <h2 className="text-lg font-semibold mb-4">Recent Card Requests</h2>
            <img src={maximize} alt="maximize" />
        </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#F1F7FF] border border-[#E2E2E2] text-black opacity-50 text-left">
              <th className="p-3">Branch</th>
              <th className="p-3">Card Type</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-t border-t-[#EAECF0] text-[#475467]">
                <td className="p-3">{row.branch}</td>
                <td className="p-3">{row.type}</td>
                <td className="p-3">{row.quantity}</td>
                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-sm border font-medium ${row.color}`}>
                    {row.status}
                  </span>
                </td>
                <td className="p-3 text-blue-500 font-medium cursor-pointer hover:underline">View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentCardRequests