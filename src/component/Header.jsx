import React from 'react'
import home from '../assets/icons/home.svg'
import search from '../assets/icons/search.svg'
import bell from '../assets/icons/bell-01.svg'
import user from '../assets/icons/Avatar.svg'

function Header() {
  return (
    <div className="flex justify-between items-center bg-white border-b border-b-[#DEDEDF] py-2 px-5 mb-6">
        <div className="flex items-center gap-2">
            <img src={home} alt="home" className='w-5' />
            <p className="text-sm">Dashboard</p>
        </div>
        
        <div className="flex items-center space-x-7">
            <div className="relative">
                <input type="text" placeholder="Search" className="border border-[#D0D5DD] rounded-full py-1 px-2 pl-10" />
                <img src={search} alt="search" className='absolute left-3 top-2.5' />
            </div>
            <div className="flex items-center space-x-7">
                <img src={bell} alt="bell" className='' />
                <img src={user} alt="user" className='' />
            </div>
        </div>
    </div>
  )
}

export default Header