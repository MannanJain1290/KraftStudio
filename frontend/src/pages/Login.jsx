import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Welcome to Kraft Studio!')
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Welcome back!')
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  const inputClass = 'w-full border border-[#E8E2DC] bg-[#FAF6F0] rounded-xs py-3 px-4 text-sm text-[#2C2523] outline-none focus:border-[#43281C] transition-colors placeholder:text-gray-400 font-lora'

  return (
    <div className='min-h-[75vh] flex items-center justify-center px-4 py-12 bg-white font-lora'>
      <div className='w-full max-w-md'>

        {/* Header */}
        <div className='text-center mb-8'>
          {/* Brand Logo */}
          <img src={assets.ks_logo} alt="Kraft Studio" className='h-16 w-auto mx-auto mb-4 object-contain' />
          <h1 className='font-cormorant text-3xl sm:text-4xl font-bold text-[#2C2523]'>
            {currentState === 'Login' ? 'Welcome Back' : 'Join Kraft Studio'}
          </h1>
          <p className='text-xs text-gray-500 uppercase tracking-widest mt-2'>
            {currentState === 'Login' ? 'Sign in to your artisan account' : 'Create your handcraft account'}
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={onSubmitHandler}
          className='bg-white border border-[#E8E2DC] rounded-sm p-8 shadow-sm space-y-4'
        >
          {currentState === 'Sign Up' && (
            <div>
              <label className='block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1.5'>Full Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className={inputClass}
                placeholder='Your full name'
                required
              />
            </div>
          )}

          <div>
            <label className='block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1.5'>Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className={inputClass}
              placeholder='your@email.com'
              required
            />
          </div>

          <div>
            <label className='block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1.5'>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className={inputClass}
              placeholder='••••••••'
              required
            />
          </div>

          {currentState === 'Login' && (
            <div className='text-right'>
              <button type='button' className='text-xs text-[#43281C] hover:underline'>Forgot password?</button>
            </div>
          )}

          <button
            type='submit'
            className='w-full bg-[#43281C] text-white text-xs font-semibold uppercase tracking-widest py-4 hover:bg-[#2C1910] transition-colors shadow-sm mt-2'
          >
            {currentState === 'Login' ? 'Sign In' : 'Create Account'}
          </button>

          <div className='text-center pt-2'>
            <p className='text-sm text-gray-500'>
              {currentState === 'Login' ? "Don't have an account? " : "Already have an account? "}
              <button
                type='button'
                onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')}
                className='text-[#43281C] font-semibold hover:underline'
              >
                {currentState === 'Login' ? 'Create account' : 'Sign in'}
              </button>
            </p>
          </div>
        </form>

        {/* Reassurance note */}
        <p className='text-center text-xs text-gray-400 mt-6'>
          🔒 Your data is safe & secure — we never share your information.
        </p>
      </div>
    </div>
  )
}

export default Login
