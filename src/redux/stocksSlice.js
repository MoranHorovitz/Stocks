import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stocks: {},
};

export const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    setStocks: (state, { payload }) => {
      state.stocks = payload.reduce((all, item) => {
        all[item.Id] = item;
        return all;
      }, {});
    },
    updateStocksFeed: (state, { payload }) => {
      const updatedStocks = { ...state.stocks };
      for (const feed of payload) {
        if (
          !(feed.StockId in updatedStocks) ||
          Number.isNaN(feed.BuyPrice) ||
          Number.isNaN(feed.SellPrice) ||
          Math.abs(feed.BuyPrice) > Number.MAX_SAFE_INTEGER ||
          Math.abs(feed.SellPrice) > Number.MAX_SAFE_INTEGER
        )
          continue;
        //add rate to array if not equal to last one added:

        if (!updatedStocks[feed.StockId].rates) {
          updatedStocks[feed.StockId].rates = [];
        }
        const lastAddedRate = updatedStocks[feed.StockId].rates[0];
        const buyPrice = Number(
          feed.BuyPrice.toFixed(updatedStocks.PrecisionDigit)
        );
        const sellPrice = Number(
          feed.SellPrice.toFixed(updatedStocks.PrecisionDigit)
        );
        const diff = feed.SellPrice - feed.BuyPrice;

        if (
          lastAddedRate?.BuyPrice !== buyPrice ||
          lastAddedRate?.SellPrice !== sellPrice
        ) {
          updatedStocks[feed.StockId].rates.unshift({
            BuyPrice: buyPrice,
            SellPrice: sellPrice,
            diff,
          });
        }
      }
      state.stocks = updatedStocks;
    },
  },
});

export const selectStocks = (store) => store.stocksReducer.stocks;

export const { setStocks, updateStocksFeed } = stocksSlice.actions;

export default stocksSlice.reducer;
