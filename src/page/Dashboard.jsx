import React from 'react'
import Sidebar from '../component/SideBar'
import Header from '../component/Header'
import QuickAccess from '../component/QuickAccess'
import Analytics from '../component/Analytics'
import ChartCard from '../component/ChartCard'
import RecentCardRequests from '../component/RecentCardRequests'
import PieCharts from '../component/PieChart'
import LineCharts from '../component/LineCharts'
function Dashboard() {
  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-[#F8FBFF]">
            <Header />
            
            <div className="px-5 -mt-3">
              <h2 className="text-xl font-bold mb-2">Hi Nazeer, what would you like to do today?</h2>
              <p className="text-gray-500 -mt-1 mb-4">Last login: 26/11/2024  14:39:58</p>
            </div>
            <div className="px-5">
              <QuickAccess />
              <div className='flex items-center justify-between mb-3 -mt-3 gap-2'>
                <p className='text-2xl font-semibold'>Analytics</p>
                <hr className='w-full border-t border-[#E2E2E2] mt-2' />
              </div>
              <Analytics />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mx-5">
                <ChartCard title="Monthly Issuance" />
                <RecentCardRequests />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-5 mb-5">
                <LineCharts title="This Week's Income" />
                <PieCharts title="Card Status Distribution" />
            </div>
        </div>
    </div>
  )
}

export default Dashboard