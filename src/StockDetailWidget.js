import React, { useState } from 'react';

const StockDetailWidget = ({ stocks }) => {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleRowClick = (stock) => {
    setSelectedStock(stock);
  };

  return (
    <div className="stock-detail-widget">
      <h2>Stock Details</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Bid Price</th>
            <th>Price</th>
            <th>Offer Price</th>
            <th>Volume</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.symbol} onClick={() => handleRowClick(stock)}>
              <td>{stock.symbol}</td>
              <td>{stock.bidPrice}</td>
              <td>{stock.closingPrice}</td>
              <td>{stock.offerPrice}</td>
              <td>{stock.volume}</td>
              <td>{stock.volumeAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedStock && (
        <div className="stock-detail">
          <h3>{selectedStock.symbol} Details</h3>
          <p><strong>Bid Price:</strong> {selectedStock.bidPrice}</p>
          <p><strong>Price:</strong> {selectedStock.closingPrice}</p>
          <p><strong>Offer Price:</strong> {selectedStock.offerPrice}</p>
          <p><strong>Volume:</strong> {selectedStock.volume}</p>
          <p><strong>Amount:</strong> {selectedStock.volumeAmount}</p>
        </div>
      )}
    </div>
  );
};

export default StockDetailWidget;
