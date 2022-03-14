import React from 'react'

function ScrollingHeader({ offsetX, header, isBigScreen }) {
    return (

        isBigScreen ?

            <div className={` fixed  w-12  h-[400vh]  pl-2 z-100 bg-black  `
            } style={{ transform: `translate(0, -${offsetX * (header.length - 1)}vh)` }}>
                {
                    header.map((item, index) =>
                        <span key={index + item} className={` absolute  -rotate-90 text-sm md:text-xl text-white font-serif -translate-y-[50%] h-12 w-12  font-bold opacity-50`} style={{ marginTop: `${index === 0 ? 50 : index * 100 + 50}vh` }}> {item}</span>)
                }

            </div >
            : <div className="fixed text-white w-[400vw] h-12 z-100 pt-2 "
                style={{ transform: `translate(${-offsetX * (header.length - 1)}vw,0)` }}>
                {
                    header.map((item, index) =>
                        <span key={index + item} className={` absolute text-sm md:text-xl text-white font-serif   font-bold opacity-50 -translate-x-[50%] `} style={{ marginLeft: `${index === 0 ? 50 : index * 100 + 50}vw` }}> {item}</span>)
                }
            </div>


    )
}

export default ScrollingHeader