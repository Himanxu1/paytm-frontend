import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const Login = () => {
  const navigate=  useNavigate()
  const {setUserId,setUsername} = useContext(UserContext)
  const backend_url = process.env.REACT_APP_BACKEND_URI;
    const [formData, setFormData] = useState({
     
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        axios.post(`${backend_url}/api/v1/user/login`,formData).then((res)=>{
            console.log(res)
            setUserId(res.data.userId)
            setUsername(res.data.name)
            localStorage.setItem("token", res.data.token)
            navigate("/dashboard")
        }
        ).catch((err)=>{
            console.log(err)
        })
        
  
      };
  return (
    <div>
         <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-indigo-500 text-white py-2 px-4 rounded-md hover:from-purple-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
          <p className='p-2'>New User ? <Link to="/signup" className='text-blue-500' >SignUp</Link></p>
        </form>
      </div>
    </div>

        
    </div>
    </div>
  )
}

export default Login