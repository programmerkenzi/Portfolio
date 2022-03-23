import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
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
    description: 'React, Node, Express, MongoDB',
    tech: 'React, Node, Express, MongoDB',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
    img2: 'http://webmeup.com/upload/blog/lead-image-105.png'
},]

function Projects({ isBigScreen }) {

    const [selectedId, setSelectedId] = useState(null);



    return (
        <AnimateSharedLayout type="crossfade" >

            <AnimatePresence>


                <div
                    id='projects'
                    className='w-screen  md:h-screen    flex flex-col px-5 py-15  md:px-[60px] md:py-6   md:flex-none md:grid md:grid-cols-3  space-y-[5vh] md:space-y-0 md:gap-10    justify-center md:grid-row-2 '
                >

                    {projects.map((project, index) => { return <ProjectCard key={index} index={index} project={project} selectedId={selectedId} setSelectedId={setSelectedId} isBigScreen={isBigScreen} /> })}

                    {selectedId && isBigScreen && <ProjectDetailsCard id={selectedId} setSelectedId={setSelectedId} projects={projects} />}
                </div>

            </AnimatePresence>

        </AnimateSharedLayout  >
    )
}

export default Projects