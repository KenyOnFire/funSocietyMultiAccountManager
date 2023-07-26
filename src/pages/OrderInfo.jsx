//import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CounterBack from '../modules/CounterBack';
import ListBanks from '../modules/ListBanks';

const OrderInfo = () => {
    const params = useParams();
    const orderInfo = {
        "starting_minutes": 2,
        "starting_seconds": 2,
        "amount_to_pay": "€10.000",
        "list_banks": [
            { id: 1, titleBank: 'Skrill', content: ["Nombre: Pepito Perez Atanasov", "Cuenta Bancaria: ES2820958297603648596978", "Tu madre pagadora: fooking mileurista", "Contenido ext: 3", "Contenido ext: 3"] },
            { id: 2, titleBank: 'Neteller', content: ["Nombre: Caperuzita Foking Roja", "Correo electronico: larojadecaperuzita@rumanian.xd", "Ah bueno: todo bien hjsjsj"] },
            { id: 3, titleBank: 'SEPA Bank Transfer', content: ["Contenido ext: 1", "Contenido ext: 2", "Contenido ext: 3"] },
        ]
    };
    return (
        <>
            <div className="grid grid-rows-1 max-w-[20rem]">
                <div className="col-span-1 w-80">
                    <div className={`grid grid-cols-2 gap-2 space-x-8 text-2xl pl-3 ${(params.buy_or_sell === 'buy' ? 'text-green-600' : 'text-red-600')}`}>
                        <div>
                            <h1>{(params.buy_or_sell === 'buy' ? 'Compra' : 'Venta')}</h1>
                        </div>
                        <div>
                            <CounterBack startingMinutes={2} startingSeconds={2}/>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 w-80 p-2 bg-[#2563eb] text-center text-white rounded mt-4">
                    <Link>
                        💬 Chat 💬
                    </Link>
                </div>
                <div className="flex col-span-2 w-80 p-2 text-center mt-2 text-xl">
                    <div className='w-44'>
                        <h2>Cantidad</h2>
                    </div>
                    <div>
                        <h2>{orderInfo.amount_to_pay} 💸</h2>
                    </div>
                </div>
                <div className='col-span-2 bg-[#2563eb] rounded text-white'>
                    <h2 className='text-center pt-2'>🏦 Bancos disponibles 🏦</h2>
                    <ListBanks items={orderInfo.list_banks}/>
                </div>
            </div>
        </>

    )
  }
  
  export default OrderInfo