import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MenuItem from './MenuItem';
import Contact from './Contact';


function Menu({ header, isBigScreen, setInViewportElIndex, inViewportElIndex }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsHovering(null);
    }

    return (

        <motion.div

            transition={{ duration: 1 }}
            animate={{

                background: isOpen ? 'rgb(209 213 219)' : 'transparent',
                height: isOpen ? '100vh' : 0,
                width: isOpen ? isBigScreen ? '300px' : '100vw' : 0,


            }}




            className={`fixed transition transform z-10   cursor-pointer top-0 right-0 p-5 md:rounded-tl-lg md:rounded-bl-lg `}>

            {/* toggle btn */}
            <motion.svg
                onClick={() => toggleMenu()}
                animate={{
                    color: isOpen ? 'rgb(0 0 0)' : 'rgb(209 213 219)',
                }}

                xmlns="http://www.w3.org/2000/svg" className={` h-5 w-5 md:h-8 md:w-8  absolute  top-2 right-2  `} viewBox="0 0 20 20" fill="currentColor">
                {
                    isOpen ?

                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />

                        :
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                }
            </motion.svg>



            {/* menu */}
            {isOpen &&
                <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-col justify-center flex-1 w-full h-full p-10 space-y-10 text-xl text-center md:text-2xl md:rounded-tl-lg md:rounded-bl-lg md:justify-start"


                >
                    <div className='flex flex-col flex-1 space-y-10'>

                        {
                            header.map((item, index) =>
                                <MenuItem
                                    title={item.name}
                                    key={index + item.name}
                                    variants={item}
                                    isHovering={isHovering}
                                    setIsHovering={setIsHovering}
                                    id={item.id}
                                    index={index}
                                    setInViewportElIndex={setInViewportElIndex}
                                    inViewportElIndex={inViewportElIndex}
                                    setIsOpen={setIsOpen}

                                />)
                        }
                    </div>

                    <Contact />

                </motion.div>
            }


        </motion.div>
    )
}

export default Menu