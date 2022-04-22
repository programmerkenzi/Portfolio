import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Arrow({ showLeftArrow, showRightArrow }) {
    return (
        <AnimatePresence>
            <div className="absolute flex flex-row justify-center flex-1 w-screen h-full text-white scale-x-90 opacity-60 space-x-10 mt-[85vh] font-bold  align-middle" >


                <motion.div className="">
                    <motion.svg

                        animate={{ opacity: [0.2, 1, 0.2], x: [0, -10, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 3, repeat: 'Infinity', type: "linear" }}

                        class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">



                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />



                    </motion.svg>
                </motion.div>

                <p className='text-base lg:text-lg'>Press keyboard to scroll page</p>

                <motion.div className="">
                    <span className="text-transparent hover:text-white"></span>
                    <motion.svg
                        exit={{ opacity: 0 }}
                        animate={{ opacity: [0.2, 1, 0.2], x: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: 'Infinity', type: "linear" }}
                        xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>


                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />


                    </motion.svg>
                </motion.div>



            </div>
        </AnimatePresence>
    )
}

export default Arrow