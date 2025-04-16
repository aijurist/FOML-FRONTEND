import React from 'react'
import { AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 text-center px-4">
    <AlertTriangle size={58} className="text-red-500 mb-4" />
    <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
    <p className="mt-2 text-gray-700">Oops! The page you're looking for doesn't exist.</p>
    <Link to="/" className="mt-6 inline-block rounded-lg bg-red-500 px-6 py-2 text-white font-medium hover:bg-red-600 transition">
      Go back to Login
    </Link>
  </div>
  )
}

export default PageNotFound;