import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


const data = [
    { name: "Active", value: 1800, color: "#00C49F" },  // Green
    { name: "Expired", value: 300, color: "#FFBB28" },  // Yellow
    { name: "Inactive", value: 200, color: "#0088FE" },  // Blue
    { name: "Blocked", value: 100, color: "#8A2BE2" },  // Purple
    { name: "Lost", value: 50, color: "#FF4D4F" },  // Red
  ];

function PieCharts({ title }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-[#E2E2E2]">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className='flex items-center justify-center'>
            <PieChart width={400} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={100}
                    dataKey="value"
                    label={false}
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" iconType="circle" />
            </PieChart>
        </div>
        
    </div>
  )
}

export default PieCharts