import React, { useState } from "react";

import {ItemDetails} from "./ItemDetails";

export const ListItem = ({ item }) => {
    const [isActive, setActive] = useState(false);
    const toggleActive = () => {
        setActive(!isActive);
    }
    return (
        <div className="listItem">
            <button
                className={isActive ? "listItemTitle active" : "listItemTitle"}
                type="button"
                onClick={ () => toggleActive() }
            >
                {item.text}
            </button>

            <div className={isActive ? "listItemContent active" : "listItemContent"}>
                <div className="horizontal">
                        {item.extraInfo && (
                            <div className="vertical">
                                Additional info:
                                <ItemDetails details={ item.extraInfo } readOnly={true} />
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
};