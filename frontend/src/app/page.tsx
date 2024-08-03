import * as React from 'react';
// import StockCryptoTracker from '../app/components/StockCryptoTracker'
// import Dropdown from './components/dropdown';
import dynamic from 'next/dynamic';
import { Space_Mono } from 'next/font/google';
const StockCryptoTracker = dynamic(() => import('./components/StockCryptoTracker'), { ssr: false });
const Dropdown = dynamic(() => import('./components/dropdown'), { ssr: false });

const spaceMono = Space_Mono({ subsets: ['latin'], weight: "400", style: 'normal' });
const page = () => {

  return (
    <div className="bg-white h-screen ">
      <div className='py-4 bg-black'>
        <Dropdown />
      </div>

      <StockCryptoTracker />
    </div >
  )
}

export default page
