import Header from './Header';
import './index.css';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import Additems from './Additems';

function App() {
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

  const [newitem,setNewitem] = useState('')
  const additem = (item) => {
    const id = items.length ?items[items.length -1].id+1:1; 
    const addNewitem = {id, checked:false,item}
    
   const listitems = [...items, addNewitem]
   setItems(listitems)
   
   localStorage.setItem("todolist", JSON.stringify(listitems))
  }


  const handlefunction = (id) => {
    const listitem = items.map((obj) => obj.id === id ? { ...obj, checked: !obj.checked } : obj);
    setItems(listitem)
    localStorage.setItem("todolist", JSON.stringify(listitem))

  }
  const handledelete = (id) => {
    const listitem = items.filter((obj => obj.id !== id));
    setItems(listitem)
    localStorage.setItem("todolist", JSON.stringify(listitem))

  }
  const handlesubmit=(e) =>{
    e.preventDefault()
    if (!newitem) return;
    console.log(newitem);
    
    additem(newitem);
    setNewitem('')
  }




  return (
    <div className='App'>
      <Header title="To Do List!!!!!" />
      <Additems 
      newitem = {newitem}
      setNewitem={setNewitem}
      handlesubmit={handlesubmit}

      />
      <Content 
       items={items}
       
       handlefunction={handlefunction}
       handledelete={handledelete}
      
      />
      <Footer 
      length = {items.length}
      />

    </div>
  );
}

export default App;
