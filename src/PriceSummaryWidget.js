import React from 'react';

const PriceSummaryWidget = ({ stocks }) => {
  const prices = stocks.map(stock => stock.closingPrice);
  const averagePrice = (prices.reduce((sum, price) => sum + price, 0) / prices.length).toFixed(2);
  const highestPrice = Math.max(...prices).toFixed(2);
  const lowestPrice = Math.min(...prices).toFixed(2);

  return (
    <div className="price-summary-widget">
      <h2>Price Summary</h2>
      <p><strong>Average Price:</strong> ${averagePrice}</p>
      <p><strong>Highest Price:</strong> ${highestPrice}</p>
      <p><strong>Lowest Price:</strong> ${lowestPrice}</p>
    </div>
  );
};

export default PriceSummaryWidget;
