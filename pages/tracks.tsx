import React from 'react';

// Define types for our data structure
type TrackItem = string;

interface ConferenceTrack {
  title: string;
  items: TrackItem[];
}

const Papers: React.FC = () => {
  // Conference tracks data
  const conferenceTracks: ConferenceTrack[] = [
    {
      title: 'Computational Analysis of Structural and Functional Materials:',
      items: [
        'Energy Materials, Nanomaterials, Smart Materials',
        'High-performance Embedded Computation',
        'Decision and Planning',
        'Target Tracking/Recognition',
      ],
    },
    {
      title: 'Green Electronics: Sustainable Practices:',
      items: [
        'Eco-Friendly Materials for Electronics',
        'Energy-Efficient Electronic Devices',
        'Green Supply Chain Management in Electronics',
        'Biodegradable and Organic Electronics',
      ],
    },
    {
      title: 'Robotics and Automation:',
      items: [
        'Artificial Intelligence in Robotics',
        'Human-Robot Interaction',
        'Agricultural Robotics',
        'Robotic Perception and Sensing',
      ],
    },
    {
      title: 'Photonics, Optoelectronics and Mechatronics Systems:',
      items: [
        'Fiber optics and optical communications',
        'Optical sensors and imaging systems',
        'Control systems and intelligent systems',
        'Micro-electromechanical systems (MEMS)',
      ],
    },
    {
      title: 'Artificial Intelligence for Sustainable World:',
      items: [
        'AI and ML engineering and science applications',
        'Natural language processing and large language models for regional requirements',
        'Advanced AI models and algorithms',
        'Mathematical algorithms for ML',
        'New generation hardware architectures for AI',
        'Generative AI for society and industry',
      ],
    },
    {
      title: 'Digital Transformation in Various Sectors of Economy:',
      items: [
        'Digital transformation in Logistics',
        'Digitization and Inclusivity in Banking and Financial Services Sector',
        'Digital Modeling practices in Manufacturing',
        'E-commerce and E-business',
      ],
    },
    {
      title: 'Renewable Energy and Environmental Engineering:',
      items: [
        'Microgrids & Smart grids',
        'Power Electronics application to Renewable Energy systems',
        'Computational Intelligent Techniques for Energy Sustainability',
        'Distributed Energy system and Control Strategies',
        'Power System operation, resilience, monitoring and control',
        'Carbon Capture, Utilization & Storage (CCUS) and Alternative Fuels',
        'Sustainable construction materials and technologies',
      ],
    },
    {
      title: 'Cyber-Physical Systems:',
      items: [
        'Next-Generation CPS Architectures',
        'IoT-based Smart Infrastructures',
        'Cybersecurity Challenges in CPS',
        'Ethical Considerations in CPS Design and Deployment',
      ],
    },
    {
      title: 'Biomedical Electronics and Healthcare Applications:',
      items: [
        'Biomedical Image processing',
        'Biosensors and Wearable electronics',
        'Point of care devices, Bio_Mems',
      ],
    },
    {
      title: 'Quantum Mechanics and Computing:',
      items: [
        'Hybrid quantum-classical computing systems',
        'Quantum simulation and modelling',
        'Quantum machine learning and optimization algorithms',
      ],
    },
    {
      title: 'Next-Generation Communication Systems:',
      items: [
        'Internet of Things (IoT), 5G and Beyond',
        'Edge Computing and Edge Networking',
        'Software-Defined Networking (SDN) and Network Function Virtualization (NFV)',
        'Satellite Communication Systems',
        'Wireless Sensor Networks and Smart Grid Communication',
        'Blockchain and Distributed Ledger Technologies (DLT)',
        'Emerging Communication Technologies',
      ],
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Glass morphism card */}
          <div className="backdrop-blur-sm backdrop-filter overflow-hidden rounded-2xl border border-blue-100 bg-white/80 shadow-xl transition-all duration-300 hover:shadow-2xl">
            {/* Header */}
            <div className="relative overflow-hidden bg-blue-600 py-8 text-center">
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500 opacity-20"></div>
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-blue-400 opacity-20"></div>
              <h2 className="relative z-10 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Conference Tracks
              </h2>
            </div>
            
            {/* Content */}
            <div className="p-6 md:p-8 lg:p-10">
              <p className="mb-8 text-lg font-medium text-gray-700 md:text-xl lg:text-2xl">
                Authors are invited to submit their original research work in the
                following areas (but not limited to):
              </p>
              
              {/* Tracks */}
              <div className="space-y-8">
                {conferenceTracks.map((track, index) => (
                  <div 
                    key={index}
                    className="transform rounded-xl border-l-4 border-blue-500 bg-white p-5 shadow-md transition-all duration-300 hover:translate-x-1 hover:shadow-lg"
                  >
                    <h3 className="mb-3 text-xl font-bold text-blue-800 md:text-2xl">
                      {track.title}
                    </h3>
                    <ul className="space-y-2 pl-5">
                      {track.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="flex items-start text-gray-700 text-lg"
                        >
                          <span className="mr-2 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Papers;