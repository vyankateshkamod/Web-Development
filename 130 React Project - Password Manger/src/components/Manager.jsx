import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';


const Manager = () => {

    const [form, setform] = useState({ site: '', username: '', password: '' })
    const ref = useRef()
    const passwordRef = useRef()

    const [passwordArray, setpasswordArray] = useState([])
    useEffect(() => {
        let password = localStorage.getItem('password')
        if (password) {
            setpasswordArray(JSON.parse(password))
        }
    }, [])


    const showPassword = () => {
        passwordRef.current.type = 'text'
        if (ref.current.src.includes('icons/eyecross.png')) {
            ref.current.src = 'icons/eye.png'
            passwordRef.current.type = 'password'
        } else {
            ref.current.src = 'icons/eyecross.png'
            passwordRef.current.type = 'text'
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            localStorage.setItem('password', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
            setform({ site: "", username: "", password: "" })
            toast('password saved!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
        else{
            toast('error: password not saved!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
    }
    const deletePassword = (id) => {
        let c = confirm('Do you realy want to delete password ?')
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem('password', JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast('password deleted!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }
    }
    const editPassword = (id) => {
        setform(passwordArray.filter(item => item.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const copyText = (text) => {
        toast(' Copied to clipboard!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
        });
        navigator.clipboard.writeText(text)
    }

    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition='Bounce'
            />
            {/* Same as */}
            <ToastContainer />

            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

            <div className='md:mycontainer p-3  min-h-[88.2vh]'>

                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-500'>&lt;</span>
                    <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your Own Password Manager</p>

                <div className='text-black flex flex-col p-4  gap-8 items-center'>

                    <input value={form.site} onChange={handleChange} placeholder='Website URL' className='rounded-full border border-green-500 w-full p-4 py-1 ' type="text" id='site' name='site' />

                    <div className='flex flex-col md:flex-row w-full justify-between gap-8'>

                        <input value={form.username} onChange={handleChange} placeholder='Username' className='rounded-full border border-green-500 w-full p-4 py-1 ' type="text" id='username' name='username' />

                        <div className='relative'>

                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Password' className='rounded-full border border-green-500 w-full p-4 py-1 ' type="password" id='password' name='password' />

                            <span className='absolute right-[3px] top-[4px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="icons/eye.png" alt="eye" />
                            </span>

                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center gpa-2 bg-green-500 rounded-full px-8 py-2 w-fit hover:bg-green-400 border border-green-900'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover"
                        ></lord-icon>
                        Save Password
                    </button>
                </div>

                <div className="password">
                    <h1 className='font-bold text-2xl py-4'>Your Passwords</h1>
                    {passwordArray.length === 0 && <div>No Passwords to Show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto mb-10 w-full rounded-md overflow-hidden">
                            <thead className='bg-green-800 text-white'>
                                <tr>
                                    <th className='text-center w-32 py-2'>Site</th>
                                    <th className='text-center w-32 py-2'>Username</th>
                                    <th className='text-center w-32 py-2'>Password</th>
                                    <th className='text-center w-32 py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className='py-2 text-center  border border-white'>
                                            <div className='flex justify-center items-center'>
                                                <a href={item.site} target='_blank'>{item.site}</a>
                                                <div className='cursor-pointer size-7' onClick={() => { copyText(item.site) }}>
                                                    <lord-icon
                                                        style={{ 'width': '25px', 'height': '25px', 'paddingTop': '3px', 'paddingLeft': '3px' }}
                                                        src='https://cdn.lordicon.com/iykgtsbt.json'
                                                        trigger='hover'>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 text-center  border border-white'>
                                            <div className='flex justify-center items-center'>
                                                <span>{item.username}</span>
                                                <div className='cursor-pointer size-7' onClick={() => { copyText(item.username) }}>
                                                    <lord-icon
                                                        style={{ 'width': '25px', 'height': '25px', 'paddingTop': '3px', 'paddingLeft': '3px' }}
                                                        src='https://cdn.lordicon.com/iykgtsbt.json'
                                                        trigger='hover'>
                                                    </lord-icon>
                                                </div>
                                            </div>

                                        </td>
                                        <td className='py-2 text-center border border-white'>
                                            <div className='flex items-center justify-center'>
                                                <span>{item.password}</span>
                                                <div className='cursor-pointer size-7' onClick={() => { copyText(item.password) }}>
                                                    <lord-icon
                                                        style={{ 'width': '25px', 'height': '25px', 'paddingTop': '3px', 'paddingLeft': '3px' }}
                                                        src='https://cdn.lordicon.com/iykgtsbt.json'
                                                        trigger='hover'>
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='py-2 text-center border border-white'>
                                            <div className='flex items-center justify-center'>
                                                <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                                    <lord-icon
                                                        style={{ 'width': '25px', 'height': '25px', 'paddingTop': '3px', 'paddingLeft': '3px' }}
                                                        src='https://cdn.lordicon.com/gwlusjdu.json'
                                                        trigger='hover'
                                                    ></lord-icon>
                                                </span>
                                                <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                                    <lord-icon
                                                        style={{ 'width': '25px', 'height': '25px', 'paddingTop': '3px', 'paddingLeft': '3px' }}
                                                        src='https://cdn.lordicon.com/skkahier.json'
                                                        trigger='hover'
                                                    ></lord-icon>
                                                </span>

                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                </div>

            </div>

        </>
    )
}

export default Manager