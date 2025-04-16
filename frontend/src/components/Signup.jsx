import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { User, Calendar, Mail, Lock, UserPlus } from 'lucide-react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    age: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const{name , age, email, password} = formData;
      const response = await axios.post('http://localhost:3000/api/auth/signup',{
        name,
        age,
        email,
        password,
      })
      if(response.status == 201){
        navigate('/home');
        console.log("User created successfully");
      }
    }
    catch(err){
      console.log("user did't created");
      navigate("/home");
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
          <p className="mt-2 text-center font-bold text-lg text-indigo-100">Create your account to get started</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="group relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <User size={20} />
              </div>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-gray-700 outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              />
            </div>
            
            <div className="group relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Calendar size={20} />
              </div>
              <input 
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                required
                placeholder="Age"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-gray-700 outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              />
            </div>
            
            <div className="group relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Mail size={20} />
              </div>
              <input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-gray-700 outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              />
            </div>
            
            <div className="group relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Lock size={20} />
              </div>
              <input 
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-gray-700 outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              />
              <p className="mt-1 text-xs text-gray-500">Password must be at least 8 characters</p>
            </div>
            
            <div className="flex items-center">
              <input 
                id="terms" 
                type="checkbox" 
                required
                className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" 
              />
              <label htmlFor="terms" className="ml-2 cursor-pointer text-sm text-gray-600">
                I agree to the <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            <button 
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 font-medium text-white cursor-pointer shadow-md hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-all duration-300"
            >
              {loading ? (
                <span className="animate-pulse">Creating Account...</span>
              ) : (
                <>
                  <UserPlus size={18} className="mr-2" />
                  Create Account
                </>
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Already have an account? 
              <Link to="/login" className="ml-1 font-medium text-indigo-600 hover:text-indigo-800 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;