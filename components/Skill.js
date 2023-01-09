import React from 'react'
import { motion } from 'framer-motion'

import SkillList from './SkillList';

const frontend = [
    { iconName: "vscode-icons:file-type-html", skill: "Html" },
    { iconName: "vscode-icons:file-type-css", skill: "Css" },
    { iconName: "vscode-icons:file-type-scss2", skill: "Scss" },
    { iconName: "logos:tailwindcss-icon", skill: "TailwindCss" },
    { iconName: "logos:react", skill: "React" },
    { iconName: "logos:redux", skill: "ReactRedux" },
    { iconName: "logos:redux-saga", skill: "ReduxSaga" },
    { iconName: "tabler:brand-react-native", skill: "ReactNative" },
    { iconName: "cib:electron", skill: "Electron" },
    { iconName: "cib:next-js", skill: "Next.js" },
    { iconName: "logos:vue", skill: "Vue" },
    { iconName: "vscode-icons:file-type-storybook", skill: "Storybook" },

]

const backend = [
    { iconName: "simple-icons:express", skill: "Express" },
    { iconName: "vscode-icons:file-type-mysql", skill: "MySQL" },
    { iconName: "fa6-brands:node", skill: "Node.js" },
    { iconName: "vscode-icons:folder-type-mongodb", skill: "MongoDB" },
    { iconName: "simple-icons:dotnet", skill: ".NET" },
]

const language = [
    { iconName: "vscode-icons:file-type-js", skill: "Javascript" },
    { iconName: "teenyicons:c-sharp-solid", skill: "C#" },
    { iconName: "vscode-icons:file-type-typescript-official", skill: "Typescript" },
    { iconName: "flat-color-icons:linux", skill: "Linux" },

]
const devOps = [
    { iconName: "vscode-icons:folder-type-gcp", skill: "GCP" },
    { iconName: "logos:apache", skill: "Apache" },
    { iconName: "logos:nginx", skill: "Nginx" },


]



function Skill({ setInViewportElIndex }) {
    return (
        <motion.div
            whileInView={() => setInViewportElIndex(1)}
            key='skill'
            id='skills'
            className="w-screen lg:h-screen p-5  sm:p-12  md:px-[60px]  lg:flex-none grid-flow-row    lg:grid lg:grid-cols-2    ">


            <SkillList listName="Language" list={language} />

            <SkillList listName="Frontend" list={frontend} />


            <SkillList listName="Backend" list={backend} />

            <SkillList listName="DevOps" list={devOps} />






        </motion.div>
    )
}

export default Skill