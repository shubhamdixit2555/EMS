import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }
    
    return (
    <div className='flex select-none'>
        <div className='hidden w-2/4 md:flex items-center justify-center text-center top-[50%] absolute md:-translate-y-[50%]'>
            <img src="https://www.atsi.in/images//inner/emp-payroll.png" alt="" className='w-10/12'/>
        </div>
        <div className='flex w-full items-center justify-center flex-col text-center md:w-2/4 top-[50%] left-[50%] absolute -translate-x-[50%] -translate-y-[50%] md:translate-x-[auto] md:translate-y-[auto] md:top-[20%]'>
            <h1 className='mb-20 text-4xl font-bold md:text-5xl'>Log In</h1>
            <form 
            onSubmit={(e) => {
                submitHandler(e);
            }}
            className='flex flex-col gap-7 w-3/4'>
                <input value={email} onChange={(e) => {
                    setEmail(e.target.value);
                }} required type='email' placeholder='Email' className='border-orange-600 border-2 rounded-full px-5 py-2 text-lg'/>
                <input value={password} onChange={(e) => {
                    setPassword(e.target.value);
                }} required type='password' placeholder='Password' className='border-orange-600 border-2 rounded-full px-5 py-2 text-lg'/>
                {/* here's some code for rememeber me and forgot password */}
                {/* <div className='flex justify-between px-4 text-sm md:text-lg'>
                    <label className='flex items-center cursor-pointer gap-2'>
                    <input type='checkbox' />
                    <span>Remember Me</span>
                    </label>
                    <a href='#' className='text-orange-600'>Forgot Password ?</a>
                </div> */}
                <button type='submit' className='bg-orange-600 rounded-full px-4 py-2 text-xl font-bold mt-8'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login