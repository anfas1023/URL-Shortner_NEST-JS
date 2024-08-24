import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {AuthContext} from '../../context/AuthContext'
const LoginPage = () => {
    const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const newContext=useContext(AuthContext);
useEffect(()=>{
  // console.log("duvah");
  console.log("duvah",newContext?.user);
  
  if(newContext?.user){
    console.log("gbsrg");
    
    navigate('/dashboard')
  }
},[newContext?.user])
  const handleLogin = async(e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Implement your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    try {
        const data = {
          email,
          password,
      
        };
        const response = await axios.post(
          "http://localhost:3000/user/login",
          data,{
            withCredentials:true
          }
        );
        console.log("kvdkfjv",response,response.data);
        
        if (response.status === 200) {
          toast.success("Login successful!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          newContext?.setUser(response.data.userId.id)
          setTimeout(() => {
              navigate('/dashboard');
            }, 5000);
        } else {
          toast.warn("Unexpected response!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(
            `Error: ${ error.message}`,
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        } else {
          toast.error("An unexpected error occurred!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }


  };

  return (
    <div className="min-h-screen bg-banner flex items-center justify-center bg-gray-100">
      <div className="bg-gray p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-white mb-2">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-800 transition duration-300"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-white">
  Don't have an account?{" "}
  <Link to="/signup" className="text-blue-600 hover:underline">
    Sign up
  </Link>
</p>
      </div>
      <ToastContainer /> {/* Place ToastContainer here, outside of form and button */}

    </div>
  );
};

export default LoginPage;
