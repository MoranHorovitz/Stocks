import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  useGetFeedsQuery,
  useGetStocksQuery,
} from "./redux/services/stocks-api-service/stocks-api";
import "./App.css";

import { setStocks, updateStocksFeed } from "./redux/stocksSlice";

import AppRouter from "./router";

function App() {
  const dispatch = useDispatch();

  const { data: feedsApiData, isFetching: isFetchingFeeds } = useGetFeedsQuery(
    undefined,
    {
      refetchOnReconnect: true,
      pollingInterval: 500, // every half second
    }
  );

  const { data: stocksApiData, isFetching: isFetchingStocks } =
    useGetStocksQuery();

  // update the store (redux) when data arrives from the API - STOCKS
  useEffect(() => {
    if (!isFetchingStocks && stocksApiData?.length !== 0) {
      dispatch(setStocks(stocksApiData));
    }
  }, [stocksApiData, isFetchingStocks]);

  // update the store (redux) when data arrives from the API - FEEDS
  useEffect(() => {
    if (!isFetchingFeeds && feedsApiData && feedsApiData?.Feeds?.length !== 0) {
      dispatch(updateStocksFeed(feedsApiData.Feeds));
    }
  }, [feedsApiData, isFetchingFeeds]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
