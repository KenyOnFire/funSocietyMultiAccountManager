import { useState } from 'react';
import btcIco from '../assets/btc_ico.svg';
import usdtIco from '../assets/usdt_ico.svg';
import ethIco from '../assets/eth_ico.svg';

const CryptoSelector = () => {
    const cryptocurrencies = [
        {
            name: 'BTC',
            icon: btcIco,
        },
        {
            name: 'USDT',
            icon: usdtIco,
        },
        {
            name: 'ETH',
            icon: ethIco,
        },
    ];

    const [selectedCrypto, setSelectedCrypto] = useState(cryptocurrencies[0]);

    const handleCryptoClick = (crypto) => {
        setSelectedCrypto(crypto);
    };

    const listItems = cryptocurrencies.map((crypto) => (
        <li
            key={crypto.name}
            className={`p-1 h-10 w-10 object-contain rounded ${
                selectedCrypto.name === crypto.name ? 'bg-green-500' : 'bg-gray-500'
            }`}
        >
            <img
                src={crypto.icon}
                alt={crypto.name}
                onClick={() => handleCryptoClick(crypto)}
                className='p-1 h-8 w-10 object-contain rounded'
            />
        </li>
    ));

    return (
        <>
            <div className='p-1 ml-0.5'>
                <ul className='grid grid-cols-3'>{listItems}</ul>
            </div>
        </>
    );
};

export default CryptoSelector;
