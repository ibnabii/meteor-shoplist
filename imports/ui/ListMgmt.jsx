import React from "react";

const AddIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" color="#FED766">
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
        </svg>
    );
};

const NewList = ({ newItemHandler }) => {
    console.log('NewList');

    return(
        <div
            className="newListObject"
            onClick={ () => newItemHandler() }
        >
            <AddIcon />
        </div>
    );
};

const ListObject = ({ newItemHandler }) => {
    console.log('ListObject');

    return(
        <div
            className="newListObject vertical"
        >
            <AddIcon />
        </div>
    );
};

export const ListMgmt = ({ list, newListHandler }) => {
    console.log('ListMgmt');
    console.log(list);
    return (
        <div className="listMgmt horizontal">
            <NewList newItemHandler={newListHandler} />

        </div>
    );
};