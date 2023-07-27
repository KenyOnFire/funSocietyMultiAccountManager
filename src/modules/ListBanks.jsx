import { useState } from 'react';
import PropTypes from 'prop-types';

const ListBanks = ({ items, setBankSelected, buy_or_sell, bank_selected }) => {
  const [selectedItemId, setSelectedItemId] = useState(items.list_banks[0]?.id ?? null);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    setBankSelected(itemId);
  };

  const truncateBank = (bank) => {
    if (bank.length > 10) {
      return bank.substring(0, 10) + '...';
    }
    return bank;
  };
  return (
    <div className="grid grid-rows-2 pt-2 grid-flow-col max-w-0 gap-1">
      <div className="w-24 pl-1 text-base/[30px]">
        <ul>
          {items.list_banks.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`text-black rounded mb-2 p-1 w-[82px] leading-6 ${
                bank_selected === item.id && buy_or_sell === 'sell' ? 'selected bg-green-500' : 'bg-white'
              }`}
            >
              {truncateBank(item.titleBank)}
            </li>
          ))}
        </ul>
      </div>
      <div className="row-span-2 text-left w-[190px]">
        {selectedItemId !== null && (
          <div>
            <h2>{items.list_banks.find((item) => item.id === selectedItemId).Bank}</h2>
            <ul>
              {items.list_banks.find((item) => item.id === selectedItemId).content.map((contentItem, index) => (
                <li key={index} className="font-extralight">
                  {contentItem}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

ListBanks.propTypes = {
  items: PropTypes.object.isRequired,
  setBankSelected: PropTypes.func.isRequired,
  buy_or_sell: PropTypes.string.isRequired,
  bank_selected: PropTypes.number
};

export default ListBanks;
