import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function LineCharts({ title }) {
    const data = [
      { name: "Mon", income: 55 },
      { name: "Tue", income: 30 },
      { name: "Wed", income: 45 },
      { name: "Thu", income: 60 },
      { name: "Fri", income: 50 },
      { name: "Sat", income: 40 },
      { name: "Sun", income: 85 },
    ];
  return (
    <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="income" stroke="#00C400" strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default LineCharts