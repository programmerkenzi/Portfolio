import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Hero() {
    return (
        <AnimatePresence>
            <motion.div
                animate={{ opacity: [1, 0.5] }}
                transition={{ duration: 5, delay: 6, type: "linear" }}
                onScroll={() => { console.log('scroll') }}
                className="w-screen h-screen shrink-0 text-white grid   xl:grid-cols-2 text-base  md:text-2xl  lg:text-2xl  xl:text-3xl bg-black ">

                <div className="w-full h-full   ">
                    <div className="flex flex-col flex-1 pl-[50%] pt-[50%] translate-x-[-25%] translate-y-[-25%] md:pt-[25%] md:pl-[15%] md:translate-x-0 md:translate-y-0 overflow-hidden ">
                        <div className="">
                            <motion.span

                                animate={{ opacity: [0, 1, 0.5], margin: [-10, 0] }}
                                transition={{ duration: 1.5, delay: 0.5, type: "linear" }}
                                className=" text-xl  md:text-2xl  lg:text-3xl  xl:text-4xl">Hi, </motion.span>
                            <motion.span
                                animate={{ opacity: [0, 1], margin: [10, 0] }}
                                transition={{ duration: 1.5, delay: 1.5, type: "linear" }}
                            >


                                I'm Kenzi</motion.span>
                        </div>
                        <motion.span
                            animate={{ opacity: [0, 1], x: [50, 0] }}
                            transition={{ duration: 2.5, delay: 3, type: "linear" }}
                            className="mt-5 md:mt-10">Welcome To My Page</motion.span>
                        <motion.span
                            animate={{ opacity: [0, 1], x: [50, 0] }}
                            transition={{ duration: 2.5, delay: 5, type: "linear" }}
                            className="mt-5 md:mt-10">I'm a Fullstack Developer</motion.span>
                    </div>

                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Hero