export default StockRateList = (stock) => {
  return stock?.rates?.map((r) => <StockRate rate={r} />);
};
