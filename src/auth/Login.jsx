import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/LAPO_Logo_2022-removebg-preview 1.png'
import image from '../assets/Login Card.png'

  alert(`userName: samcode and password: samcode.0406`)
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState({ text: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
      const token = localStorage.getItem('LAPO-ACCESS-TOKEN')

      if (token) {
        return navigate('/dashboard')
      }
  })
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await fetch('https://lapo-back-end.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);


      if (response.ok) {
        setMessage({ text: data.message || "Login successful!", type: "success" });
        // Store the token with the LAPO-ACCESS-TOKEN key
        localStorage.setItem('LAPO-ACCESS-TOKEN', data.token);
        // Redirect after successful login
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        setMessage({ text: data.message || "Login failed", type: "error" });
      }
    } catch (error) {
      setMessage({ text: "Network error occurred", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex items-center w-full h-full overflow-hidden bg-white md:flex-row flex-col">
        {/* Left Section */}
        <div className="flex flex-col justify-between w-full h-full md:w-1/2 p-8 px-25">
          <img
            src={logo}
            alt="Lapo Microfinance Bank"
            className="w-36 mb-6"
          />
          
          <div>
            <h2 className="text-4xl font-semibold mb-2">Hi, Welcome Back!</h2>
            <p className="text-gray-500 mb-10">Please sign in using your credentials.</p>

            {/* Display success/error message */}
            {message.text && (
              <div className={`mb-4 p-3 rounded ${
                message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit}>
                <label className="block mb-2 text-sm font-medium">Username</label>
                <div className="relative mb-8">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        className="w-full rounded-md border border-[#D0D5DD] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <label className="block mb-2 text-sm font-medium">Password</label>
                <div className="relative mb-4">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full rounded-md border border-[#D0D5DD] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="flex flex-col items-start justify-between mb-4">
                    <a href="#" className="text-sm -mt-2.5 hover:underline">
                        Forgot password
                    </a>
                    <div className="flex items-center mt-5">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm">Remember me</span>
                    </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full rounded-md bg-[#014DAF] px-4 py-2 mt-8 text-white cursor-pointer hover:bg-blue-700 ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
          </div>

          <p className="text-[#808080] text-xs">© 2024 Mercator Technologies Ltd. All rights reserved.</p>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex w-1/2 bg-[#E5F0FF] items-start justify-start">
            <img
              src={image}
              alt="Dashboard Preview"
              className="h-full"
            />
        </div>
      </div>
    </div>
  );
};

export default Login;
