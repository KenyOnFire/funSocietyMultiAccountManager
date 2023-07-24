import { useState } from 'react';

const SellOrBuyButton = () => {
    const [isGreen, setIsGreen] = useState(true);

    const handleClick = () => {
      setIsGreen((prevIsGreen) => !prevIsGreen);
    };
    // TODO: EL USUARIO SE TIENE QUE ALTERAR DEPENDIENDO DE LO QUE ESTE VIENDO; SI ORDENES DE COMPRA O DE VENTA
    return (
        <button
            className={`py-2 px-4 rounded 
                ${isGreen ? 'bg-green-500' : 'bg-red-500'} 
            text-white`}
            onClick={handleClick}
        >
            {isGreen ? 'Compra' : 'Venta'}
        </button>
    
    )
}

export default SellOrBuyButton