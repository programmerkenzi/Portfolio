import React from 'react'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'

function IconBtn({ iconName, link }) {

    return (
        <motion.div
            animate={{ scale: [1.5, 1], }}
            transition={{ delay: 2 }}

        >

            <a href={link ? link : ''}>

                <Icon className="w-10 h-10 text-gray-500 transition-all transform cursor-pointer md:w-12 md:h-12 hover:scale-110 " icon={iconName} />
            </a>
        </motion.div>
    )
}

export default IconBtn