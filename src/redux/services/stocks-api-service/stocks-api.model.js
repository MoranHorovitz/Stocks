import { z } from "zod";

const StockResponse = z.object({
  Id: z.number(),
  Name: z.string(),
  Symbol: z.string(),
  PrecisionDigit: z.number(),
});

export const StocksResponseDto = z.array(StockResponse);

const FeedsResponse = z.object({
  StockId: z.number(),
  SellPrice: z.number() | z.string(),
  BuyPrice: z.number() | z.string(),
});

export const FeedsResponseDto = z.object({
  Feeds: z.array(FeedsResponse),
  LastUpdate: z.string(),
});
