//import { useState } from 'react';
import SellOrBuyButton from '../modules/SellOrBuyButton';
import CryptoSelector from '../modules/CryptoSelector';

import CommercialList from '../modules/CommercialList';

const Home = () => {
  return (
    <>
    <div className="grid grid-cols-2 max-w-[20rem]">
      <div className="col-span-1 w-80">
        <div className="grid grid-cols-2 gap-2 p-2 ml-1.5">
          <SellOrBuyButton/>
          <CryptoSelector/>
        </div>
      </div>
      <div className="col-span-2 w-80 ">
        <CommercialList/>
      </div>
    </div>
    </>
    
  )
}

export default Home