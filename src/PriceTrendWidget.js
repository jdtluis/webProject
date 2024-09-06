import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const PriceTrendWidget = ({ stocks }) => {
  const data = stocks.map(stock => ({
    date: stock.date, // Assuming there's a date field
    price: stock.closingPrice
  }));

  return (
    <div className="price-trend-widget">
      <h2>Price Trend</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default PriceTrendWidget;
