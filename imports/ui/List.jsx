import React, { useState } from "react";

export const ItemDetails = ({ details, readOnly }) => {
    if(!details) return '';

    return (
        <>

                {Object.entries(details).map((detail, idx) => (
                <div className="horizontal" key={ idx }>
                <label htmlFor={ detail[0] }>{ detail[0] }</label>
                <input
                    type={ isNaN(+detail[1]) ? "text" : "number"}
                    name={ detail[0] }
                    readOnly={readOnly}
                    defaultValue={ detail[1] }
                />
                </div>))}
            </>

)};

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