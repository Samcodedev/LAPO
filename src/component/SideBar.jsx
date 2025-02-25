import React, { useState, useEffect } from 'react'
import LAPO from '../assets/LAPO_Logo_2022-removebg-preview 1.png'
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
import user from '../assets/icons/user.svg'
import logout from '../assets/icons/logout.svg'
import Cardinfra from '../assets/icons/cardinfra logo.png'







function SideBar({setSidebarSelected}) {
    const [selected, setSelected] = useState('Dashboard')

    // const handleSidebarSelected = (selected) => {
        
    // }
    useEffect(() => {
        setSidebarSelected(selected)   
        console.log(selected)
        // handleSidebarSelected(selected)
    }, [selected])


  return (
    <div className="w-64 bg-white p-4 border-r border-r-[#DEDEDF]">
        <div className="flex items-center mb-8">
            <img src={LAPO} alt="LAPO Logo" className="mr-2" width="auto" height="40" />
        </div>
        <nav>
            <ul>
                <li className="">
                    <div onClick={()=> setSelected('Dashboard')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Dashboard'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={dashboard} alt="home" className='w-5' /> 
                        <p>Dashboard</p> 
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Branch')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Branch'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={branch} alt="branch" className='w-5' /> 
                        <p>Branch</p>
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Role')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Role'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={role} alt="role" className='w-5' /> 
                        <p>Role</p>
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Users')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Users'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={userGroup} alt="users" className='w-5' /> 
                        <p>Users</p>
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Card Scheme')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Card Scheme'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={scheme} alt="card-scheme" className='w-5' />
                        <p>Card Scheme</p>
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Card Profile')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Card Profile'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={creditCardPos} alt="card-profile" className='w-5' />
                        <p>Card Profile</p>
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Card Request')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Card Request'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={creditCardAccept} alt="card-request" className='w-5' />
                        <p>Card Request</p>
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Stock')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Stock'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={chartBarLine} alt="stock" className='w-5' />
                        <p>Stock</p>
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Cards')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Cards'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={creditCard} alt="cards" className='w-5' />
                        <p>Cards</p>
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Authorization List')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Authorization List'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={list} alt="auth-list" className='w-5' />
                        <p>Authorization List</p>
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Authorization Queue')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Authorization Queue'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={authorise} alt="auth-queue" className='w-5' />
                        <p>Authorization Queue</p>
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Trail')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Trail'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={map} alt="trail" className='w-5' />
                        <p>Trail</p>
                    </div>
                </li>
                <li className="">
                    <div onClick={()=> setSelected('Account')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Account'? 'text-blue-600 bg-[#F6F6F6] border-[#E2E2E2]' : 'border-[transparent]'}`}>
                        <img src={user} alt="account" className='w-5' />
                        <p>Account</p>
                    </div>
                </li>
            </ul>
        </nav>
        <div className="mt-40">
            <div onClick={()=> setSelected('Logout')} className={`flex items-center gap-2.5 py-3 px-4 border rounded-md cursor-pointer ${selected==='Logout'? 'text-[#cc0707] bg-[#ffefef] border-[#cc0707]' : 'border-[transparent]'}`}>
                <img src={logout} alt="account" className='w-5' />
                <p>Logout</p>
            </div>
            <p className='text-sm text-[#808080] mt-10 ml-5'>POWERED BY</p>
            <div className="text-left ml-5">
                <img src={Cardinfra} alt="Cardinfra Logo" className="w-3/6" />
            </div>
        </div>
    </div>
  )
}

export default SideBar