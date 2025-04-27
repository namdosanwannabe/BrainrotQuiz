import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Header() {
    return (
        <div className='w-full h-16 px-4 border-b-[1px] border-gray-200'>
            <div className='mx-auto max-w-4xl h-full  flex justify-between items-center'>
                <a href='/' className='text-2xl font-bold text-warning'>
                    <span className='text-purple'>Brainrot</span>Quiz</a>
                <div className="flex gap-1">
                    <a href='https://www.tiktok.com/@xoumimasen' target='_blank' className="p-2 rounded-full hover:bg-gray-200 hover:bg-opacity-50 transition-all cursor-pointer">
                        <FaTiktok size={16} />
                    </a>
                    <a href='https://github.com/namdosanwannabe' target='_blank' className="p-2 rounded-full hover:bg-gray-200 hover:bg-opacity-50 transition-all cursor-pointer">
                        <FaGithub size={16} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header