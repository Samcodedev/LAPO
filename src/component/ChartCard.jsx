import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function ChartCard({ title }) {
  const data = [
    { name: "May", Personalized: 15, Instant: 35 },
    { name: "Jun", Personalized: 20, Instant: 50 },
    { name: "Jul", Personalized: 10, Instant: 20 },
    { name: "Aug", Personalized: 12, Instant: 40 },
    { name: "Sep", Personalized: 13, Instant: 30 },
    { name: "Oct", Personalized: 18, Instant: 65 },
    { name: "Nov", Personalized: 10, Instant: 60 },
  ];
  return (
    <div className="bg-white p-6 rounded-lg border border-[#E2E2E2]">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ResponsiveContainer width="100%" height={300} padding={0}>
          <BarChart data={data} barSize={40}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Personalized" fill="#014DAF" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Instant" fill="#CCE2FF" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
    </div>
  )
}

export default ChartCard