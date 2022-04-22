import React, { useState } from 'react'
import { motion } from "framer-motion"


function ProjectCard({ project, index, selectedId, setSelectedId, isBigScreen, isNotMobile }) {
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
            className=" w-full h-[40vh] lg:h-full  overflow-hidden rounded-lg  bg-white bg-opacity-5  shrink-0 cursor-pointer relative   "
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            onClick={() => onClick(name)}
            layoutId={name}
            whileInView={{ opacity: [0, 1] }}
            animate={{ minHeight: 'content', height: selectedOnSmallScreen && !isNotMobile ? '100vh' : selectedOnSmallScreen && isNotMobile ? '70vh' : 'calc(50vh - 56px)' }}
            viewport={{ once: true }}
        >

            <motion.img
                animate={{ scale: isHover && isBigScreen ? 1.05 : 1, height: selectedOnSmallScreen ? '50%' : '65%' }}
                className="object-cover w-full h-full lg:h-1/2"
                src={selectedOnSmallScreen ? img2 : img} />


            <div className="flex flex-col   w-full  p-2  md:p-5  h-1/4 md:h-[35%] lg:h-1/2 ">
                {!selectedOnSmallScreen ?
                    <div className=''>
                        <p className="mb-2 font-semibold text-center text-md sm:text-lg md:text-xl md:mb-5 lg:text-2xl ">{name}</p>
                        <p className="text-sm text-center md:text-base lg:text-lg">{tech}</p>
                    </div>
                    :
                    <div className='flex flex-col justify-between flex-1 h-full m-auto space-y-5 '>

                        <div className=''>

                            <p className="text-lg font-bold text-center md:text-2xl lg:hidden">{name}</p>
                            <p className="text-lg font-bold underline sm:text-sm ">Description</p>
                            <p className="text-sm leading-relaxed tracking-wide sm:text-lg ">{description}</p>
                            <p className="text-lg font-bold underline sm:text-sm">Frameworks and technics</p>
                            <p className="mb-5 text-sm leading-relaxed tracking-wide sm:text-lg ">{tech}</p>
                        </div>

                        {/* btn */}
                        <div className="flex flex-row items-center justify-center w-full space-x-6 h-1/5 md:mt-8 md:space-x-8">

                            <motion.div
                                whileHover={{ backgroundColor: 'white', color: 'black', scale: 1.05 }}
                                className=" lg:mr-0 w-[25%] lg:h-[20%] lg:w-[50%] bg-black border-2 border-gary-300 rounded-md text-center align-middle p-2 cursor-pointer">
                                <p className="text-sm md:text-xl" >View</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ backgroundColor: 'white', color: 'black', scale: 1.05 }}
                                className="  w-[25%] lg:h-[20%] lg:w-[50%] bg-black border-2 border-gary-300 rounded-md text-center align-middle p-2 cursor-pointer">
                                <p className="text-sm md:text-xl" >Code</p>
                            </motion.div>
                        </div>
                    </div>
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