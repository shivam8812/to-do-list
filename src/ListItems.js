import React from 'react'
import './ListItems.css'

function ListItems(props) {
    const items=props.items;
    const listItems=items.map(item => 
        {
            return <div className="list" key={item.key}>
                <p className="para">{item.text}</p>
                <button onClick={() => props.handleDelete(item.key)}>delete</button>
                <button onClick={() => props.handleComplete(item.key)}>completed</button>
                </div>
        })
        const completeditems=props.completedItems;
    const cmpitems=completeditems.map(item => {
        return <div className="completedlist" key={item.key}>
                <p>congo your task is completed</p>
                </div>
    })
        return(
            <div>
            <div>{listItems}</div>
            <div>{cmpitems}</div>
            </div>
        )
}
export default ListItems;