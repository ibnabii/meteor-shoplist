import { Meteor } from 'meteor/meteor';
import { ListCollection, ItemsCollection } from "../imports/db/Collections";

Meteor.startup(async () => {
    if (ItemsCollection.find().count() === 0) {
        const lista = [
            {text: "Marchewksa", extraInfo:{"ilosc": "1-2 sztuki"}},
            {text: "Pomarańcze", extraInfo:{"liczba": "3-4 sztuki", "zalezy od": "cukier"}},
            {text: "Ziemniaki", extraInfo:{"ilosc": "3"}},
            {text: "Bez ekstra daty"},
        ];
        lista.forEach(item => ItemsCollection.insert(item));
    }
});
