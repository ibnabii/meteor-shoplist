import React from "react";

import { ListItem } from "./ListItem";

export const ShoppingList = ( { list }) => {
    console.log('ShoppingList');
    console.log(list);
    return (
        <div className="listItems">
            {list.map(item => <ListItem key={item._id} item={item}/>)}
        </div>
    );
};