import React, { useState } from 'react'
import { motion } from "framer-motion"
import PrimaryBtn from './PrimaryBtn';


function ProjectCard({ project, index, selectedId, setSelectedId, isBigScreen, isNotMobile }) {
    const [isHover, setIsHover] = useState(false)
    const { name, description, tech, img, img2, btn, type, loginInfo } = project;
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
            className={`relative grid grid-cols-1 grid-rows-2  ${(type === 'mobile') && 'md:p-5 p-2'} overflow-hidden bg-white rounded-lg cursor-pointer lg:h-full bg-opacity-5 shrink-0 hover:shadow-lg`}
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            onClick={() => onClick(name)}
            layoutId={name}
            whileInView={{ opacity: [0, 1] }}
            animate={{ minHeight: '40vh', maxHeight: `${selectedOnSmallScreen && !isNotMobile ? '100vh' : !isNotMobile ? '60vh' : isNotMobile ? '45vh' : '100%'}` }}
            viewport={{ once: true }}
        >

            <motion.div
                animate={{ scale: isHover && isBigScreen ? 1.05 : 1 }}
                className={`h-full ${selectedOnSmallScreen && !isNotMobile ? 'row-span-1 p-2' : 'row-span-2'} overflow-hidden `}
            >

                <motion.img

                    className={` h-[95%] object-cover m-auto rounded-sm shadow-sm  md:rounded-lg md:shadow-md shadow-gray-700  `}
                    src={selectedOnSmallScreen ? img2 : img} />
            </motion.div>


            <div className={`flex flex-col ${selectedOnSmallScreen && !isNotMobile ? 'row-span-2' : 'row-span-1'}   w-full  p-2  md:p-5   md:h-[35%] lg:h-1/2 `}>
                {!selectedOnSmallScreen ?
                    <div className='m-auto'>
                        <p className="mb-2 font-semibold text-center text-white text-md sm:text-lg md:text-xl md:mb-5 lg:text-2xl ">{name}</p>
                        <p className="text-xs text-center sm:text-sm md:text-base lg:text-lg">{tech}</p>
                    </div>
                    :
                    <div className='flex flex-col justify-between flex-1 h-full m-auto space-y-5 '>

                        <div className='p-2 m-auto space-y-2 sm:space-y-5 '>

                            <p className="font-bold text-center sm:text-lg md:text-2xl text-md">{name}</p>
                            <p className="text-base font-bold underline sm:text-sm ">Description</p>
                            <p className="text-sm leading-relaxed tracking-wide sm:text-sm lg:text-lg ">{description}</p>
                            <p className="text-base font-bold underline sm:text-sm">Frameworks and technics</p>
                            <p className="mb-5 text-sm leading-relaxed tracking-wide sm:text-sm md:text-base lg:text-lg ">{tech}</p>
                            {/* {loginInfo &&
                                <>
                                    <p className="text-xs font-bold text-red-500 underline md:text-base">* Login with username and password below:</p>
                                    {loginInfo.map((account, index) =>
                                        <>
                                            <p className="text-xs text-red-500" key={index}>username: {account.username} </p>
                                            <p className="text-xs text-red-500" key={index}>username: {account.username} </p>

                                        </>
                                    )}

                                </>



                            } */}

                        </div>

                        {/* btn */}
                        <div className="z-50 flex flex-row items-center justify-center w-full space-x-6 h-1/5 md:mt-8 md:space-x-8">

                            {btn.map((item, index) => <PrimaryBtn key={index} title={item.title} link={item.url} />)}
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