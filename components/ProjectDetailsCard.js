import React from 'react'
import { motion } from 'framer-motion'

function ProjectDetailsCard({ id, setSelectedId, projects }) {

    const project = projects.find(project => project.name === id);
    const { name, description, tech, img } = project;

    return (
        <motion.div

            className="absolute top-0 flex flex-col justify-center flex-1 w-screen h-screen align-middle bg-black bg-opacity-50"
            layoutId={id}


        >

            <div

                className="  grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-[60%] lg:w-[80%] rounded-md h-[70%] bg-black  lg:h-[60%]  ml-[calc(60%-48px)] lg:ml-[calc(40%-48px)] -translate-x-[70%]  lg:-translate-x-[40%] "

            >

                <div className="w-full h-full overflow-hidden bg-white rounded-md lg:grid lg:grid-cols-1 lg:grid-rows-2 bg-opacity-5">
                    {/* close button */}
                    <div
                        onClick={() => setSelectedId(null)}
                        className="absolute cursor-pointer right-2 top-2">

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    {/* image */}
                    <div className="w-full overflow-hidden lg:row-span-1">

                        <motion.img src={img} className="w-full " />
                    </div>
                    {/*  button */}
                    <div className="absolute flex flex-row items-center justify-center w-full row-span-2 bottom-[5%] md:bottom-[5%] lg:relative lg:bottom-0 lg:space-y-5 lg:p-10 lg:flex-col">
                        <motion.p className=' hidden  lg:flex mb-[10%] text-2xl'>{name}</motion.p>
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

                </div>
                <motion.div className="flex-col w-full row-span-2 p-5 space-y-3 lg:space-y-5">
                    <p className="text-2xl font-bold text-center md:hidden">{name}</p>
                    <p className="text-xl font-bold underline track">Description</p>
                    <p className="text-lg leading-relaxed tracking-wide ">{description}</p>
                    <p className="text-xl font-bold underline">Frameworks and technics</p>
                    <p className="text-lg leading-relaxed tracking-wide ">{tech}</p>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default ProjectDetailsCard