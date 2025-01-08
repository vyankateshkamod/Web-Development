import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800  text-white'>
            <div className='mycontainer flex justify-between items-center px-4 h-14 py-5'>
                <div className='logo font-bold text-white text-2xl'>
                    <span className='text-green-700'>&lt;</span>
                    <span>Pass</span><span className='text-green-700'>OP/&gt;</span>
                </div>
            
                <button className='flex bg-green-700 my-5 mx-2 rounded-full justify-between items-center text-white ring-white ring-1' onClick={() => window.location.href = 'https://github.com/vyankateshkamod'}>
                    <img className='invert w-10 p-1' src="icons/github.svg" alt="githublogo" />
                    <span className='font-bold px-2 '>GitHub</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar