import React, { useState } from 'react';

const PriceComparisonWidget = ({ stocks }) => {
  const [comparisonStocks, setComparisonStocks] = useState([]);

  const handleCheckboxChange = (stock) => {
    setComparisonStocks(prev =>
      prev.includes(stock)
        ? prev.filter(s => s !== stock)
        : [...prev, stock]
    );
  };

  return (
    <div className="price-comparison-widget">
      <h2>Price Comparison</h2>
      <div className="comparison-selection">
        {stocks.map(stock => (
          <div key={stock.symbol}>
            <input
              type="checkbox"
              checked={comparisonStocks.includes(stock)}
              onChange={() => handleCheckboxChange(stock)}
            />
            <label>{stock.symbol}</label>
          </div>
        ))}
      </div>
      {comparisonStocks.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {comparisonStocks.map(stock => (
              <tr key={stock.symbol}>
                <td>{stock.symbol}</td>
                <td>{stock.closingPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PriceComparisonWidget;
