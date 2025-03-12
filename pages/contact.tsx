import React, { useState } from 'react';
import Image from 'next/image';

function Contact() {
  const [activeTab, setActiveTab] = useState('departments');
  
  const contactPersons = [
    {
      id: 1,
      name: 'Dr. Shanta Rangaswamy',
      title: 'HoD',
      department: 'CSE Department',
      phone: '+91 97390 37207',
      email: 'shantharangaswamy@rvce.edu.in'
    },
    {
      id: 2,
      name: 'Dr. Anjaneyappa',
      title: 'HoD',
      department: 'Civil Department',
      phone: '+91 99808 47938',
      email: 'anjaneyappa@rvce.edu.in'
    }
  ];

  return (
    <>
      <br />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-blue-700 mb-2">Contact Us</h1>
            {/* <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div> */}
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              Have questions about CSITSS IEEE Conference? Reach out to our department heads.
            </p>
          </div>

          {/* Main Contact Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Left Image Section */}
              <div className="md:w-1/2 relative h-80 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 z-10 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20 
                    transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                    hover:bg-white/80">
                    <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-700 text-4xl mb-3">
                      IEEE CSITSS 2025
                    </h3>
                    <p className="text-gray-700 text-xl font-medium">
                      RV College of Engineering, Bangalore
                    </p>
                  </div>
                </div>
                <img
                  src="thank.jpg"
                  alt="CSITSS Conference Location"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Content Section */}
              <div className="md:w-1/2 p-6 md:p-8">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-6">
                  <button
                    onClick={() => setActiveTab('departments')}
                    className={`py-2 px-4 font-medium text-lg focus:outline-none transition ${
                      activeTab === 'departments'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-blue-500'
                    }`}
                  >
                    Department Contacts
                  </button>
                  <button
                    onClick={() => setActiveTab('general')}
                    className={`py-2 px-4 font-medium text-lg focus:outline-none transition ${
                      activeTab === 'general'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-blue-500'
                    }`}
                  >
                    General Inquiry
                  </button>
                </div>

                {/* Department Contacts Tab */}
                {activeTab === 'departments' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactPersons.map((person) => (
                      <div
                        key={person.id}
                        className="bg-blue-50 rounded-lg p-4 hover:shadow-md transition transform hover:-translate-y-1 border border-blue-100 group"
                      >
                        <h3 className="font-bold text-blue-800 text-xl">{person.name}</h3>
                        <p className="text-lg text-gray-600 mb-2">{person.title}, {person.department}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-base group-hover:text-blue-600 transition">
                            {/* Phone icon */}
                            <svg className="w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <a href={`tel:${person.phone}`} className="hover:underline">
                              {person.phone}
                            </a>
                          </div>
                          <div className="flex items-center text-base group-hover:text-blue-600 transition">
                            {/* Mail icon */}
                            <svg className="w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href={`mailto:${person.email}`} className="hover:underline truncate">
                              {person.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* General Inquiry Tab */}
                {activeTab === 'general' && (
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                        {/* Mail icon */}
                        <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-4 text-lg">
                        <h3 className="font-medium text-gray-800">Email Us</h3>
                        <p className="text-gray-600 mt-1">For any queries, please email us at:</p>
                        <a
                          href="mailto:csitss2024@rvce.edu.in"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          csitss2024@rvce.edu.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start text-lg">
                      <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                        {/* Phone icon */}
                        <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-4 text-lg">
                        <h3 className="font-medium text-gray-800">Call Us</h3>
                        <p className="text-gray-600 mt-1">Conference Helpdesk:</p>
                        <a
                          href="tel:+919876543210"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                        {/* Location icon */}
                        <svg className="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="ml-4 text-lg">
                        <h3 className="font-medium text-gray-800">Visit Us</h3>
                        <p className="text-gray-600 mt-1">
                          RV College of Engineering<br />
                          Mysuru Road, Bengaluru<br />
                          Karnataka - 560059
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-blue-600 bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Stay Connected</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Follow us on social media for the latest updates about the conference
              </p>
              <div className="flex justify-center space-x-4">
                {/* Facebook Icon */}
                <a href="#" className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-blue-50 hover:shadow-md transition">
                  <svg className="h-7 w-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                {/* Twitter Icon */}
                <a href="#" className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-blue-50 hover:shadow-md transition">
                  <svg className="h-7 w-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                {/* LinkedIn Icon */}
                <a href="#" className="h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-blue-50 hover:shadow-md transition">
                  <svg className="h-7 w-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;