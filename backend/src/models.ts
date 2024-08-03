import mongoose from "mongoose";

const { Schema, model } = mongoose;

const cryptoSchema = new Schema(
  {
    name: String,
    symbol: String,
    rank: Number,
    rate: Number,
    alltimeHighUSD: Number,
    totalSupply: Number,
    maxSupply: Number,
    volume: Number,
    cap: Number,
    code: String,
    image: String,
  },
  { timestamps: true }
);

export const BTCModel = model("Crypto", cryptoSchema, "BTC");
export const ETHModel = model("Crypto", cryptoSchema, "ETH");
export const SOLModel = model("Crypto", cryptoSchema, "SOL");
export const BNBModel = model("Crypto", cryptoSchema, "BNB");
export const USDTModel = model("Crypto", cryptoSchema, "USDT");

// export default { BTCModel, ETHModel, SOLModel, BNBModel, TETHModel };
