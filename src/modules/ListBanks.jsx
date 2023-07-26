import { useState } from 'react';
import PropTypes from 'prop-types';

const ListBanks = ({ items }) => {
  const [selectedItemId, setSelectedItemId] = useState(items[0]?.id ?? null);

  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
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
          {items.map((item) => (
            <li
              key={item.id}
              onClick={() => handleItemClick(item.id)}
              className={`text-black bg-white rounded mb-2 p-1 w-[82px] leading-6 ${
                selectedItemId === item.id ? 'selected' : ''
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
            <h2>{items.find((item) => item.id === selectedItemId).Bank}</h2>
            <ul>
              {items.find((item) => item.id === selectedItemId).content.map((contentItem, index) => (
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
  items: PropTypes.array.isRequired,
};

export default ListBanks;
