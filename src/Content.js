import React from 'react'


import Itemslist from './Itemslist';

const Content = ({items, handlefunction, handledelete}) => {


  

   return (
      <main>
         {(items.length)?(
         <Itemslist 
         items={items}
       
         handlefunction={handlefunction}
         handledelete={handledelete}
         />

       
        
         ):(
            <p style = { {marginTop:'2rem'} }> your list is empty</p>
         )}

      </main>

   )
}

export default Content
