import React from "react";

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
