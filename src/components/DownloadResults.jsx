import React from 'react'

export default function DownloadResults(props) {
    return (
        <button  className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-20 mb-1 ease-linear transition-all duration-150 my-6" 
        onClick={() => console.log("Button Works")}
    >
        {props.name}
    </button>
    )
}
