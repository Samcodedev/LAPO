import React from 'react'
import home from '../assets/icons/home.svg'
import search from '../assets/icons/search.svg'
import bell from '../assets/icons/bell-01.svg'
import user from '../assets/icons/Avatar.svg'

import dashboard from '../assets/icons/home.svg'
import branch from '../assets/icons/building-06.svg'
import role from '../assets/icons/elements.svg'
import userGroup from '../assets/icons/user-group.svg'
import scheme from '../assets/icons/scheme.svg'
import creditCardPos from '../assets/icons/credit-card-pos.svg'
import creditCardAccept from '../assets/icons/credit-card-accept.svg'
import chartBarLine from '../assets/icons/chart-bar-line.svg'
import creditCard from '../assets/icons/credit-card.svg'
import list from '../assets/icons/list.svg'
import authorise from '../assets/icons/authorise.svg'
import map from '../assets/icons/map-01.svg'
import user2 from '../assets/icons/user.svg'

function Header({title}) {
  return (
    <div className="flex justify-between items-center bg-white border-b border-b-[#DEDEDF] py-2 px-5 mb-6">
        <div className="flex items-center gap-2">
            <img src={title==='Dashboard'? dashboard :title==='Branch'? branch :title==='Role'? role :title==='Users'? userGroup :title==='Card Scheme'? scheme :title==='Card Profile'? creditCardPos :title==='Card Request'? creditCardAccept :title==='Stock'? chartBarLine :title==='Cards'? creditCard : title==='Authorization List'? list :title==='Authorization Queue'? authorise :title==='Trail'? map : user2} alt="home" className='w-5' />
            <p className="text-sm">{title}</p>
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