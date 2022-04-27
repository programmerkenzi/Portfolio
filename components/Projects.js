import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import ProjectDetailsCard from './ProjectDetailsCard';

const projects = [{
    name: 'Chat App',
    description: 'This is my first full stack chat app project I made from scratch for previous work, download the apk give it a try and have fun!',
    loginInfo: [
        { username: 'Kenzi', password: '123456' }, { username: 'Alice', password: '123456' },
    ],
    tech: 'React Native Expo, Node, Express, MongoDB, Socket.io',
    type: 'mobile',
    img: '/images/chatApp-1.png',
    img2: '/images/chatApp-2.png',
    btn: [{ title: 'Download', url: '/apk/chat-app.apk' },]
}, {
    name: 'Airbnb Clone',
    description: 'This is a responsive website that clone from airbnb website. ',
    tech: 'NextJs, Firebase',
    type: 'web',
    img: '/images/airbnb-clone-1.png',
    img2: '/images/airbnb-clone-2.png',
    btn: [{ title: 'View', url: 'https://airbnb-clone-ten-eosin.vercel.app' },]
}, {
    name: 'Uber Clone',
    description: ' This is a mobile app that clone from uber app, download the apk give it a try and have fun!',
    tech: 'React Native Expo, Firebase',
    type: 'mobile',
    img: '/images/uber-clone-1.png',
    img2: '/images/uber-clone-2.png',
    btn: [{ title: 'Download', url: '/apk/uber-clone.apk' },]

}, {
    name: 'Metaverse Chat App',
    description: 'This is a responsive website that can login with your metamask wallet and chat with other people. ',
    tech: 'NextJs, Moralis',
    img: '/images/metaverse-chat-1.png',
    img2: '/images/metaverse-chat-2.png',
    btn: [{ title: 'View', url: 'https://metaverse-challenge-two-lemon.vercel.app' },]
},]

function Projects({ isBigScreen, setInViewportElIndex, screenWidth }) {

    const [selectedId, setSelectedId] = useState(null);

    const isNotMobile = screenWidth >= 768;

    return (
        <AnimateSharedLayout type="crossfade" >

            <AnimatePresence>


                <motion.div
                    whileInView={(i) => setInViewportElIndex(2)}

                    id='projects'
                    className='w-screen  lg:h-screen p-5  sm:p-12  md:px-[60px] grid-cols-1  gap-3   md:flex-none grid-flow-row    grid lg:grid-cols-3 md:grid-cols-2  lg:gap-7 md:gap-5     '
                >

                    {projects.map((project, index) => { return <ProjectCard key={index} index={index} project={project} selectedId={selectedId} setSelectedId={setSelectedId} isBigScreen={isBigScreen} isNotMobile={isNotMobile} /> })}

                    {selectedId && isNotMobile && <ProjectDetailsCard id={selectedId} setSelectedId={setSelectedId} projects={projects} isBigScreen={isBigScreen} />}

                </motion.div>

            </AnimatePresence>

        </AnimateSharedLayout  >
    )
}

export default Projects