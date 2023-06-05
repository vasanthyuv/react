import React from 'react'
import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const Content = () => {


   const [items, setItems] = useState([
      {
         id: 1,
         checked: true,
         items: "codechef"
      },
      {
         id: 2,
         checked: false,
         items: "hackerrank"
      },
      {
         id: 3,
         checked: true,
         items: "leetcode"
      }
   ]);

   const handlefun =(id) =>{
      const listitem = items.map((obj) => obj.id !=== id?checked,obj.checked:items);

   }
   const handledelete =(id) =>{
      const listitem = filter((obj))
      
   }

   return (
      <main>
         <ul>
            {items.map(obj =>
               <li className='item' key={obj.id}>
                  <input
                     type='checkbox'
                     onChange={() => handlefun(obj.id)}
                     checked={obj.checked}

                  />
                  <label>{obj.items}</label>
                  <FaRegTrashAlt
                  onClick={() => handledelete(obj.id)}
                     role="button"
                     tabIndex="0"
                  />

               </li>


            )}
         </ul>

      </main>

   )
}

export default Content
