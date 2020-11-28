import React from 'react';

function ListItem(props){
    return (<>
        <p>{props.Item}</p>
        <button>Edit</button>
        <button>delete</button>
        <input type = "text" placeholder="edit Item"/>
        <button>save</button>
    </>);
}
export default ListItem;