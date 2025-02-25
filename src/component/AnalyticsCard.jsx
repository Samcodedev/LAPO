import React from 'react'
import arrowNarrowUpRight from '../assets/icons/arrow-narrow-up-right.svg'
import warning from '../assets/icons/alert-circle.svg'

function AnalyticsCard({ title, value, icon, change, time }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-[#E2E2E2]">
        <div className="flex flex-col items-start justify-start mb-4">
            <img src={icon} alt={title} className='w-5' />
            <h3 className="text-lg font-semibold opacity-50">{title}</h3>
        </div>
        <div className='flex items-center justify-between'>
          <div className="text-3xl font-bold">{value}</div>
          <div className="flex gap-3">
            {
              time ==='Requires attention'?
              <span className='px-2 flex items-center gap-1 rounded-md text-[#E78020]'>
                <img src={warning} alt="" className='w-4' />
                <p className='text-[#E78020]'>{time}</p>
              </span> 
              :
              <span className='bg-[#EFFAF6] text-[#29A174] px-2 flex items-center gap-1 rounded-md'>
                <img src={arrowNarrowUpRight} alt="" />{change}
              </span> 
            }
            
            <p className='text-black opacity-50'>{time ==='Requires attention'? '': time}</p>
          </div>
        </div>
        
    </div>
  )
}

export default AnalyticsCard