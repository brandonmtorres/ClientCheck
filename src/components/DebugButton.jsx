import React from 'react'

export default function DebugButton(props) {
    return (
        <button  className="bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 my-6 ease-linear transition-all duration-150 justify-end" 
        onClick={() => console.log("Button Works")}
    >
        {props.name}
    </button>
    )
}
