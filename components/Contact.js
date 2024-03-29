import React from 'react'
import IconBtn from './IconBtn';

function Contact() {
    return (
        <div className="flex flex-row justify-center w-full p-3 space-x-5 border-t-2 border-gray-400 md:p-5 ">
            <IconBtn iconName="mdi:gmail" link='mailto:a23g32@gmail.com?' />
            <IconBtn iconName="cib:telegram-plane" link='https://t.me/kenzi0701' />
            <IconBtn iconName="akar-icons:github-fill" link='https://github.com/programmerkenzi?tab=repositories' />
        </div>

    )
}

export default Contact