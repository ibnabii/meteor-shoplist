import React from 'react';

import {ShoppingList} from "./ShoppingList";

const lista = [
    {_id: 1, text: "Marchewksa", extraInfo:{"ilosc": "1-2 sztuki"}},
    {_id: 2, text: "Pomarańcze", extraInfo:{"liczba": "3-4 sztuki", "zalezy od": "cukier"}},
    {_id: 3, text: "Ziemniaki", extraInfo:{"ilosc": "3"}},
    {_id: 4, text: "Bez ekstra daty"},
]
export const App = () => {


    return (
        <ShoppingList list={lista} />
    );
};