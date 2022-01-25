import React from 'react'

const ListGroup = (props) => {
    const {items ,textProperty, valueProperty, onItemSelect, selectedItem} = props;
    return (
        <ul className="list-group m-4 my-5">
            {/* Here we have used square brackets to access the property of the object.which is string. */}
            {items.map(item=> <li style={{cursor : 'pointer'}} onClick={()=>{onItemSelect(item)}} key={item[valueProperty]} className={item === selectedItem ? "list-group-item active" : "list-group-item"}>
            {item[textProperty]}</li>)}
           
        </ul>
    )
}
ListGroup.defaultProps ={
    textProperty :"name",
     valueProperty: "_id" 
}

export default ListGroup;