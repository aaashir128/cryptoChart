import * as React from "react";
import "./TableChart.css";

export default function StickyHeadTable({ data }) {
  return (
    <div className="table">
      <div className="tableData">{data?.name}</div>
      <div className="tableData">{(data?.quote.USD.price).toFixed(2)}</div>
      <div className="tableData">
        {data?.quote.USD.percent_change_1h.toFixed(2)}
      </div>
      <div className="tableData">
        {data?.quote.USD.percent_change_24h.toFixed(2)}
      </div>
      <div className="tableData">
        {data?.quote.USD.percent_change_24h.toFixed(2)}
      </div>
    </div>
  );
}
