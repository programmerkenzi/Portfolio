import React from 'react'

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



function Skill() {
    return (
        <div className="h-screen w-screen shrink-0 grid grid-rows-2   justify-center p-20  ">

            <SkillList listName="Frontend" list={frontend} />


            <SkillList listName="Backend" list={backend} />






        </div>
    )
}

export default Skill