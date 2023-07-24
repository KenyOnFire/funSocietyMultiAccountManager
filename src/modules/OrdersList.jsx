//import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const OrdersList = () => {

    const actualOrders = [
        {
        "type_order": "Vender",
        "crypto": "USDT",
        "time_creation": "2023-07-17 19:18:51",
        "num_order": "20514x21x70692903424",
        "quanty_fiat": "99.000 EUR",
        "price": "0.979 EUR",
        "quanty_crypto": "101.12 USDT",
        "contraparte": "bo*****b.de",
        "status": "Cancelado",
        "url_operacion": "Contacto"
        },
        {
        "type_order": "Vender",
        "crypto": "USDT",
        "time_creation": "2023-07-14 08:17:30",
        "num_order": "205256075xx0533x2640",
        "quanty_fiat": "117.600 EUR",
        "price": "0.98 EUR",
        "quanty_crypto": "120.00 USDT",
        "contraparte": "wa*****.com",
        "status": "Cancelado",
        "url_operacion": "Contacto"
        },
        {
        "type_order": "Vender",
        "crypto": "USDT",
        "time_creation": "2023-07-09 18:06:01",
        "num_order": " 22898867xx1138x49920",
        "quanty_fiat": "120.600 EUR",
        "price": "1.005 EUR",
        "quanty_crypto": "120.00 USDT",
        "contraparte": "fei_long33",
        "status": "Cancelado",
        "url_operacion": "Contacto"
        },
        {
        "type_order": "Vender",
        "crypto": "USDT",
        "time_creation": "2023-07-09 17:51:45",
        "num_order": "2051xx845459086x1464",
        "quanty_fiat": "120.480 EUR",
        "price": "1.004 EUR",
        "quanty_crypto": "120.00 USDT",
        "contraparte": "is*****.com",
        "status": "Cancelado",
        "url_operacion": "Contacto"
        }
    ]

    const ordersPerPage = 3;

    const [startIndex, setStartIndex] = useState(0);

    const maxIndex = actualOrders.length - ordersPerPage;

    const handleNext = () => {
        setStartIndex((prevIndex) => prevIndex + ordersPerPage);
    };

    const handleBack = () => {
        setStartIndex((prevIndex) => prevIndex - ordersPerPage);
    };
    
    const disableNext = startIndex >= maxIndex;
    const disableBack = startIndex <= 0;

    return (
        <>
            <ul>
                {actualOrders.slice(startIndex, startIndex + ordersPerPage).map((order, index) => (
                    <div key={index}>
                        <Link to={`/orders/${order.num_order}`}>
                            <div className='bg-gray-500 mt-2 pb-2'>
                                <p>Orden de ARI</p>
                            </div>
                            <li className='grid grid-cols-3 p- -mt-1.5'>
                                <div className="grid grid-rows-3 col-span-2 p-1 m-2">
                                    <h3>{order.type_order} {order.crypto}</h3>
                                    <p>Precio {order.price}</p>
                                    <p>Cantidad {order.quanty_crypto}</p>
                                    <p className='text-sm'>Id {order.num_order}</p>
                                </div>
                                <div className="grid grid-rows-3 text-right leading-none p-1 m-1">
                                    <p className='text-xs mt-1'>{order.status}</p>
                                    <p className='text-xs'>{order.time_creation}</p>
                                    
                                    <p>{order.quanty_fiat}</p>
                                </div>
                            </li>
                        </Link>
                        <hr className="h-px my-1 border-2 bg-gray-500"/>
                    </div>
                ))}
            </ul>

            <div className='container mx-auto flex justify-center mt-6'>
                <button
                    onClick={handleBack}
                    className={`rounded bg-[#2563eb] text-white px-4 py-1 mr-2 ${disableBack ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={disableBack}
                >
                    Atrás
                </button>
                <button
                    onClick={handleNext}
                    className={`rounded bg-[#2563eb] text-white px-4 py-1 ${disableNext ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={disableNext}
                >
                    Siguiente
                </button>
            </div>
        </>

    );
}

export default OrdersList