import React from "react";

import { ListItem } from "./ListItem";

export const ShoppingList = ( { list }) => {
    return (
        <div className="listItems">
            {list.map(item => <ListItem key={item._id} item={item}/>)}
        </div>
    );
};