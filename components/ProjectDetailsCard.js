import React from 'react'
import { motion } from 'framer-motion'
import PrimaryBtn from './PrimaryBtn';

function ProjectDetailsCard({ id, setSelectedId, projects }) {

    const project = projects.find(project => project.name === id);
    const { name, description, tech, img, type, btn, img2 } = project;

    return (
        <motion.div

            className="absolute flex flex-col justify-center flex-1 w-screen h-[100vh] align-middle bg-black bg-opacity-50 z-[100]"
            layoutId={id}


        >

            <div

                className="  grid grid-cols-1 grid-rows-2 lg:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 w-[60%] lg:w-[80%] rounded-md h-[80%] bg-black  lg:h-[60%]  ml-[calc(50%-48px)] -translate-x-[50%] mt-[50vh] lg:-translate-y-[50%] md:-translate-y-[calc(50%-48px)] "

            >

                <div className="w-full h-full bg-white rounded-md -hidden md:p-5 lg:grid lg:grid-cols-1 lg:grid-rows-2 bg-opacity-10">
                    {/* close button */}
                    <div
                        onClick={() => setSelectedId(null)}
                        className="absolute z-50 cursor-pointer right-2 top-2">

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    {/* image */}
                    <div className="w-full h-full transition-all transform -hidden lg:row-span-2 ">

                        <motion.img src={img2} className={` h-[99%]   m-auto md:rounded-lg md:shadow-lg md:shadow-gray-700   `} />
                    </div>


                </div>
                <motion.div className="relative flex-col w-full row-span-2 p-5 space-y-3 lg:space-y-5">
                    <p className="text-2xl font-bold text-center">{name}</p>
                    <p className="text-xl font-bold underline track">Description</p>
                    <p className="text-lg leading-relaxed tracking-wide ">{description}</p>
                    <p className="text-xl font-bold underline">Frameworks and technics</p>
                    <p className="text-lg leading-relaxed tracking-wide ">{tech}</p>
                    {/*  button */}
                    <div className="z-50 flex flex-row items-end justify-center w-full space-x-6 h-1/5 md:mt-8 md:space-x-8 absolute bottom-[5%] left-0">
                        {/* btn */}


                        {btn?.map((item, index) => <PrimaryBtn key={index} title={item.title} link={item.url} name={name} />)}

                    </div>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default ProjectDetailsCard