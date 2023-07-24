//import React from 'react'
import OrdersList from '../modules/OrdersList';

const Orders = () => {
  return (
    <>
    <div className="grid grid-cols-1 max-w-[20rem]">
      <div className="col-span-1 w-80 ">
        <OrdersList/>
      </div>
    </div>
    </>
  )
}

export default Orders