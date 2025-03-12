import React from 'react';

const Papers: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl">
          {/* Header with subtle wave pattern */}
          <div className="relative bg-blue-600 py-8 px-6 sm:px-10">
            <div className="absolute inset-0 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <defs>
                  <pattern id="wave" width="100" height="20" patternUnits="userSpaceOnUse">
                    <path d="M0 10 Q 25 0, 50 10 Q 75 20, 100 10 V30 H0" fill="#ffffff"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#wave)"/>
              </svg>
            </div>
            <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
              Call For Papers
            </h1>
          </div>
          
          {/* Main content */}
          <div className="p-6 sm:p-10 lg:p-12">
            {/* Important notice */}
            <div className="mb-8 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
              <p className="text-xl sm:text-2xl font-semibold text-blue-800">
                Conference does not accept/encourage Survey/Review articles.
              </p>
            </div>
            
            {/* Main text content */}
            <div className="space-y-6 text-lg sm:text-xl text-gray-700">
              <p>
                Prospective authors are encouraged to submit quality and original research papers for presentation at the Conference. Authors are requested to submit their manuscripts in PDF format not exceeding 6 pages in A4 size through online submission at Microsoft CMT - on or{' '}
                <span className="font-medium text-blue-700">
                  before 10<sup>th</sup> August 2024.
                </span>
              </p>
              
              <p>
                The manuscript should follow the standard IEEE template. The format of the paper could be downloaded using the link below:
              </p>
              
              {/* Template Link */}
              <a 
                href="https://www.ieee.org/conferences/publishing/templates.html" 
                className="group flex items-center p-4 bg-blue-50 rounded-lg transition-all duration-300 hover:bg-blue-100 border border-blue-100 hover:border-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex-shrink-0 mr-4 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-blue-700">IEEE Manuscript Template</p>
                  <p className="text-blue-600 text-base">Download the official IEEE template format</p>
                </div>
                <div className="ml-auto text-blue-500 transform transition-transform duration-300 group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
              
              <p>
                All submissions for the conference will be handled electronically and submitted papers will be peer-reviewed by domain experts. To submit the papers, use the Microsoft CMT Link below:
              </p>
              
              {/* Submission Link */}
              <a 
                href="https://cmt3.research.microsoft.com/CSITSS2024" 
                className="group flex items-center p-4 bg-blue-50 rounded-lg transition-all duration-300 hover:bg-blue-100 border border-blue-100 hover:border-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex-shrink-0 mr-4 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-blue-700">Microsoft CMT Submission Portal</p>
                  <p className="text-blue-600 text-base">Access the official submission system for CSITSS2024</p>
                </div>
                <div className="ml-auto text-blue-500 transform transition-transform duration-300 group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            </div>
            
            {/* Call-to-action buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cmt3.research.microsoft.com/CSITSS2024"
                className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Submit Your Paper</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="absolute inset-0 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </a>
              
              <a
                href="Guidelines to Authors - IEEE.pdf"
                className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg border-2 border-blue-200 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                download
              >
                <span>Download Guidelines</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>
            
            {/* Timeline information */}
            <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Important Dates
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-blue-800">Paper Submission Deadline</p>
                    <p className="text-blue-700">10th August 2024</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-blue-800">Notification of Acceptance</p>
                    <p className="text-blue-700">To be announced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer with IEEE branding */}
          {/* <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            {/* <div className="flex flex-col sm:flex-row justify-between items-center">
              {/* <p className="text-gray-600 text-sm">© 2025 CSITSS IEEE Conference</p> */}
              {/* <div className="flex items-center mt-2 sm:mt-0">
                <span className="text-gray-600 text-sm mr-2">Supported by</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 16" className="h-8 w-auto">
                  <path d="M52.77,5.92v-3h-4.4V1.51h4.4V0H47.37V7.46h1V5.92Zm-8.11-1a.54.54,0,0,0-.15-.39.61.61,0,0,0-.44-.15H42.37V3h2.28V1.47H41.37V7.44h3.25a.9.9,0,0,0,.59-.22.76.76,0,0,0,.13-1.09A.76.76,0,0,0,44.66,4.91ZM43.37,6H42.37V5h1a.51.51,0,1,1,0,1M2.29,7.47V4.29H3.7c1.23,0,2.06.25,2.06,1.61s-.86,1.57-2.09,1.57ZM.9,15.41V16h5.47V14.68H3.68c-.7,0-1.54,0-2.25.07v0c1.49-.47,2.24-1.6,2.24-3.41,0-2.57-1.82-3.25-4-3.25H0V16H1.38V8.76h2c1.26,0,1.91.34,1.91,1.91,0,1.79-.7,2.25-2,2.25H1.38V14.3h2.3c.7,0,1.48,0,2.25,0v0a1.24,1.24,0,0,1-.6,1.06Zm9.34-10a1.49,1.49,0,0,0,.86-1.42c0-1.66-1.65-2-3-2H6.09V7.48H7.47V5.63H8.33c.65,0,1.23.09,1.23.87a.79.79,0,0,1-.88.87H7.47v1.1h.7l1.47,2.36h1.69L9.72,8.43A1.28,1.28,0,0,0,10.24,8a1.5,1.5,0,0,0,0-2.49m6.1-1H17.9a1.86,1.86,0,0,1,.7.09V5.38a2.37,2.37,0,0,1-.7.08h-1.1V4a2.89,2.89,0,0,1,.06-.59H15.41a2.77,2.77,0,0,1,.07.59V5.47H14.26a1.87,1.87,0,0,1-.71-.09v1a2.5,2.5,0,0,1,.71-.09h1.22V7.45h1.45V6.27Zm13.25.47A2.62,2.62,0,0,0,32.15,3.6a3.75,3.75,0,0,0-3-1.35,3.75,3.75,0,0,0-3,1.35,2.58,2.58,0,0,0,2.54,4.28,3.69,3.69,0,0,0,3-1.34,2.59,2.59,0,0,0,.54-1.08M27.27,3.93a2.23,2.23,0,0,1,1.84-.9,2.26,2.26,0,0,1,1.85.9,1.82,1.82,0,0,1,.39,1.11,1.67,1.67,0,0,1-.39,1.11,2.23,2.23,0,0,1-1.85.88,2.19,2.19,0,0,1-1.84-.88,1.67,1.67,0,0,1-.39-1.11,1.82,1.82,0,0,1,.39-1.11m26,1.81c0-.83-.15-1.25-.7-1.7a3.85,3.85,0,0,0-2.46-.68H47.53V7.46h1V4.62h1.52c1.23,0,2.21.27,2.21,1.76v1.1h1ZM48.55,3.14h1.48c.5,0,1,.12,1,1a.9.9,0,0,1-1,1H48.55ZM39.77,6.29V4.07a2.72,2.72,0,0,0-3-2.58,2.74,2.74,0,0,0-3,2.58V6.31a2.74,2.74,0,0,0,3,2.54,2.73,2.73,0,0,0,3-2.54m-5,0V4.07a1.94,1.94,0,1,1,3.89,0v2.2a1.95,1.95,0,1,1-3.89,0M17.91,16V14.75c-1.7.28-2.09-.16-2.09-1.53V10.81h2.09v-1.2H15.82V7.76H14.35V9.6h-1.3v1.21h1.3v2.41c0,2,.89,2.93,3.38,2.59H18V14.7H17.8c-1.16,0-1.6-.28-1.6-1.48V10.82H18V9.62H16.2V8.1a2.91,2.91,0,0,1,.09-.59H14.84a2.91,2.91,0,0,1,.08.59V9.61h-1.3a2.41,2.41,0,0,1-.7-.08V11a2.36,2.36,0,0,1,.7-.09h1.3v2.41c0,2,.87,2.93,3.38,2.59.05,0,.19,0,.25,0V14.75c-1.71.28-2.1-.16-2.1-1.53V10.81h2.1v-1.2h-2.1V7.76H14.83V9.6h-1.3v1.21h1.3v2.41c0,2,.89,2.93,3.38,2.59Zm5-5.22V8.6a2.73,2.73,0,0,0-3-2.58,2.73,2.73,0,0,0-3,2.58v2.24a2.67,2.67,0,0,0,2.86,2.56h3.44V12.37a9,9,0,0,1-1.29.09c-1.43,0-2.6-.09-3-.15v-.62h4.33v-.95Zm-5,0V8.62A1.94,1.94,0,1,1,21.83,10v.85Zm9.54-2.61c0-.87,0-1.65.07-2.38H26.22a10.92,10.92,0,0,1,.09,1.39v7.13h1.47v-3.4l3.74,0v-5.1Zm0,3.46-2.3,0V9.25h2.3ZM36.71,16V14.68a9.63,9.63,0,0,1-1.29.09c-1.42,0-2.52-.07-2.92-.13v-.64h4.4v-1H32.5V10.13h4.13V9.09H32.5V7.67H31V16Zm16.51-2.89H50.76a1.89,1.89,0,0,1-2.08-1.77V10a1.89,1.89,0,0,1,2.08-1.76h2.46a2.82,2.82,0,0,1,.69.07v-1a3.36,3.36,0,0,1-.7.08h-2.5a2.92,2.92,0,0,0-3.19,2.69v1.22A2.93,2.93,0,0,0,50.72,16h2.5a3.36,3.36,0,0,1,.7.08v-1a2.82,2.82,0,0,1-.69.07M45.32,16V9.29h4.25v-1h-4.4a11.16,11.16,0,0,1,.1,1.38v6.36Zm-5.7-5.17h2.55a2.18,2.18,0,0,1,.71.09V9.64a2.14,2.14,0,0,1-.71.09H39.62V8.25h2.91A2.18,2.18,0,0,1,43.24,8V7a3.75,3.75,0,0,1-.71.06h-4A12,12,0,0,1,38.51,10v6h5a2.68,2.68,0,0,1,.7.08v-1a1.85,1.85,0,0,1-.7.08H39.61V12.23h2.55a2.14,2.14,0,0,1,.71.09V11.07a2.18,2.18,0,0,1-.71.09H39.62Z" fill="#00629B"/>
                </svg>
              </div> */}
            </div> 
          </div> 
        {/* </div>
      </div> */}
    </div>
  );
};

export default Papers;