import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronLeft, Calendar, Users, FileText, MessageCircle, Share2 } from 'lucide-react';

export default function DepartmentDetailsPage() {
  const [department, setDepartment] = useState({
    id: 1,
    name: "Education Department",
    description: "The Education Department oversees public education policies, programs, and funding to ensure quality education for all citizens.",
    image: "/api/placeholder/800/400",
    activePetitions: 12,
    totalSignatures: 24680,
    successRate: 68,
    recentPetitions: [
      {
        id: 1,
        title: "Increase School Funding in Underserved Areas",
        signatures: 5689,
        deadline: "May 30, 2025",
        status: "active"
      },
      {
        id: 2,
        title: "Implement Enhanced Teacher Training Programs",
        signatures: 3420,
        deadline: "June 15, 2025",
        status: "active"
      },
      {
        id: 3,
        title: "Reduce Class Sizes in Public Schools",
        signatures: 7834,
        deadline: "May 12, 2025",
        status: "active"
      },
      {
        id: 4,
        title: "Modernize School Curriculum for Digital Age",
        signatures: 4210,
        deadline: "June 28, 2025",
        status: "active"
      }
    ]
  });

  // You would fetch the department data based on URL parameter in a real app
  useEffect(() => {
    // Sample code to fetch department data:
    // const departmentId = new URLSearchParams(window.location.search).get('id');
    // fetchDepartmentData(departmentId).then(data => setDepartment(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="/home" className="flex items-center text-blue-600 hover:text-blue-800">
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span>Back to Home</span>
              </a>
            </div>
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Start a Petition
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Department Header */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold">{department.name}</h1>
          <p className="mt-2 text-blue-100 max-w-3xl">{department.description}</p>
        </div>
      </div>

      {/* Department Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Department Stats */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img 
                src={department.image} 
                alt={department.name} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Department Statistics</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <FileText className="w-5 h-5 mr-2" />
                      <span>Active Petitions</span>
                    </div>
                    <span className="font-medium">{department.activePetitions}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2" />
                      <span>Total Signatures</span>
                    </div>
                    <span className="font-medium">{department.totalSignatures.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">✓</span>
                      <span>Success Rate</span>
                    </div>
                    <span className="font-medium">{department.successRate}%</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex items-center justify-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Submit New Petition
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg mt-6 p-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-3 text-gray-600">
                <p>Email: contact@{department.name.toLowerCase().replace(/\s+/g, '')}.gov</p>
                <p>Phone: (555) 123-4567</p>
                <p>Office Hours: Mon-Fri, 9am - 5pm</p>
              </div>
            </div>
          </div>

          {/* Right Column - Active Petitions */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Active Petitions</h2>
                <div className="flex space-x-2">
                  <select className="border rounded-md px-3 py-1 bg-white text-gray-700">
                    <option>Most Recent</option>
                    <option>Most Signatures</option>
                    <option>Deadline Soon</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {department.recentPetitions.map((petition) => (
                  <div key={petition.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800">
                      <a href={`/petition/${petition.id}`}>{petition.title}</a>
                    </h3>
                    
                    <div className="mt-3 flex flex-wrap gap-4">
                      <div className="flex items-center text-gray-500">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{petition.signatures.toLocaleString()} signatures</span>
                      </div>
                      
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>Deadline: {petition.deadline}</span>
                      </div>
                      
                      <div className="ml-auto flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          <span>Comments</span>
                        </button>
                        
                        <button className="text-blue-600 hover:text-blue-800 flex items-center">
                          <Share2 className="w-4 h-4 mr-1" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${Math.min(100, (petition.signatures / 10000) * 100)}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {Math.min(100, Math.round((petition.signatures / 10000) * 100))}% of 10,000 goal
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <a 
                        href={`/petition/${petition.id}`}
                        className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors"
                      >
                        View Details
                      </a>
                      <button className="ml-2 px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors">
                        Sign Petition
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
                  View All Petitions
                </button>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6 mt-6">
              <h2 className="text-2xl font-semibold mb-4">Department Updates</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium">New Director Appointed</h3>
                  <p className="text-gray-600 text-sm">Posted on April 10, 2025</p>
                  <p className="mt-1">The department welcomes Dr. Sarah Johnson as the new department director, bringing over 15 years of experience in public policy.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium">Budget Increases Approved</h3>
                  <p className="text-gray-600 text-sm">Posted on April 5, 2025</p>
                  <p className="mt-1">The annual budget has been increased by 12% following successful advocacy from citizen petitions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-2">About Our Platform</h3>
              <p className="text-gray-400">We connect citizens with government departments to facilitate meaningful change through petitions.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Browse Departments</a></li>
                <li><a href="#" className="hover:text-white">Start a Petition</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Stay Connected</h3>
              <p className="text-gray-400">Subscribe to our newsletter for updates</p>
              <div className="mt-2 flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>&copy; 2025 Petition Website. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}