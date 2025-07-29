import React from "react";

export const PeliculaCard= ({poster, title, year})=>{
    return(
        <div  className="p-4 bg-white rounded-lg shadow-xl flex flex-col items-center gap-4 w-[450px]">
           <img src={poster}/>
        <div className="flex flex-col items-center">
            <p className="text-black font-extrabold text-3xl py-2 text-center">{title}</p>
            <span className="text-gray-500 text-lg">{year}</span>
        </div>
        </div>
    )
}
