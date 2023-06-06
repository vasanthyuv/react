import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const Itemslist = ({ items, handlefunction, handledelete }) => {
  return (
    <ul>
      {items.map((obj) => {
        return (
          <li className='item' key={obj.id}>
            <input
              type='checkbox'
              onChange={() => handlefunction(obj.id)}
              checked={obj.checked}
            />
            <label
              style={obj.checked ? { textDecoration: 'line-through' } : null}
              onDoubleClick={() => handlefunction(obj.id)}
            >
              {obj.items}
            </label>
            <FaRegTrashAlt
              onClick={() => handledelete(obj.id)}
              role='button'
              tabIndex='0'
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Itemslist;
