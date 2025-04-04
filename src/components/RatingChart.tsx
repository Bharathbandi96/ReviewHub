import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface RatingChartProps {
  data: { month: string; rating: number }[];
}

export function RatingChart({ data }: RatingChartProps) {
  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="month" 
            angle={-45}
            textAnchor="end"
            height={60}
            interval={0}
            tick={{ fontSize: 14 }}
          />
          <YAxis 
            domain={[0, 5]}
            tick={{ fontSize: 14 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          />
          <Line
            type="monotone"
            dataKey="rating"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ fill: '#3B82F6', r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}