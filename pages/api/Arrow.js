import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Arrow({ showUpArrow, showDownArrow }) {
    return (
        <div className="w-full h-full absolute text-white opacity-70    " >

            {showUpArrow &&
                <AnimatePresence>
                    <motion.div className="right-[50vw] translate-x-[50%] top-5 fixed ">
                        <motion.svg

                            animate={{ opacity: [0.2, 1, 0.2], y: [0, -10, 0] }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2, repeat: 5, type: "linear" }}

                            xmlns="http://www.w3.org/2000/svg" className="  h-10 w-10 " viewBox="0 0 20 20" fill="currentColor">

                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />

                        </motion.svg>
                    </motion.div>
                </AnimatePresence>}
            {showDownArrow &&
                <AnimatePresence>
                    <div className="right-[50vw] translate-x-[50%] bottom-10 fixed  ">
                        <span className=" text-transparent  hover:text-white"></span>
                        <motion.svg
                            exit={{ opacity: 0 }}
                            animate={{ opacity: [0.2, 1, 0.2], y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: 5, type: "linear" }}
                            xmlns="http://www.w3.org/2000/svg" className="  h-10 w-10 " viewBox="0 0 20 20" fill="currentColor">

                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />

                        </motion.svg>
                    </div>
                </AnimatePresence>
            }


        </div>
    )
}

export default Arrow