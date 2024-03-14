import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom"
import {login as authLogin} from '../store/authSlice'
import {Button ,input, Logo} from './index'
import { UseDispatch, useDispatch } from "react-redux"
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error , setError] = useState('') 

    const login = async(data) => {
        setError('')
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div 
    className=''
    >
        <div>
            <div>
                <span>
                    <Logo width="100%"/>
                </span>
            </div>
            <h2>Sign in to your account</h2>
            
        </div>
    </div>
  )
}

export default Login