import { Rate } from "./StockRate.style";

export default ({ rate }) => (
  <Rate>
    <span>
      <b>BuyPrice:</b> {rate.BuyPrice}
    </span>
    <span>
      <b>SellPrice:</b> {rate.SellPrice}
    </span>
    <span>
      <b>Diff:</b> {rate.SellPrice - rate.BuyPrice}
    </span>
  </Rate>
);
