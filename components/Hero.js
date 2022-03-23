import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const draw = {
    hidden: { pathLength: 0, opacity: 0 },

    visible: (i) => {
        const delay = i * 1;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

function Hero() {
    return (
        <AnimatePresence>
            <motion.div
                id="hero"
                onScroll={() => { console.log('scroll') }}
                className="grid w-screen h-screen p-10 text-base shrink-0 xl:grid-cols-2 md:text-2xl lg:text-2xl xl:text-3xl ">

                <div className="w-full h-full ">
                    <div className="flex flex-col flex-1 pl-[50%] pt-[50%] translate-x-[-25%] translate-y-[-25%] md:pt-[25%] md:pl-[15%] md:translate-x-0 md:translate-y-0 overflow-hidden ">
                        <div className="">
                            <motion.span

                                animate={{ opacity: [0, 1, 0.5], margin: [-10, 0] }}
                                transition={{ duration: 1.5, type: "linear" }}
                                className="text-[35px] md:text-[60px] lg:text-[80px] xl:text-[100px]">Hi, </motion.span>
                            <motion.span
                                animate={{ opacity: [0, 1], margin: [10, 0] }}
                                transition={{ duration: 1, delay: 1, type: "linear" }}
                            >


                                I'm Kenzi</motion.span>
                        </div>
                        <motion.span
                            animate={{ opacity: [0, 1], x: [50, 0] }}
                            transition={{ duration: 1.5, delay: 1.5, type: "linear" }}
                            className="mt-5 md:mt-10">Welcome To My Page</motion.span>
                        <motion.span
                            animate={{ opacity: [0, 1], x: [50, 0] }}
                            transition={{ duration: 1.5, delay: 3, type: "linear" }}
                            className="mt-5 md:mt-10">I'm a Fullstack Developer</motion.span>
                    </div>

                    {/* <motion.div
                        whileHover={{ scale: 1.05, color: 'black', fill: 'white' }}
                        className=" mt-12 ml-[5%] relative ">

                        <motion.svg
                            width="400"
                            height="200"
                            viewBox="0 0 600 600"
                            initial="hidden"
                            animate="visible"

                        >
                            <motion.rect
                                width="400"
                                height="180"
                                x="0"
                                y="0"
                                rx="20"
                                stroke="#fff"
                                variants={draw}
                                custom={6.5}
                                style={{ strokeWidth: 10 }}

                            />

                        </motion.svg>

                        <motion.span
                            animate={{ opacity: [0, 1], x: [50, 0] }}
                            transition={{ duration: 1, delay: 5, type: "linear" }}
                            whileHover={{ color: 'red' }}
                            className="absolute top-[6%] left-[15%] text-2xl ">Hire Me</motion.span>
                    </motion.div> */}

                </div>
            </motion.div>
        </AnimatePresence >
    )
}

export default Hero