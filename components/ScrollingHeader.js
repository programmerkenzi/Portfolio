import React from 'react'
import { motion } from 'framer-motion'
function ScrollingHeader({ offsetX, isBigScreen, inViewportElIndex, header, deviceIsMobile }) {

    const headerWidth = (header.length - 1) * 100;


    const headerWithVw = header.map(item => {
        return {
            ...item,
            vw: headerWidth * item.heightOfTotalPages

        }

    })


    return (

        isBigScreen ?

            <motion.div
                className={` fixed  w-12   p-2   bg-black  bg-opacity-75  `
                }
                animate={{ transform: `translateY(-${inViewportElIndex * 100}vh)`, opacity: [0, 1] }}
                transition={{ bounce: 0, duration: 2 }}

            >
                {
                    header.map((item, index) =>
                        <span key={index + item.id} className={` absolute  -rotate-90 text-sm md:text-xl text-white font-serif -translate-y-[50%] h-12 w-12  font-bold `} style={{ marginTop: `${index === 0 ? 50 : index * 100 + 50}vh` }}> {item.name}</span>)
                }

            </motion.div >
            : <motion.div className="fixed z-10 flex flex-row h-12 pt-4 text-white bg-black bg-opacity-75 z-100 "

                animate={{ transform: `translateX(-${inViewportElIndex * 100}vw)`, opacity: [0, 1] }}

                transition={{ bounce: 0, duration: 2 }}

            >



                {
                    headerWithVw.map((item, index) =>
                        <div key={index + item.id} className={`text- sm md:text-xl text-white font-serif font-bold h-full self-center w-[100vw] text-center`} style={{}}  >
                            <p>{item.name}</p>
                        </div>)
                }
            </motion.div>


    )
}

export default ScrollingHeader

// marginLeft: `${ (index === 0 ? 50 : index * 100 + 50) - offsetX * (100 - item.vw) * (1 / item.heightOfTotalPages) } vw` 