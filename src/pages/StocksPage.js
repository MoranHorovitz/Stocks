import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Stock from "../components/Stock/Stock";
import { useNavigate } from "react-router-dom";

import { selectStocks } from "../redux/stocksSlice";
import { Loading } from "../components/common/Loader";

export function Stocks() {
  const stocks = useSelector(selectStocks);
  const navigate = useNavigate();

  const goToStockDetails = (id) => {
    navigate(`stock/${id}`);
  };

  const stocksArr = useMemo(() => Object.values(stocks), [stocks]);

  return (
    <>
      <h1>Stocks List:</h1>
      {stocksArr ? (
        stocksArr.map((stock) => (
          <div onClick={() => goToStockDetails(stock.Id)}>
            <Stock key={stock.Id} stock={stock} />
          </div>
        ))
      ) : (
        <Loading />
      )}
    </>
  );
}
