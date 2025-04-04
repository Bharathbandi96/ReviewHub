import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ExternalLink, Strikethrough, TrendingDown, TrendingUp } from 'lucide-react';
import type { SalesData } from '../types';

interface SalesTrendsProps {
  title: string;
  description: string;
  data: {
    platform: string;
    values: { date: string; price: number }[];
  }[];
  currentSales?: SalesData[];
}

const colors = ['#3B82F6', '#10B981', '#F59E0B'];

export function SalesTrends({ title, description, data, currentSales }: SalesTrendsProps) {
  const chartData = data[0].values.map((_, index) => {
    const point: any = { date: data[0].values[index].date };
    data.forEach((platform, i) => {
      point[platform.platform] = platform.values[index].price;
    });
    return point;
  });

  const lowestPrice = currentSales?.reduce((min, sale) => {
    const price = parseFloat(sale.price.replace(/[^0-9.]/g, ''));
    return price < min ? price : min;
  }, Infinity);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="h-64 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              {data.map((platform, index) => (
                <Line
                  key={platform.platform}
                  type="monotone"
                  dataKey={platform.platform}
                  stroke={colors[index]}
                  strokeWidth={2}
                  dot={{ fill: colors[index] }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {currentSales && (
          <div>
            <h4 className="text-lg font-semibold mb-4">Current Prices</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentSales.map((sale, index) => {
                const currentPrice = parseFloat(sale.price.replace(/[^0-9.]/g, ''));
                const isLowestPrice = currentPrice === lowestPrice;
                
                return (
                  <motion.div
                    key={sale.platform}
                    className={`p-4 rounded-lg border ${isLowestPrice ? 'border-green-500' : 'border-gray-200'}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold">{sale.platform}</h5>
                      {isLowestPrice && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          Best Price
                        </span>
                      )}
                    </div>
                    
                    <div className="text-xl font-bold mb-2 flex items-center gap-2">
                      {sale.price}
                      {sale.discount && (
                        <span className="text-sm text-red-500 font-normal flex items-center">
                          <TrendingDown size={16} className="mr-1" />
                          {sale.discount.percentage}% off
                        </span>
                      )}
                    </div>

                    {sale.discount && (
                      <div className="text-sm text-gray-500 mb-2">
                        Was: <del className='text-decoration: line-through'>{sale.discount.original}</del>
                      </div>
                    )}

                    {sale.shipping && (
                      <div className="text-sm text-gray-600 mb-2">
                        {sale.shipping}
                      </div>
                    )}

                    {sale.rating && (
                      <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                        <span>★ {sale.rating}</span>
                        <span>({sale.reviews?.toLocaleString()} reviews)</span>
                      </div>
                    )}

                    <motion.a
                      href={sale.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                      whileHover={{ x: 5 }}
                    >
                      View Deal
                      <ExternalLink size={16} />
                    </motion.a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}