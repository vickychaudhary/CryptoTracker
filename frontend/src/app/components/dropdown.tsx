"use client";
import React from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setSymbol } from '../../store/stockCryptoSlice';
import { Space_Mono } from 'next/font/google'; // Import font if needed

const spaceMono = Space_Mono({ subsets: ['latin'], weight: '700', style: 'normal' });


const Dropdown = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { symbol } = useSelector((state: RootState) => state.stockCrypto);
    console.log("SYMBOL ::: ", symbol);
    const handleSymbolChange = (event: SelectChangeEvent<string>) => {
        const newSymbol = event.target.value;
        dispatch(setSymbol(newSymbol));
    };

    return (
        <div>
            <FormControl className='ml-3 bg-gray-300 text-white min-w-[200px] rounded-md border-transparent'>
                <Select
                    className='font-bold border-transparent border-gray-400'
                    id="demo-simple-select"
                    value={symbol}
                    label="Crypto"
                    onChange={handleSymbolChange}
                >
                    <MenuItem value={'BTC'}><span className={spaceMono.className}>Bitcoin</span></MenuItem>
                    <MenuItem value={'ETH'}><span className={spaceMono.className}>Ethereum</span></MenuItem>
                    <MenuItem value={'USDT'}><span className={spaceMono.className}>Tether</span></MenuItem>
                    <MenuItem value={'SOL'}><span className={spaceMono.className}>Solana</span></MenuItem>
                    <MenuItem value={'BNB'}><span className={spaceMono.className}>Binance</span></MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Dropdown;
