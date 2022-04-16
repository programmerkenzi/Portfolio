import React from 'react'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'


function SkillList({ listName, list }) {


    return (
        <div className="w-[90vw] h-full md:w-[80vw] text-sm sm:text-lg  md:p-10 md:text-lg text-center bg-white  bg-opacity-5 text-gray-300">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="w-full p-1 text-lg font-bold border-b-2 border-gray-300 md:mb-5 md:p-2 sm:text-xl md:text-2xl">{listName}</motion.div>
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
                                        className="flex flex-row m-2 space-x-2 md:m-3" key={index}>
                                        <Icon className="w-6 h-6 md:h-10 md:w-10" icon={item.iconName} />
                                        <span>{item.skill}</span>
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
                                        className="flex flex-row m-2 space-x-2 md:m-3" key={index}>
                                        <Icon className="w-6 h-6 md:h-10 md:w-10" icon={item.iconName} />
                                        <span>{item.skill}</span>
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