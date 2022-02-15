import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

function Arrow({ showLeftArrow, showRightArrow, onClickLeftArrow, onClickRightArrow }) {
    return (
        <div className="w-full h-full absolute text-white opacity-70    " >

            {showLeftArrow &&
                <motion.svg
                    onClick={onClickLeftArrow}
                    animate={{ opacity: [0.2, 1, 0.2], x: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, type: "linear" }}

                    xmlns="http://www.w3.org/2000/svg" class=" absolute left-20 top-[50vh] h-10 w-10 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </motion.svg>}
            {showRightArrow &&
                <motion.svg
                    onClick={onClickRightArrow}
                    animate={{ opacity: [0.2, 1, 0.2], x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, type: "linear" }}
                    xmlns="http://www.w3.org/2000/svg" class="absolute right-20 top-[50vh] h-10 w-10 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </motion.svg>}


        </div>
    )
}

export default Arrow