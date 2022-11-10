import React from 'react'

export const items = [...Array(33).keys()];

function Items({ currentItems }) {
    return (
        <div>
            {currentItems && currentItems.map((item) => (
                <div>
                    <h3>Item #{item.id}</h3>
                </div>
            ))}
        </div>
    )
}

export default Items