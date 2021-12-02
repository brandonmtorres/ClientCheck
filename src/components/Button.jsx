import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button onClick={() => console.log("Button Works")}
            >
                {props.name}
            </button>
        </div>
    )
}
