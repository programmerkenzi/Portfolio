import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import ProjectDetailsCard from './ProjectDetailsCard';

const projects = [{
    name: 'chat app',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    tech: 'React, Node, Express, MongoDB',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    img2: 'http://webmeup.com/upload/blog/lead-image-105.png'
}, {
    name: 'chat app2',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    tech: 'React, Node, Express, MongoDB',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    img2: 'http://webmeup.com/upload/blog/lead-image-105.png'
}, {
    name: 'chat app3',
    description: ' Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    tech: 'React, Node, Express, MongoDB',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    img2: 'http://webmeup.com/upload/blog/lead-image-105.png'

}, {
    name: 'chat app4',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    tech: 'React, Node, Express, MongoDB',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    img2: 'http://webmeup.com/upload/blog/lead-image-105.png'
}, {
    name: 'chat app5',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    tech: 'React, Node, Express, MongoDB',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    img2: 'http://webmeup.com/upload/blog/lead-image-105.png'
}, {
    name: 'chat app6',
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
    tech: 'React, Node, Express, MongoDB',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    img2: 'http://webmeup.com/upload/blog/lead-image-105.png'
},]

function Projects({ isBigScreen, setInViewportElIndex, screenWidth }) {

    const [selectedId, setSelectedId] = useState(null);

    const isNotMobile = screenWidth > 768;

    return (
        <AnimateSharedLayout type="crossfade" >

            <AnimatePresence>


                <motion.div
                    whileInView={(i) => setInViewportElIndex(2)}

                    id='projects'
                    className='w-screen  lg:h-screen  p-12  md:px-[60px] grid-cols-1  gap-3   md:flex-none grid-flow-row    grid lg:grid-cols-3 md:grid-cols-2  lg:gap-7 md:gap-5     cursor-pointer '
                >

                    {projects.map((project, index) => { return <ProjectCard key={index} index={index} project={project} selectedId={selectedId} setSelectedId={setSelectedId} isBigScreen={isBigScreen} isNotMobile={isNotMobile} /> })}

                    {selectedId && isBigScreen && <ProjectDetailsCard id={selectedId} setSelectedId={setSelectedId} projects={projects} />}
                </motion.div>

            </AnimatePresence>

        </AnimateSharedLayout  >
    )
}

export default Projects