import React, { useState } from 'react';
import Select from 'react-select';

const PriceComparisonWidget = ({ stocks, onSelectionChange }) => {
  const [comparisonStocks, setComparisonStocks] = useState([]);

  // Convert stocks to options format for react-select
  const options = stocks.map(stock => ({
    value: stock.symbol,
    label: stock.symbol
  }));

  const handleSelectChange = (selectedOptions) => {
    setComparisonStocks(selectedOptions || []);
    onSelectionChange(selectedOptions || []);
  };

  // Filter selected stocks to get detailed information
  const selectedStockDetails = stocks.filter(stock =>
    comparisonStocks.some(option => option.value === stock.symbol)
  );

  return (
    <div className="price-comparison-widget">
      <h2>Price Comparison</h2>
      <div className="comparison-selection">
        <Select
          isMulti
          options={options}
          value={comparisonStocks}
          onChange={handleSelectChange}
          placeholder="Select stocks..."
        />
      </div>
      {selectedStockDetails.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {selectedStockDetails.map(stock => (
              <tr key={stock.symbol}>
                <td>{stock.symbol}</td>
                <td>{stock.settlementPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PriceComparisonWidget;






/*

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
*/
