import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HireMeBtn from './HireMeBtn';
import Arrow from './Arrow';



function Hero({ setInViewportElIndex, isBigScreen }) {
    return (
        <AnimatePresence>
            {
                isBigScreen &&
                <Arrow />
            }
            <motion.div
                key="hero"
                id="hero"
                whileInView={() => setInViewportElIndex(0)}

                className="grid w-screen h-screen p-12 text-base cursor-pointer md:py-[12.5%] shrink-0 xl:grid-cols-2 md:text-2xl lg:text-2xl xl:text-3xl ">

                <div className="w-full h-full ">
                    <div className="flex flex-col flex-1 p-10 space-y-5 tracking-wide text-center md:space-y-9 md:p-15">
                        <div className="flex-row justify-center flex-1 w-full ">
                            <motion.span

                                animate={{ opacity: [0, 1, 0.5], margin: [-10, 0], }}
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
                            className="">Welcome To My Page</motion.span>
                        <motion.span
                            animate={{ opacity: [0, 1], x: [50, 0] }}
                            transition={{ duration: 1.5, delay: 3, type: "linear" }}
                            className="">I'm a Fullstack Developer</motion.span>
                    </div>

                    <HireMeBtn isBigScreen={isBigScreen} />

                </div>
            </motion.div >
        </AnimatePresence >
    )
}

export default Hero