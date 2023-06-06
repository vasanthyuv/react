import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Additems = ({newitem,setNewitem,handlesubmit}) => {
  return (
    <form className='addForm' onSubmit={handlesubmit}>
        <label htmlFor='addItem'>Add Items</label>
        <input  
        autoFocus
        type='text'
        id='addItem'
        placeholder='Add items'
        required
        value={newitem}
        onChange={(e) => setNewitem(e.target.value)}
        
        />
        <button type='submit'
        aria-label ='Add Item'
        >
            <FaPlus /> 
            </button> 
    </form>
  )
}

export default Additems