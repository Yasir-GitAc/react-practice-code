import React from "react";



export default function List({ data = [], renderItem, renderEmpty }) {
    // if (!data.length) return renderEmpty;
    // return <p>{data.length}</p>
    return !data.length ? (
        renderEmpty
    ) : (
        <ul>
            {data.map((item, i) => (
                <li key={i} >{renderItem(item)}</li>
            ))}
        </ul>
    )
}

