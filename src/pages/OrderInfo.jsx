//import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import CounterBack from '../modules/CounterBack';
import ListBanks from '../modules/ListBanks';

const OrderInfo = () => {
    const params = useParams();
    const [orderInfo, setOrderInfo] = useState({
        "live_order":true,
        "status_order": "wait_to_recive_money",
        "real_name":"paquito perez muñoz",
        "starting_minutes": 2,
        "starting_seconds": 2,
        "amount_to_pay": "€10.000",
        "list_banks": [
            { id: 1, titleBank: 'Skrill', content: ["Nombre: Pepito Perez Atanasov", "Cuenta Bancaria: ES2820958297603648596978", "Tu madre pagadora: fooking mileurista", "Contenido ext: 3", "Contenido ext: 3"] },
            { id: 2, titleBank: 'Neteller', content: ["Nombre: Caperuzita Foking Roja", "Correo electronico: larojadecaperuzita@rumanian.xd", "Ah bueno: todo bien hjsjsj"] },
            { id: 3, titleBank: 'SEPA Bank Transfer', content: ["Contenido ext: 1", "Contenido ext: 2", "Contenido ext: 3"] },
        ],
        "bank_selected":2
    });
    const [isPaidBoxVisible, setIsPaidBoxVisible] = useState(false);
    const [bankSelected, setBankSelected] = useState("");

    const handleMarkAsPaid = () => {
      setIsPaidBoxVisible(!isPaidBoxVisible);
      if (orderInfo.status_order === "transfer_to_client" && params.buy_or_sell === "buy") {
        setOrderInfo(prevOrderInfo => ({
            ...prevOrderInfo,
            status_order: "wait_to_recive_money",
            bank_selected: bankSelected
        }));
      }
    };

    const handleConfirm = () => {
        // Aquí puedes poner el código para realizar la acción de confirmar el "sell"
        // Por ejemplo, podrías actualizar el estado o enviar una solicitud al servidor
        // RECUERDA... wait_to_accept_money sirve para esperar que el cliente acepte como pagado la orden
        console.log("Sell confirmado"); // Ejemplo de mensaje en la consola
        setIsPaidBoxVisible(false); // Cerrar el div de la pregunta después de confirmar
        if (orderInfo.status_order === "wait_to_recive_money" && params.buy_or_sell === "sell") {
            setOrderInfo(prevOrderInfo => ({
                ...prevOrderInfo,
                status_order: "order_completed",
            }));
        }
    };
    return (
        <>
            <div className="grid grid-rows-1 max-w-[20rem]">
                <div className="col-span-1 w-80">
                    <div className={`grid grid-cols-2 gap-2 space-x-8 pl-3 ${(params.buy_or_sell === 'buy' ? 'text-green-600' : 'text-red-600')}`}>
                        <div className='text-2xl '>
                            <h1>{(params.buy_or_sell === 'buy' ? 'Compra' : 'Venta')}</h1>
                        </div>
                        <div>
                            {
                            orderInfo.live_order ? (
                                <>
                                {orderInfo.status_order === "wait_to_accept_order" && <p>Esperando a que el cliente reciba el 🤑</p>}
                                {orderInfo.status_order === "wait_to_recive_money" && <p>Esperando a recibir el 🤑</p>}
                                {orderInfo.status_order === "order_completed" && <p>¡Orden completada! 🎉</p>}
                                {orderInfo.status_order !== "wait_to_accept_order" && orderInfo.status_order !== "wait_to_recive_money" && orderInfo.status_order !== "order_completed" && <CounterBack startingMinutes={3} startingSeconds={2} />}
                                </>
                            ) : (
                                <p>Orden cancelada</p>
                            )
                            }
                    
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
                    <ListBanks items={orderInfo} setBankSelected={setBankSelected} buy_or_sell={params.buy_or_sell} bank_selected={orderInfo.bank_selected}/>
                </div>
                {orderInfo.status_order === "transfer_to_client" && params.buy_or_sell === "buy" && (
                    <div className='container mx-auto flex justify-center mt-6'>
                        <button
                        onClick={handleMarkAsPaid}
                        className={`rounded bg-[#2563eb] text-white px-4 py-1 mr-2`}
                        >
                        Pago realizado, notificar al vendedor
                        </button>
                    </div>
                )}
                {orderInfo.status_order === "wait_to_recive_money" && params.buy_or_sell === "sell" && (
                    <div className='container mx-auto flex justify-center mt-6'>
                        <button
                        onClick={handleMarkAsPaid}
                        className={`rounded bg-[#2563eb] text-white px-4 py-1 mr-2`}
                        >
                        Confirmar 🤑 en mi 🏦
                        </button>
                    </div>
                )}
                {isPaidBoxVisible && (
                    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-lg m-3 mb-40">
                        <div className="text-black">
                            {params.buy_or_sell === "buy" ? (
                                <p>¡El pedido ha sido marcado como pagado y notificado al vendedor!</p>
                            ) : (
                                <p>¿Estás seguro de continuar?</p>
                            )}
                        </div>
                        {params.buy_or_sell === "buy" ? (
                            <button
                                onClick={handleMarkAsPaid}
                                className="mt-2 bg-[#2563eb] text-white px-4 py-1 rounded"
                            >
                                Cerrar
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={handleConfirm} // Aquí debes agregar una función para manejar la acción de confirmar el sell
                                    className="mt-2 bg-[#2563eb] text-white px-4 py-1 rounded mr-2"
                                >
                                    Confirmar
                                </button>
                                <button
                                    onClick={handleMarkAsPaid} // Asociamos la función al evento click del botón de cerrar
                                    className="mt-2 bg-[#2563eb] text-white px-4 py-1 rounded"
                                >
                                    Cerrar
                                </button>
                            </>
                        )}
                        </div>
                    </div>
                )}
            </div>
        </>

    )
  }
  
  export default OrderInfo