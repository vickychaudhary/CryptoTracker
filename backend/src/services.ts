import axios, { AxiosRequestConfig } from "axios";
import dotenv from "dotenv";
import { BTCModel, ETHModel, SOLModel, BNBModel, USDTModel } from "./models";
import mongoose from "mongoose";
dotenv.config();

export async function fetchAndSaveCryptoData() {
  const apiKey = process.env.LIVECOINWATCH_API_KEY;
  const options = {
    method: "POST",
    url: "https://api.livecoinwatch.com/coins/list",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
    },
    data: {
      currency: "USD",
      sort: "rank",
      order: "ascending",
      offset: 0,
      limit: 5,
      meta: true,
    },
  };

  try {
    const response = await axios.request(options);
    const cryptoData = response.data;

    // Create a new document with an array of cryptos
    const btcCryptoData = new BTCModel({
      name: cryptoData[0].name,
      symbol: cryptoData[0].symbol,
      rank: cryptoData[0].rank,
      rate: cryptoData[0].rate,
      alltimeHighUSD: cryptoData[0].allTimeHighUSD,
      totalSupply: cryptoData[0].totalSupply,
      maxSupply: cryptoData[0].maxSupply,
      volume: cryptoData[0].volume,
      cap: cryptoData[0].cap,
      code: cryptoData[0].code,
      image: cryptoData[0].png64,
    });

    await btcCryptoData.save();

    const ethCryptoData = new ETHModel({
      name: cryptoData[1].name,
      symbol: cryptoData[1].symbol,
      rank: cryptoData[1].rank,
      rate: cryptoData[1].rate,
      alltimeHighUSD: cryptoData[1].allTimeHighUSD,
      totalSupply: cryptoData[1].totalSupply,
      maxSupply: cryptoData[1].maxSupply,
      volume: cryptoData[1].volume,
      cap: cryptoData[1].cap,
      code: cryptoData[1].code,
      image: cryptoData[1].png64,
    });
    await ethCryptoData.save();

    const usdtCryptoData = new USDTModel({
      name: cryptoData[2].name,
      symbol: cryptoData[2].symbol,
      rank: cryptoData[2].rank,
      rate: cryptoData[2].rate,
      alltimeHighUSD: cryptoData[2].allTimeHighUSD,
      totalSupply: cryptoData[2].totalSupply,
      maxSupply: cryptoData[2].maxSupply,
      volume: cryptoData[2].volume,
      cap: cryptoData[2].cap,
      code: cryptoData[2].code,
      image: cryptoData[2].png64,
    });
    await usdtCryptoData.save();

    const bnbCryptoData = new BNBModel({
      name: cryptoData[3].name,
      symbol: cryptoData[3].symbol,
      rank: cryptoData[3].rank,
      rate: cryptoData[3].rate,
      alltimeHighUSD: cryptoData[3].allTimeHighUSD,
      totalSupply: cryptoData[3].totalSupply,
      maxSupply: cryptoData[3].maxSupply,
      volume: cryptoData[3].volume,
      cap: cryptoData[3].cap,
      code: cryptoData[3].code,
      image: cryptoData[3].png64,
    });
    await bnbCryptoData.save();

    const solCryptoData = new SOLModel({
      name: cryptoData[4].name,
      symbol: cryptoData[4].symbol,
      rank: cryptoData[4].rank,
      rate: cryptoData[4].rate,
      alltimeHighUSD: cryptoData[4].allTimeHighUSD,
      totalSupply: cryptoData[4].totalSupply,
      maxSupply: cryptoData[4].maxSupply,
      volume: cryptoData[4].volume,
      cap: cryptoData[4].cap,
      code: cryptoData[4].code,
      image: cryptoData[4].png64,
    });
    await solCryptoData.save();

    console.log("Crypto data saved to MongoDB");
  } catch (error) {
    console.error("Error fetching crypto data:", error);
  }
}

// fetchAndSaveCryptoData();
