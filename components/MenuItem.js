import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

function MenuItem({ title, variants, isHovering, setIsHovering, onClickItem, id, setInViewportElIndex, index, setIsOpen, inViewportElIndex }) {




    const scrollTo = () => {
        const el = document.getElementById(id);
        el.scrollIntoView({ behavior: 'smooth' });

    }

    const onClick = () => {
        setInViewportElIndex(index)
        setIsOpen(false);
        scrollTo();

    }



    return (
        <AnimatePresence>

            <motion.div
                whileHover={() => setIsHovering(title)}

            >

                <motion.div
                    whileHover={{ scale: 1.1, }}

                    animate={{ opacity: inViewportElIndex === index ? 1 : 0.6 }}

                    onClick={() => onClick()}
                >
                    <p>

                        {title}
                    </p>

                </motion.div>

                {
                    isHovering === title && <motion.div
                        animate={{ width: ['0%', '60%'] }}
                        layoutId="underline"
                        className='z-10 h-1 m-auto bg-black bg-opacity-30 rounded-xl'>
                    </motion.div>
                }


            </motion.div>
        </AnimatePresence >
    )
}

export default MenuItem