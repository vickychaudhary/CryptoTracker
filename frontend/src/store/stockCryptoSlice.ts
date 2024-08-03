import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface StockCryptoState {
  symbol: string;
  data: any[];
}

const initialState: StockCryptoState = {
  symbol: "BTC",
  data: [],
};

const stockCryptoSlice = createSlice({
  name: "stockCrypto",
  initialState,
  reducers: {
    setSymbol(state, action: PayloadAction<string>) {
      state.symbol = action.payload;
    },
    setData(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
    },
  },
});

export const { setSymbol, setData } = stockCryptoSlice.actions;
export default stockCryptoSlice.reducer;
