import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Subtle Gradient Background */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-2 space-y-4">
            <h1 className="text-5xl mt-8 font-bold text-blue-700 inline-block relative">
              About RVCE
              {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left transition-all duration-300 ease-in-out"></span> */}
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Leadership in Quality Technical Education, Research and Innovation
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section - Reduced padding */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center mb-6 group">
              <h2 className="text-4xl font-bold text-blue-600 relative inline-block">
                Vision
                <span className="block h-1 bg-gradient-to-r from-blue-400 to-blue-600 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
              </h2>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-100 hover:border-blue-200" 
                 style={{boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)'}}>
              <p className="text-xl text-gray-800 leading-relaxed text-center">
                Leadership in Quality Technical Education, Interdisciplinary Research and Innovation, focusing on Sustainable and Inclusive Technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Reduced padding */}
      <section className="py-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center mb-6 group">
              <h2 className="text-4xl font-bold text-blue-600 relative inline-block">
                Mission
                <span className="block h-1 bg-gradient-to-r from-blue-400 to-blue-600 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
              </h2>
            </div>
            <div className="bg-white rounded-lg p-8 border border-blue-100 hover:border-blue-200"
                 style={{boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)'}}>
              <ul className="space-y-4">
                {[
                  "To deliver outcome-based quality education, emphasizing on experiential learning with state-of-the-art infrastructure.",
                  "To create a conducive environment for interdisciplinary research and innovation.",
                  "To develop professionals through holistic education focusing on individual growth, discipline, integrity, ethics and social sensitivity.",
                  "To nurture industry-institution collaboration leading to competency enhancement and entrepreneurship.",
                  "To focus on technologies that are sustainable and inclusive, benefiting all sections of the society."
                ].map((item, index) => (
                  <li key={index} className="flex group">
                    <div className="mr-4 text-blue-500 transform transition-all duration-300 group-hover:translate-x-1">
                      <ChevronRight size={24} className="filter drop-shadow-md" />
                    </div>
                    <p className="text-lg text-gray-800">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-8 group">
              <h2 className="text-4xl font-bold text-blue-600 relative inline-block">
                About RVCE
                <span className="block h-1 bg-gradient-to-r from-blue-400 to-blue-600 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative h-[500px] overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <div className="relative h-full w-full">
                  <Image 
                    src="/rv2.jpg" 
                    alt="RV College of Engineering"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-700 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">Excellence Since 1963</h3>
                  <p className="text-blue-100">One of India's premier engineering institutions</p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                     style={{boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)'}}>
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">Heritage & Excellence</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    RV College of Engineering (RVCE) established in 1963 is one of the earliest self-financing engineering colleges in the country. The institution is run by Rashtreeya Sikshana Samithi Trust (RSST) a not-for-profit Trust. RVCE is an Autonomous college offering 15 Bachelors, 14 Master Programs with all departments having Research Centres affiliated to Visvesvaraya Technological University (VTU) Belagavi.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                     style={{boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)'}}>
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">Awards & Recognition</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    Ranked 96th in the Country by NIRF (2021-22), "Engineering College of the Year-2023" by Higher Education Review, Ranked 10th in India & 2nd in Karnataka by IIRF (2023), Ranked 6<sup>th</sup> among top 100 Private Engineering Colleges by Education World Magazine (2023), and Ranked 1501+ in Times Higher Education World University Rankings (2024).
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                     style={{boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)'}}>
                  <h3 className="text-2xl font-bold text-blue-600 mb-3">Research Excellence</h3>
                  <p className="text-lg text-gray-800 leading-relaxed">
                    RVCE has over 1700 national and international journal publications, 70 filed patents (59 published, 38 granted) and executed over Rs. 30 crores of sponsored research projects and consultancy in the last five years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Years of Excellence", value: "60+", description: "Established in 1963" },
              { title: "Programs Offered", value: "29", description: "15 Bachelor's & 14 Master's" },
              { title: "Research Publications", value: "1700+", description: "National & International" }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                   style={{boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)'}}>
                <h3 className="text-5xl font-bold text-blue-600 mb-2 drop-shadow-sm">{stat.value}</h3>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{stat.title}</h4>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Academic Community</h2>
            <p className="text-xl mb-6">Discover more about our programs, research opportunities, and campus life</p>
            <button className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                    style={{boxShadow: '0 10px 15px -3px rgba(255, 255, 255, 0.2), 0 4px 6px -2px rgba(255, 255, 255, 0.1)'}}>
              <a href='https://www.ieee-rvce.org/#/events'>Explore Programs</a>
              <ChevronRight className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 