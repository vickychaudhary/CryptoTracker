"use client";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setSymbol, setData } from '../../store/stockCryptoSlice';
import axios from 'axios';
import Tables from './tables';


export const fetchStockCryptoData = async (symbol: string) => {
    const response = await axios.get(`/api/data?symbol=${symbol}`);
    return response.data;
};

const StockCryptoTracker = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { symbol, data } = useSelector((state: RootState) => state.stockCrypto);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStockCryptoData(symbol);
            console.log(data);
            dispatch(setData(data));
        };

        fetchData(); // Initial fetch
        const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

        return () => clearInterval(interval);
    }, [symbol, dispatch]);


    console.log("VIKAS     ", data);
    return (
        <div className='bg-black'>
            <Tables data={data} />
        </div>
    );
};

export default StockCryptoTracker;
