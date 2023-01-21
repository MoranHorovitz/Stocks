import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Stock from "../components/Stock/Stock";

import { selectStocks } from "../redux/stocksSlice";

export function StockDetails() {
  const navigate = useNavigate();
  let { id } = useParams();

  const stocks = useSelector(selectStocks);
  const stock = stocks[id];

  console.log(stocks);

  return (
    <>
      <div onClick={() => navigate(-1)}> Go Back </div>
      <Stock stock={stock} expanded={true} />
    </>
  );
}
