import React from 'react'

const Footer = () => {
    return (
        <div className='text-white flex flex-col justify-center items-center  bottom-0 w-full bg-slate-800'>
            <div className='logo text-sm text-white font-bold '>
                <span className='text-green-500'>&lt;</span>
                <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
            </div>
            <span className='text-sm text-green-600'>Developed by Vyankatesh Kamod</span>
        </div>
    )
}

export default Footer