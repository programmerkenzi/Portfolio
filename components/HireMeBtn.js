import React from 'react'
import { motion } from 'framer-motion'

const draw = {
    hidden: { pathLength: 0, opacity: 0 },

    visible: (i) => {
        const delay = i * 1;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0, repeat: 'Infinity', repeatDelay: 10 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

function HireMeBtn({ isBigScreen }) {
    return (
        <motion.div
            whileHover={{ fill: 'white', color: 'black' }}
            style={{ color: 'white' }}
            className="relative w-1/2 flex flex-1 flex-row justify-center m-auto md:my-[80px]     ">

            <motion.svg
                width={isBigScreen ? "180px" : "120px"}
                height={isBigScreen ? "70px" : "60px"}
                viewBox={isBigScreen ? "0 0 180 70" : "0 0 120 60"}
                initial="hidden"
                animate="visible"

            >
                <motion.rect
                    width={isBigScreen ? "180px" : "120px"}
                    height={isBigScreen ? "70px" : "60px"}

                    stroke="#fff"
                    variants={draw}
                    custom={6.5}
                    style={{ strokeWidth: 10 }}

                />

            </motion.svg>

            <motion.a
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1, delay: 5, type: "linear" }}
                href='mailto:a23g32@gmail.com?'


                className="absolute text-xl md:text-xl lg:text-2xl top-[50%] -translate-y-[50%] ">Hire Me</motion.a>
        </motion.div>

    )
}

export default HireMeBtn