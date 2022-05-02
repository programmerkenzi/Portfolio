import React from 'react'
import { motion } from 'framer-motion'

import SkillList from './SkillList';

const frontend = [
    { iconName: "vscode-icons:file-type-html", skill: "Html" },
    { iconName: "logos:react", skill: "React" },
    { iconName: "vscode-icons:file-type-js", skill: "Javascript" },
    { iconName: "logos:redux", skill: "ReactRedux" },
    { iconName: "vscode-icons:file-type-css", skill: "Css" },
    { iconName: "logos:redux-saga", skill: "ReduxSaga" },
    { iconName: "logos:tailwindcss-icon", skill: "TailwindCss" },
    { iconName: "tabler:brand-react-native", skill: "ReactNative" },
    { iconName: "cib:next-js", skill: "Next.js" },
    { iconName: "cib:electron", skill: "Electron" },
]

const backend = [
    { iconName: "simple-icons:express", skill: "Express" },
    { iconName: "vscode-icons:file-type-mysql", skill: "MySQL" },
    { iconName: "fa6-brands:node", skill: "Node.js" },
    { iconName: "vscode-icons:folder-type-mongodb", skill: "MongoDB" },
]



function Skill({ setInViewportElIndex }) {
    return (
        <motion.div
            whileInView={() => setInViewportElIndex(1)}
            key='skill'
            id='skills'
            className="grid justify-center w-screen h-screen grid-rows-2 p-12 shrink-0 ">

            <SkillList listName="Frontend" list={frontend} />


            <SkillList listName="Backend" list={backend} />






        </motion.div>
    )
}

export default Skill