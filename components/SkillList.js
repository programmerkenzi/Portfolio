import React from 'react'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'


function SkillList({ listName, list }) {


    return (
        <div className="w-[90vw] h-full md:w-[80vw] text-sm  md:p-10 md:text-lg text-center bg-white p-3 bg-opacity-5 text-gray-300">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="  w-full border-gray-300 border-b-2 md:mb-5 font-bold p-1 md:p-2 text-lg md:text-2xl  ">{listName}</motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 w-full h-full">
                {/* left col */}
                <motion.div className="w-full h-full flex flex-col ">
                    {
                        list.map((item, index) => {
                            if ((index + 1) % 2 !== 0) {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 1 }}
                                        viewport={{ once: true }}
                                        className="m-2  md:m-3 flex flex-row space-x-2" key={index}>
                                        <Icon className=" h-6 w-6 md:h-10 md:w-10" icon={item.iconName} />
                                        <span>{item.skill}</span>
                                    </motion.div>
                                )
                            }
                        })}
                </motion.div>
                {/* right col */}
                <motion.div className="w-full h-full flex flex-col">
                    {
                        list.map((item, index) => {
                            if ((index + 1) % 2 === 0) {
                                return (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 1 }}
                                        viewport={{ once: true }}
                                        className="m-2  md:m-3 flex flex-row space-x-2" key={index}>
                                        <Icon className=" h-6 w-6 md:h-10 md:w-10" icon={item.iconName} />
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