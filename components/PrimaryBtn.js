import React from 'react'
import { motion } from 'framer-motion'


function PrimaryBtn({ title, link, type = 'url' }) {

  return (
    <div
      className=" min-w-fit min-h-fit  w-[25%] lg:w-[30%] bg-black text-white border-2 border-gary-300 rounded-md text-center align-middle p-2 cursor-pointer hover:bg-white hover:text-black hover:scale-110 transition-all transform">
      <a href={link} target="_blank"  >
        <p className="text-sm md:text-xl lg:text-2xl" >{title}</p>
      </a>
    </div>
  )
}

export default PrimaryBtn