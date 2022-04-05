import React, { useState } from 'react'
import { motion } from "framer-motion"


function ProjectCard({ project, index, selectedId, setSelectedId, isBigScreen }) {
    const [isHover, setIsHover] = useState(false)
    const { name, description, tech, img, img2 } = project;
    const selectedOnSmallScreen = !isBigScreen && selectedId === name;

    const onClick = (name) => {
        if (selectedId === name) {
            setSelectedId(null)
        } else {
            setSelectedId(name)
        }
    }

    return (

        <motion.div
            className=" w-full h-[40vh]  md:h-full  overflow-hidden rounded-lg  bg-white bg-opacity-5  shrink-0 cursor-pointer relative   "
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            onClick={() => onClick(name)}
            layoutId={name}
            whileInView={{ opacity: [0, 1] }}
            animate={{ height: selectedOnSmallScreen ? '100vh' : '40vh' }}
            viewport={{ once: true }}




        >

            <motion.img
                animate={{ scale: isHover && isBigScreen ? 1.05 : 1, height: selectedOnSmallScreen ? '50%' : '75%' }}
                className="w-full h-3/5 md:h-1/2 "
                src={selectedOnSmallScreen ? img2 : img} />
            <div className="flex flex-col w-full p-3 space-y-3 h-1/4 md:h-1/2 ">
                {!selectedOnSmallScreen ?
                    <>
                        <p className="font-semibold text-center text-md sm:text-lg md:text-2xl">{name}</p>
                        <p className="text-sm text-center lg:text-lg">{tech}</p>
                    </>
                    :
                    <>
                        <p className="text-xl font-bold text-center sm:text-2xl md:hidden">{name}</p>
                        <p className="text-lg font-bold underline sm:text-xl ">Description</p>
                        <p className="text-base leading-relaxed tracking-wide sm:text-lg ">{description}</p>
                        <p className="text-lg font-bold underline sm:text-xl">Frameworks and technics</p>
                        <p className="text-base leading-relaxed tracking-wide sm:text-lg ">{tech}</p>
                        <div className="absolute flex flex-row items-center justify-center w-full  bottom-[5%] left-0 ">

                            <motion.div
                                whileHover={{ backgroundColor: 'white', color: 'black', scale: 1.05 }}
                                className=" mr-10 lg:mr-0 w-[25%] lg:h-[20%] lg:w-[50%] bg-black border-2 border-gary-300 rounded-md text-center align-middle p-2 cursor-pointer">
                                <p className="text-xl " >View</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ backgroundColor: 'white', color: 'black', scale: 1.05 }}
                                className="  w-[25%] lg:h-[20%] lg:w-[50%] bg-black border-2 border-gary-300 rounded-md text-center align-middle p-2 cursor-pointer">
                                <p className="text-xl " >Code</p>
                            </motion.div>
                        </div>
                    </>
                }
            </div>



            {/* hover while in big screen */}
            <motion.div
                animate={isHover && isBigScreen ? { opacity: 0.8 } : { opacity: 0 }}
                className="absolute top-0 left-0 flex flex-col justify-center flex-1 w-full h-full bg-gray-900 opacity-0">

                <p className="text-2xl text-center ">See Details</p>
            </motion.div>




        </motion.div>


    )
}

export default ProjectCard