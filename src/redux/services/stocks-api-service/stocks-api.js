import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiResponseValidation } from "./api-response-validation";
import { StocksResponseDto } from "./stocks-api.model";

const baseURL = "http://localhost:3000/Api";

export const stocksApi = createApi({
  reducerPath: "stocksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: () => ({
        url: "/Stock",
      }),
      transformResponse: apiResponseValidation(StocksResponseDto),
    }),
    getFeeds: builder.query({
      query: () => ({
        url: "/Feeds",
      }),
    }),
  }),
});

export const { useGetStocksQuery, useGetFeedsQuery } = stocksApi;
