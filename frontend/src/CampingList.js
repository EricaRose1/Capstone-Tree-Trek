import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import NavBar from './NavBar';
import './CampingList.css'
import { v4 as uuidv4 } from 'uuid';

function ShoppingList() {
    const [item, setItem] = useState();
    const [items, setItems] = useState([]);

    // const [list, setList] = useState(getItems)

    // const nav = useNavigate();

    const add = (e) => {
        e.preventDefault();
        if(!item) {
            console.log('No Item');
        } setItems((items) => [
            ...items,
            {
                id: uuidv4(),
                item
            }
        ]);
    };

    const remove = (index) => {
        setItems((items) => items.filter((item, i) => i !== index));
    };

    

// function getItems(){
//     const storedValues = localStorage.getItem(item);
//         if (!storedValues) return {
//             item: ''
//         };
//     return JSON.parse(storedValues) 
// }

//     useEffect(() => {
//         localStorage.setItem('items', JSON.stringify(item));
//     }, [item]);

    return (
        <div>
            <NavBar/>
            <br/>
            <h1>Camping Checklist</h1>
            <form onSubmit={add}>
                    <input value={item} placeholder="Add Item" onChange={(e) =>
                    setItem(e.target.value)} />
                
                <button className='AddItem' type="submit">Add Item</button>
            </form>

            {items.map((item, index) => {
                return (
                    <div className='Item' key={index}> 
                        <input className='checkbox' type="checkbox"/>
                        <p>{item.item}</p>
                        <button className='removeBtn' onClick={() => remove(index)}>X</button>
                    </div>
                );
            })}
        </div>
    )
}

export default ShoppingList;