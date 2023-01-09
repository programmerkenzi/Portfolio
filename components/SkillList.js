import React from 'react'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'


function SkillList({ listName, list }) {


    return (
        <div className="h-full text-sm text-center text-gray-300 bg-white sm:text-lg md:p-10 md:text-lg bg-opacity-10">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full p-1 text-lg font-bold border-b-2 border-gray-300 md:mb-5 md:p-8 sm:text-xl md:text-2xl">{listName}</motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid w-full h-full grid-cols-2 p-3 sm:p-5">
                {/* left col */}
                <motion.div className="flex flex-col w-full h-full ">
                    {
                        list.map((item, index) => {
                            if ((index + 1) % 2 !== 0) {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 1 }}
                                        viewport={{ once: true }}
                                        className="flex flex-row m-2 space-x-2 text-center align-middle" key={index}>
                                        <Icon className="w-4 h-4 md:h-8 md:w-8 " icon={item.iconName} />
                                        <p className='w-4 h-4 md:h-8 md:w-8'>{item.skill}</p>
                                    </motion.div>
                                )
                            }
                        })}
                </motion.div>
                {/* right col */}
                <motion.div className="flex flex-col w-full h-full">
                    {
                        list.map((item, index) => {
                            if ((index + 1) % 2 === 0) {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 1 }}
                                        viewport={{ once: true }}
                                        className="flex flex-row m-2 space-x-2 text-center align-middle" key={index}>
                                        <Icon className="w-4 h-4 md:h-8 md:w-8" icon={item.iconName} />
                                        <p className='w-4 h-4 md:h-8 md:w-8'>{item.skill}</p>
                                    </motion.div>
                                )
                            }
                        })
                    }
                </motion.div>
            </motion.div>

        </div>
    )
}

export default SkillList