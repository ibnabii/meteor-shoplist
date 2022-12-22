import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';

import {ItemsCollection, ListCollection} from "../db/Collections";
import { ShoppingList } from "./ShoppingList";
import {ListMgmt} from "./ListMgmt";
import { EditListForm } from "./EditListForm";


export const App = () => {
    const [page, setPage] = useState('lists');
    const [pageId, setPageId] = useState('');
    const listOfItems = useTracker(() => ItemsCollection.find({}).fetch());
    const listOfLists = useTracker(() => ListCollection.find({}).fetch());

    console.log('page:', page);

    const newList = () => {
        console.log("newList");
        setPage('editList');
        setPageId(ListCollection.insert({
            createdAt: new Date()
        }));
    };

    if (page === 'editList') {
        console.log('editList');
        const list = ListCollection.findOne({_id: pageId});

        return (
            <EditListForm list={list} />
        );
    }

    if (page === 'items') {
        console.log('items page');
        console.log(listOfItems);
        return (
            <ShoppingList list={listOfItems} />
        );
    }

    if (page === 'lists') {
        return (
            <ListMgmt
                newListHandler={newList}
                list={listOfLists}
            />
        );
    }



    return (
        <h1>Chuja tam wiesz</h1>
    );
};