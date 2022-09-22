import React from "react";
import "./CryptoChart.css";

function CryptoChart() {
  return (
    <div className="table">
      <h3 className="tableData">Name</h3>
      <h3 className="tableData">Price</h3>
      <h3 className="tableData">1h %</h3>
      <h3 className="tableData">24h %</h3>
      <h3 className="tableData">7d %</h3>
    </div>
  );
}

export default CryptoChart;
