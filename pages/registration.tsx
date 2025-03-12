import React from "react";
import { NextPage } from "next";
import Head from "next/head";

const Registration: NextPage = () => {
  return (
    <>
      <Head>
        <title>CSITSS 2024 - Registration</title>
        <meta name="description" content="Register for CSITSS 2024 IEEE Conference" />
      </Head>
      
      <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
              <span className="inline-block relative">
                Registration
                {/* <span className="absolute bottom left-0 w-full h-1 bg-blue-500 transform scale-x-100 origin-left transition-transform duration-300"></span> */}
              </span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Please review the registration fees and follow the instructions below to complete your registration
            </p>
          </div>
          
          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-10 transform transition-all duration-300 hover:shadow-2xl">
            {/* Indian Delegates Table */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Registration Fees</h2>
              
              <div className="overflow-x-auto mb-8 rounded-lg shadow-md">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th colSpan={6} className="bg-blue-800 text-white text-lg py-4 px-4">
                        Indian Delegates (INR)
                      </th>
                    </tr>
                    <tr className="bg-blue-100">
                      <th colSpan={2} rowSpan={2} className="border border-blue-200 py-3 px-4 text-blue-900">Categories</th>
                      <th colSpan={2} className="border border-blue-200 py-3 px-4 text-blue-900">Early Bird Registration<br/>(On or before 18th September)</th>
                      <th colSpan={2} className="border border-blue-200 py-3 px-4 text-blue-900">Regular Registration</th>
                    </tr>
                    <tr className="bg-blue-100">
                      <th className="hidden"></th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900">IEEE</th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900">Non-IEEE</th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900">IEEE</th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900">Non-IEEE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <th rowSpan={3} className="border border-blue-200 py-3 px-4 text-blue-900 bg-blue-50">With Authorship</th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900 bg-blue-50">Student/Research Scholars</th>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹5,310</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹6,490</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹6,490</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹7,670</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <th className="hidden"></th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900 bg-blue-50">Academicians</th>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹7,080</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹8,260</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹8,260</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹10,030</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <th className="hidden"></th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900 bg-blue-50">Industry Professionals</th>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹8,260</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹9,440</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹11,800</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">₹15,930</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <th colSpan={2} className="border border-blue-200 py-3 px-4 text-blue-900 bg-blue-50">Pre Conference Tutorial</th>
                      <td colSpan={4} className="border border-blue-200 py-3 px-4 text-center font-medium">₹500</td>
                    </tr>
                    
                    {/* Foreign Delegates */}
                    <tr>
                      <th colSpan={6} className="bg-blue-800 text-white text-lg py-4 px-4">
                        Foreign Delegates (USD)
                      </th>
                    </tr>
                    <tr className="bg-blue-100">
                      <th colSpan={2} rowSpan={2} className="border border-blue-200 py-3 px-4 text-blue-900">Categories</th>
                      <th colSpan={2} className="border border-blue-200 py-3 px-4 text-blue-900">Early Bird Registration<br/>(On or before 18th September)</th>
                      <th colSpan={2} className="border border-blue-200 py-3 px-4 text-blue-900">Regular Registration</th>
                    </tr>
                    <tr className="bg-blue-100">
                      <th className="hidden"></th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900">IEEE</th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900">Non-IEEE</th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900">IEEE</th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900">Non-IEEE</th>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <th rowSpan={3} className="border border-blue-200 py-3 px-4 text-blue-900 bg-blue-50">With Authorship</th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900 bg-blue-50">Student/Research Scholars</th>
                      <td className="border border-blue-200 py-3 px-4 text-center">$80</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">$110</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">$110</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">$130</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <th className="hidden"></th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900 bg-blue-50">Academicians</th>
                      <td className="border border-blue-200 py-3 px-4 text-center">$100</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">$130</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">$135</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">$165</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <th className="hidden"></th>
                      <th className="border border-blue-200 py-3 px-4 text-blue-900 bg-blue-50">Industry Professionals</th>
                      <td className="border border-blue-200 py-3 px-4 text-center">$110</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">$135</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">$200</td>
                      <td className="border border-blue-200 py-3 px-4 text-center">$240</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors duration-200">
                      <th colSpan={2} className="border border-blue-200 py-3 px-4 text-blue-900 bg-blue-50">Pre Conference Tutorial</th>
                      <td colSpan={4} className="border border-blue-200 py-3 px-4 text-center font-medium">$25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-lg text-red-800 font-semibold italic mb-8">
                *All the pricing details mentioned above are inclusive of 18% GST
              </p>
            </div>
          </div>
          
          {/* Payment Buttons */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Indian Delegates */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Indian Delegates</h2>
              <p className="text-lg text-gray-700 mb-6">
                Indian delegates can complete their registration by paying through the Razorpay payment gateway.
              </p>
              <a 
                href="https://rzp.io/l/vMqgBae" 
                className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Pay Through Razorpay
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            {/* Foreign Delegates */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Foreign Delegates</h2>
              <p className="text-lg text-gray-700 mb-4">
                Foreign delegates can complete their registration by bank transfer using the following details:
              </p>
              <div className="space-y-2 text-lg text-gray-800">
                <p><span className="font-semibold text-blue-800">Beneficiary Name:</span> PRINCIPAL, RVCE</p>
                <p><span className="font-semibold text-blue-800">Bank Account Number:</span> 136010112055</p>
                <p><span className="font-semibold text-blue-800">Bank Name:</span> KOTAK MAHINDRA BANK</p>
                <p><span className="font-semibold text-blue-800">Branch Name:</span> RVCE Campus, Bengaluru</p>
                <p><span className="font-semibold text-blue-800">IFSC Code:</span> KKBK0008053</p>
                <p><span className="font-semibold text-blue-800">SWIFT Code:</span> KKBKINBB</p>
              </div>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-10 transform transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Instructions for Registration
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                At least one author per accepted paper has to register.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                At least one author must present their accepted paper in the conference for consideration of publication on IEEE explore.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                Registration fee for the paper (<span className="font-bold text-blue-800">with authorship</span>) includes access to the pre conference tutorial, conference proceedings, all technical sessions and presenter certificate.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                Registration fee for the <span className="font-bold text-blue-800">pre conference tutorial</span> includes access to the pre conference tutorial only (7th Nov 2024).
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                Registration fee for the <span className="font-bold text-blue-800">conference participation without authorship-attendee</span> is not entitled for paper publication, however participation certificate will be provided.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                Registration for <span className="font-bold text-blue-800">Indian Delegates is through Razorpay</span> and <span className="font-bold text-blue-800">Foreign Delegates can use the account details</span> mentioned for bank transfer.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                While registering for <span className="font-bold text-blue-800">Best Thesis Award</span>, enter paper id as 9999.
              </li>
            </ol>
          </div>
          
          {/* Important Notes */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Important Notes
            </h2>
            <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                Registration category should be chosen appropriately from the aforementioned table.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                Registration fees are not refundable or non-transferable.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                You must save the payment proof in <span className="italic font-medium text-blue-800">PDF format</span>. This payment proof file is to be attached in a section while filling the registration form.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                CSITSS-2024 organizing committee will not be responsible for any financial loss caused by improper transactions during registration process in CSITSS-2024.
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                The author's name(s) must match the ones provided during the manuscript submission, registration (There should be one/same name at all stages of the conference).
              </li>
              <li className="transition-transform duration-300 hover:translate-x-1 hover:text-blue-900">
                The submission of invalid proofs will lead to the cancellation of participation in the conference.
              </li>
            </ol>
          </div>
          
          {/* CTA Registration Button */}
          <div className="text-center mt-12 mb-8">
            <a 
              href="https://forms.gle/NaKWRJ9gJjiyd4dX6" 
              className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white text-xl font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              Complete Registration
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Help Section */}
          <div className="bg-blue-50 rounded-xl p-6 md:p-8 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Need Assistance?</h3>
            <p className="text-lg text-gray-700 mb-4">
              If you have any questions or need help with registration, please contact us.
            </p>
            <a 
              href="mailto:csitss@rvce.edu.in" 
              className="inline-flex items-center justify-center text-blue-700 hover:text-blue-900 text-lg font-medium transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              csitss@rvce.edu.in
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;