import React from 'react';
import Link from 'next/link';

const Awards: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4 relative inline-block">
            Awards
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            The below awards will be conferred by CSITSS-2024
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-700 flex-1 transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
              <span className="text-yellow-500 mr-2">i.</span> Best Ph.D Thesis
            </h3>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-700 flex-1 transform transition duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center">
              <span className="text-yellow-500 mr-2">ii.</span> Best Faculty and Student Paper
            </h3>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 shadow-lg text-white mb-12">
          <h3 className="text-2xl font-semibold mb-4 border-b border-blue-300 pb-2">
            Ph.D. Thesis Award Eligibility
          </h3>
          <p className="mb-4 text-lg">
            Ph.D. scholars, who have been awarded their Ph.D. degree in the conference themes specified, from recognized universities during the period June 1, 2023 to May 31, 2024, are eligible to apply for CSITSS 2024 Best Ph.D. Thesis Award.
          </p>
          <div className="bg-blue-900 bg-opacity-40 p-4 rounded-lg mb-4  text-lg">
            <p className="mb-2">
              <span className="font-semibold">Submission:</span> Ph.D. Thesis (in pdf format) and degree certificate can be submitted to the{'  '}
              <br />
              <span className="font-bold text-yellow-300">Email ID : csitss2024@rvce.edu.in</span>
            </p>
            <p className="mb-2 text-white">
              <span className="font-semibold">Application fees :</span> <span className="text-yellow-300 font-bold">Rs.1000/-</span>
            </p>
            <p>
              <span className="font-semibold">Registration Note:</span> While registering for <span className="font-bold">Best Thesis award</span>, enter the paper ID as <span className="font-bold text-yellow-300">9999</span>
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/downloads/PhD-Results.pdf" passHref>
            <a className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-700 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 group">
              <span>Download PhD-Results</span>
              <svg 
                className="ml-5 h-5 w-5 transform transition-transform duration-300 group-hover:translate-y-1" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Awards;