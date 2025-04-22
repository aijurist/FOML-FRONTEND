import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [showPetitionForm, setShowPetitionForm] = useState(false);
  const [submittedPetition, setSubmittedPetition] = useState(0);
  const [petition, setPetition] = useState();
  const [title,setTitle] = useState();
  const [mobile,setMobile]= useState();
  const [name,setName] = useState();
  const [address, setAddress] = useState()
  const [status,setStatus] = useState("submitted");
  const [inProgress, setInProgress] = useState(0);
  const [resolved, setResolved] = useState(0);
  const navigate = useNavigate();

    const departments = [
      {
        name: "Health Department",
        description: "The Health Department of Tamil Nadu oversees public health initiatives, hospitals, and medical services across the state. It ensures access to quality healthcare, implements disease control programs, and manages emergency medical response. The department also promotes health awareness and preventive care through various state-wide campaigns.",
        contactInfo: "https://tnhealth.tn.gov.in/",
        website: "https://www.tn.gov.in/dept_profile.php?dep_id=MTE="
      },
      {
        name: "Education Department",
        description: "The Education Department of Tamil Nadu manages the administration of schools, colleges, and other educational institutions in the state. It formulates policies to enhance literacy, promote inclusive education, and ensure quality teaching standards. The department also oversees curriculum development, teacher training, and student welfare programs.",
        contactInfo: "https://tnschools.gov.in/welcome",
        website: "https://www.tn.gov.in/dept_profile.php?dep_id=Mjg="
      },
      {
        name: "Transport Department",
        description: "The Transport Department of Tamil Nadu regulates road transport services, vehicle registration, and driver licensing across the state. It ensures safe and efficient public transportation through policies, inspections, and infrastructure development. The department also works on improving traffic management and reducing road accidents.",
        contactInfo: "https://tnsta.gov.in/",
        website: "https://www.tn.gov.in/dept_profile.php?dep_id=MzM="
      },
      {
        name: "Revenue Department",
        description: "The Revenue Department of Tamil Nadu manages land administration, property records, and tax collection across the state. It handles land disputes, issues related to patta and chitta, and oversees disaster management and relief efforts. The department plays a key role in maintaining law and order through effective revenue governance.",
        contactInfo: "https://www.cra.tn.gov.in/mission.php",
        website: "https://www.tn.gov.in/dept_profile.php?dep_id=MjY="
      },
      {
        name: "Agriculture Department",
        description: "The Agriculture Department of Tamil Nadu supports farmers by promoting sustainable farming practices, crop production, and irrigation management. It provides subsidies, technical guidance, and crop insurance to improve agricultural productivity. The department also implements schemes to enhance rural livelihoods and food security.",
        contactInfo: "https://www.tnagrisnet.tn.gov.in/",
        website: "https://www.tn.gov.in/dept_profile.php?dep_id=Mg=="
      },
      {
        name: "Municipal Administration",
        description: "The Municipal Administration Department of Tamil Nadu oversees urban governance, infrastructure development, and civic services in cities and towns. It manages water supply, sanitation, waste management, and public amenities. The department works to improve urban living standards through planned development and citizen-centric services.",
        contactInfo: "https://www.tnurbantree.tn.gov.in/",
        website: "https://www.tn.gov.in/dept_profile.php?dep_id=MjE="
      }
    ];

    const handleForm = async (e) => {
      e.preventDefault();
      
      try {
        const mlResponse = await axios.post('http://localhost:8000/analyze', {
          petition_text: petition,
          additional_context: title,
        });
    
        console.log(mlResponse.data);
    
        if (mlResponse.data.success === true) {
          try {
            const response = await axios.post('http://localhost:3000/api/createPetition', {
              title,
              status,
              name,
              mobile,
              address,
              department: "health",
              petition,
            });
    
            if (response.status === 201) {
              setShowPetitionForm(false);
              setTitle("");
              setMobile("");
              setPetition("");
              setAddress("");
              setName("");
              setSubmittedPetition(submittedPetition + 1);
            } else {
              console.log("Petition not created");
            }
          } catch (err) {
            console.log("Error submitting petition:", err);
          }
        } else {
          console.log("ML response did not return success");
        }
      } catch (err) {
        console.log("Error analyzing petition:", err);
      }
    };
      return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-800 font-bold text-xl">TN</span>
            </div>
            <h1 className="text-2xl font-bold">Tamil Nadu Citizen Petition Portal</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Status</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Make Your Voice Heard</h2>
            <p className="text-gray-600 mb-6">Submit your petition directly to the Tamil Nadu Government departments and track its status.</p>
            <button 
              onClick={() => setShowPetitionForm(true)}
              className="bg-green-600 hover:bg-green-700 text-white cursor-pointer font-bold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300"
            >
              Make Petition
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">{submittedPetition}</div>
              <div className="text-gray-600">Petitions Submitted</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600">{resolved}</div>
              <div className="text-gray-600">Petitions Resolved</div>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-amber-600">{inProgress}</div>
              <div className="text-gray-600">In Progress</div>
            </div>
          </div>
        </div>

        {/* Petition Form Modal */}
        {showPetitionForm && (
          <div className="fixed inset-0 backdrop-blur-xs bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-screen overflow-auto">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-center text-xl font-bold">Submit Your Petition</h3>
                <button 
                  onClick={() =>{
                     setShowPetitionForm(false);
                    }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-6">                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    value={title}
                    className="w-full p-2 border border-gray-300 rounded" 
                    placeholder="Brief subject of your petition" onChange={(e)=>setTitle(e.target.value)}
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Your Petition</label>
                    <textarea 
                      value={petition}
                      className="w-full p-4 h-64 border border-gray-300 rounded-lg bg-transparent resize-none" onChange={(e)=>{setPetition(e.target.value)}}
                      placeholder="Write your petition here..."
                    />
                </div>
                <div className="mb-6">
                  <label className="text-center block font-bold text-lg text-black-700 mb-4">Information about petition</label>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                    <lable className="block text-gray-700">Full Name</lable>
                    <input 
                      type="text" 
                      value={ name }
                      className="p-2 w-full border border-gray-300 rounded"
                      onChange={(e)=>{setName(e.target.value)}} 
                      placeholder="Full Name of Petitioner"
                    />
                    </div>
                    <div>
                    <lable className="block text-gray-700">Mobile</lable>
                    <input 
                    type="text"
                    value={mobile}
                    className="p-2 w-full border border-gray-300 rounded"
                    onChange={(e)=>{setMobile(e.target.value)}}
                    placeholder="Mobile Number"
                    />
                    </div>
                    <div>
                    <lable className="block text-gray-700">Address</lable>
                    <textarea 
                      type="text" 
                      value={address}
                      className="p-2 w-full h-25 border border-gray-300 rounded"
                      onChange={(e)=>{setAddress(e.target.value)}} 
                      placeholder="Address"
                    />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Attach Documents (optional)</label>
                  <input 
                    type="file" 
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                
                <div className="flex justify-end">
                  <button 
                    onClick={() => setShowPetitionForm(false)}
                    className="bg-gray-300 hover:bg-gray-400 cursor-pointer text-gray-800 font-bold py-2 px-4 rounded mr-2"
                  >
                    Cancel
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded" onClick={handleForm}>
                    Submit Petition
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Department Information */}
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-6">Government Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="bg-blue-700 text-white p-4">
                <h3 className="text-center font-bold text-lg">{dept.name}</h3>
              </div>
              <div className="p-4 flex-grow">
                <p className="text-gray-600 mb-4">{dept.description}</p>
              </div>
              <div className="p-4 flex space-x-35 bg-gray-50 border-t border-gray-200">
                <button className="text-blue-600 cursor-pointer hover:text-blue-800 font-medium" onClick={()=>{window.location.href=dept.contactInfo}}>view official website</button>
                <button className="text-blue-600 cursor-pointer hover:text-blue-800 font-medium" onClick={()=>window.location.href=dept.website}>
                  Department Ministers
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Track Petition</a></li>
                <li><a href="#" className="hover:underline">Government Departments</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>Email: petitions@tngov.in</li>
                <li>Phone: 1234567890</li>
                <li>Address: Secretariat, Chennai - 600009</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">F</a>
                <a href="#" className="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">T</a>
                <a href="#" className="bg-red-600 w-8 h-8 rounded-full flex items-center justify-center">Y</a>
                <a href="#" className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center">L</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm">
            <p>© 2025 FOML project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;