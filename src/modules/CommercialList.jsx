import { useState } from 'react';

const CommercialList = () => {
    const actualCommercials = [
        {
            nameClient: 'AnimeCrypto',
            ordersRealized: 2,
            completionAverage: "24.23%",
            price: "0.905 EUR",
            quantyAvailable: "22.23 USDT",
            limit: "€50.000-€905.000",
            payments: ["Advcash", "Advcash"],
        },
        {
            nameClient: 'YaKo777',
            ordersRealized: 3,
            completionAverage: "24.23%",
            price: "0.803 EUR",
            quantyAvailable: "22.23 USDT",
            limit: "€1,000.000-€1,000.000",
            payments: ["SEPA (EU) bank transfer", "Advcash", "Advcash",],
        },
        {
            nameClient: 'CryptoHappy',
            ordersRealized: 1,
            completionAverage: "24.23%",
            price: "0.955 EUR",
            quantyAvailable: "48,489.02 USDT",
            limit: "€1,000.000-€1,000.000",
            payments: ["ZEN"],
        },
        {
            nameClient: 'CryptoHappy',
            ordersRealized: 1,
            completionAverage: "24.23%",
            price: "0.955 EUR",
            quantyAvailable: "185,061.89 USDT",
            limit: "€1,000.000-€1,000.000",
            payments: ["ZEN"],
        },
    ];

    const commercialsPerPage = 3;

    const [startIndex, setStartIndex] = useState(0);

    const maxIndex = actualCommercials.length - commercialsPerPage;

    const handleNext = () => {
        setStartIndex((prevIndex) => prevIndex + commercialsPerPage);
    };

    const handleBack = () => {
        setStartIndex((prevIndex) => prevIndex - commercialsPerPage);
    };
    
    const disableNext = startIndex >= maxIndex;
    const disableBack = startIndex <= 0;

    // TODO: CREAR BOTON DE COMPRAR O VENDER PARA CADA ANUNCIO DEPENDIENDO DE LA LISTA QUE SE ESTE RENDERIZANDO
    return (
        <>
            {actualCommercials.slice(startIndex, startIndex + commercialsPerPage).map((commercial, index) => (
                <div key={index} className="grid grid-rows-4 p-2.5 -mb-4 max-h-48">
                    
                    <h3>{commercial.nameClient}</h3>
                    <p className='text-xs mt-0.5'>{commercial.ordersRealized} Órdenes | Finalización {commercial.completionAverage}</p>
                    <p>Precio {commercial.price}</p>
                    <p>Cantidad {commercial.quantyAvailable}</p>
                    <p>Limite {commercial.limit}</p>
                    <p>Payment: {commercial.payments.join(", ")}</p>
                    <hr className="h-px my-1 border-2 bg-gray-500"/>
                </div>
            ))}
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

    )
};

export default CommercialList;