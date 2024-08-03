import React from 'react';
import Image from 'next/image';
interface DataItem {
    name: string;
    rate: number;
    totalSupply: number;
    volume: number;
    code: string;
    cap: number;
    alltimeHighUSD: number;
    image: string;
}

interface TablesProps {
    data: DataItem[];
}

const formatNumber = (num: number): string => {
    if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + ' B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + ' M';
    } else {
        return num.toString();
    }
};
const Tables: React.FC<TablesProps> = ({ data }) => {
    console.log("TABLE DATA:", data);

    return (
        <div>

            <div className="">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="block w-full overflow-x-auto">
                        <table className="bg-black items-center w-full border-collapse">
                            <thead>
                                <tr>
                                    {/* <th className="px-6 bg-gray-300 text-black align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Code
                                    </th> */}
                                    <th className="px-6  bg-gray-300 text-black align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Name
                                    </th>
                                    <th className="px-6  bg-gray-300 text-black align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Rate
                                    </th>
                                    <th className="px-6  bg-gray-300 text-black align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        All-time High
                                    </th>
                                    <th className="px-6  bg-gray-300 text-black align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Cap
                                    </th>
                                    <th className="px-6  bg-gray-300 text-black align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Volume 24h
                                    </th>
                                    <th className="px-6  bg-gray-300 text-black align-middle border border-solid border-blueGray-100 py-3 text-md uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Total Supply
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr className='hover-line' key={index}>
                                        {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-white">
                                            <Image alt="CRYPTO" src={item.image} width={30} height={30} unoptimized />
                                        </td> */}
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-white flex">
                                            <Image alt="CRYPTO" src={item?.image} width={25} height={25} unoptimized className="mr-3" />
                                            <div>{item.name}</div>
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-white">
                                            <span className="text-lg">$</span>{(item.rate)?.toFixed(4)}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-white">
                                            <span className="text-lg">$</span>{(item.alltimeHighUSD)?.toFixed(4)}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-white">
                                            <span className="text-lg">$</span>{formatNumber(item.cap)}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-white">
                                            <span className="text-lg">$</span>{formatNumber(item.volume)}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md whitespace-nowrap p-4 text-left text-white">
                                            <span className="text-lg">$</span>{formatNumber(item.totalSupply)}
                                        </td>

                                    </tr>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tables;
