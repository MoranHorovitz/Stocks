import React from "react";
import { StockWrapper, Name, Symbol } from "./Stock.styles.js";
import StockRate from "../StockRate/StockRate";

export default ({ stock, expanded }) => (
  <StockWrapper>
    <Symbol>{stock?.Symbol}</Symbol>
    <Name>{stock?.Name}</Name>
    {expanded
      ? stock?.rates?.map((rate) => <StockRate rate={rate} />)
      : stock?.rates?.length && <StockRate rate={stock?.rates[0]} />}
  </StockWrapper>
);
