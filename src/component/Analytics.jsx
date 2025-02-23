import React from 'react'
import AnalyticsCard from './AnalyticsCard'
import creditCardCheck from '../assets/icons/credit-card-check.svg'
import creditCardEdit from '../assets/icons/credit-card-edit.svg'
import bankNote from '../assets/icons/bank-note-01.svg'
import hourglass from '../assets/icons/hourglass-03.svg'



function Analytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <AnalyticsCard title="Total Active Cards" value="26,478" icon={creditCardCheck} change="+9%" time="this month" />
        <AnalyticsCard title="Total Personalized Cards" value="15,703" icon={creditCardEdit} change="+8.5%" time="this month" />
        <AnalyticsCard title="Today's Revenue" value="₦9.3M" icon={bankNote} change="+6%" time="vs yesterday" />
        <AnalyticsCard title="Pending Requests" value="38" icon={hourglass} time="Requires attention" />
    </div>
  )
}

export default Analytics