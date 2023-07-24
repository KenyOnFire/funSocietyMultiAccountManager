//import React from 'react'
import {useParams } from 'react-router-dom';

const OrderInfo = () => {
    // 👇️ get ID from url
    const params = useParams();

    console.log(params);
    return (
        <h2>userId is 👉️ {params.num_order}</h2>
    )
  }
  
  export default OrderInfo