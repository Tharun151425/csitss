import React, { useState } from 'react';
import Image from 'next/image';

// Define types for our data structure
type SponsorType = 'platinum' | 'diamond' | 'gold' | 'silver' | 'others' | 'in association with';

interface Sponsor {
  name: string;
  logo: string;
  link: string;
  description?: string;
  type: SponsorType;
  fullName?: string; // Added full name field
}

// Define color schemes for each sponsor tier - now primarily using blue gradients
const tierColors = {
  platinum: {
    gradient: 'from-purple-400 to-purple-600',
    border: 'border-blue-300',
    shadow: 'shadow-blue-300',
    text: 'text-blue-700',
    heading: 'bg-gradient-to-r from-purple-500 to-purple-600',
    hr: 'bg-gradient-to-r from-purple-600 via-purple-400 to-transparent'
  },
  diamond: {
    gradient: 'from-blue-400 to-cyan-600',
    border: 'border-blue-200',
    shadow: 'shadow-blue-300',
    text: 'text-blue-700',
    heading: 'bg-gradient-to-r from-blue-400 to-cyan-600',
    hr: 'bg-gradient-to-r from-blue-500 via-cyan-400 to-transparent'
  },
  gold: {
    gradient: 'from-yellow-400 to-yellow-600',
    border: 'border-yellow-200',
    shadow: 'shadow-yellow-300',
    text: 'text-yellow-700',
    heading: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
    hr: 'bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent'
  },
  silver: {
    gradient: 'from-gray-400 to-gray-600',
    border: 'border-gray-200',
    shadow: 'shadow-gray-300',
    text: 'text-gray-700',
    heading: 'bg-gradient-to-r from-gray-400 to-gray-600',
    hr: 'bg-gradient-to-r from-gray-500 via-gray-400 to-transparent'
  },
  'in association with': {
    gradient: 'from-blue-400 to-indigo-600',
    border: 'border-blue-200',
    shadow: 'shadow-blue-300',
    text: 'text-blue-700',
    heading: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    hr: 'bg-gradient-to-r from-blue-500 via-indigo-300 to-transparent'
  },
  others: {
    gradient: 'from-blue-400 to-teal-500',
    border: 'border-blue-200',
    shadow: 'shadow-blue-300',
    text: 'text-blue-700',
    heading: 'bg-gradient-to-r from-blue-400 to-teal-500',
    hr: 'bg-gradient-to-r from-blue-400 via-teal-300 to-transparent'
  }
};

// Sample sponsor data with full names
const SponsorsData2024: Sponsor[] = [
  { 
    name: 'ATDXT', 
    fullName: 'ATDXT Technologies Private Limited',
    logo: '/sponsors/atdxt.png', 
    link: 'https://www.atdxt.com/', 
    type: 'platinum', 
    description: '' 
  },
  { 
    name: 'Chamundi Sugars', 
    fullName: 'Chamundeswari Sugars Limited',
    logo: '/sponsors/chamundeswari.jpg', 
    link: 'https://chamundeswarisugars.in/', 
    type: 'gold', 
    description: '' 
  },
  { 
    name: 'CtrlS', 
    fullName: 'CtrlS Datacenters Ltd',
    logo: '/sponsors/CtrlS.png', 
    link: 'https://www.ctrls.in/', 
    type: 'silver', 
    description: '' 
  },
  { 
    name: 'Arcadis', 
    fullName: 'Arcadis N.V.',
    logo: '/sponsors/Arcadis.jpg', 
    link: 'https://www.arcadis.com', 
    type: 'silver', 
    description: '' 
  },
  { 
    name: 'Universal AutoFoundry Limited', 
    fullName: 'Universal AutoFoundry Limited',
    logo: 'https://assets-netstorage.groww.in/stock-assets/logos/GSTK539314.png', 
    link: 'https://ufindia.com/', 
    type: 'silver', 
    description: '' 
  },
  { 
    name: 'MathWorks', 
    fullName: 'The MathWorks, Inc.',
    logo: '/sponsors/mathworks.png', 
    link: 'https://in.mathworks.com/', 
    type: 'others', 
    description: '' 
  },
  { 
    name: 'Ganesha Enterprise', 
    fullName: 'Ganesha Enterprise, Bangalore',
    logo: '/sponsors/Ganesha.png', 
    link: '#', 
    type: 'others', 
    description: '' 
  },
  { 
    name: 'Canara Bank', 
    fullName: 'Canara Bank',
    logo: '/sponsors/canara_bank.jpg', 
    link: 'https://canarabank.com/', 
    type: 'others', 
    description: '' 
  },
  { 
    name: 'Orbit Techsol', 
    fullName: 'Orbit Techsol India Private Limited',
    logo: '/sponsors/orbit.png', 
    link: 'https://www.orbitindia.net/#', 
    type: 'others', 
    description: '' 
  },
  { 
    name: 'Women in Cloud', 
    fullName: 'Women in Cloud',
    logo: '/sponsors/women.jpg', 
    link: 'https://womenincloud.com/', 
    type: 'others', 
    description: '' 
  }
];

// Fixed 2023 sponsor data with leading slashes in image paths and full names
const SponsorsData2023: Sponsor[] = [
  { 
    name: 'IWPA', 
    fullName: 'Indian Wind Power Association',
    logo: '/sponsors/iwpa.png', 
    link: 'https://windpro.org/', 
    type: 'platinum', 
    description: '' 
  },
  { 
    name: 'Enerfra Solutions', 
    fullName: 'Enerfra Solutions Private Limited',
    logo: '/sponsors/enerfra.png', 
    link: 'https://www.enerfra.com/', 
    type: 'in association with', 
    description: '' 
  },
  { 
    name: 'Torrent Power', 
    fullName: 'Torrent Power Limited',
    logo: '/sponsors/torrent.png', 
    link: 'https://www.torrentpower.com/', 
    type: 'in association with', 
    description: '' 
  },
  { 
    name: 'Apraava Energy', 
    fullName: 'Apraava Energy Private Ltd',
    logo: '/sponsors/Apraava Energy.png', 
    link: 'https://www.apraava.com//', 
    type: 'in association with', 
    description: '' 
  },
  { 
    name: 'Vena Energy', 
    fullName: 'Vena Energy Infrastructures Service Private Ltd',
    logo: '/sponsors/Vena Energy.png', 
    link: 'https://www.venaenergy.com/', 
    type: 'in association with', 
    description: '' 
  },
  { 
    name: 'MSPL Limited', 
    fullName: 'MSPL Limited',
    logo: '/sponsors/mspl.jpeg', 
    link: 'https://baldota.co.in/mspl-limited', 
    type: 'in association with', 
    description: '' 
  },
  { 
    name: 'BluePine Energy', 
    fullName: 'BluePine Energy',
    logo: '/sponsors/bluePine.jpg', 
    link: 'https://blupineenergy.com/', 
    type: 'in association with', 
    description: '' 
  },
  { 
    name: 'Synaptics', 
    fullName: 'Synaptics India Pvt Ltd',
    logo: '/sponsors/Synaptics.png', 
    link: 'https://www.synaptics.com//', 
    type: 'diamond', 
    description: '' 
  },
  { 
    name: 'LAPP India', 
    fullName: 'LAPP India Pvt Ltd',
    logo: '/sponsors/LAPP.png', 
    link: 'https://www.lapp.com/en/fr/', 
    type: 'gold', 
    description: '' 
  },
  { 
    name: 'BIA Ventures', 
    fullName: 'BIA Ventures Pvt Ltd',
    logo: '/sponsors/ather.jpg', 
    link: 'https://www.atherenergy.com/', 
    type: 'gold', 
    description: '' 
  },
  { 
    name: 'Arcadis', 
    fullName: 'Arcadis N.V.',
    logo: '/sponsors/arcadis.png', 
    link: 'https://www.arcadis.com', 
    type: 'gold', 
    description: '' 
  },
  { 
    name: 'Log 9 Materials', 
    fullName: 'Log 9 Materials Scientific Pvt Ltd',
    logo: '/sponsors/Log9.png', 
    link: 'https://www.log9materials.com/', 
    type: 'silver', 
    description: '' 
  },
  { 
    name: 'Essen Electrical', 
    fullName: 'Essen Electrical Enterprise',
    logo: '/sponsors/essen.png', 
    link: 'https://www.essenelectric.com/', 
    type: 'silver', 
    description: '' 
  },
  { 
    name: 'JVS Electronics', 
    fullName: 'JVS Electronics Pvt Ltd',
    logo: '/sponsors/jvs.png', 
    link: 'https://www.jvselectronics.in/', 
    type: 'others', 
    description: '' 
  },
  { 
    name: 'Anandi Developers', 
    fullName: 'Anandi Developers and Constructors',
    logo: '/sponsors/ADC.jpg', 
    link: 'https://www.adc.com/', 
    type: 'others', 
    description: '' 
  },
  { 
    name: 'Bosch Rexroth', 
    fullName: 'Bosch Rexroth (India) Private Limited',
    logo: '/sponsors/rexroth.png', 
    link: 'https://www.ARCTICTERN.com/', 
    type: 'others', 
    description: '' 
  },
  { 
    name: 'Orbit Techsol', 
    fullName: 'Orbit Techsol India Private Ltd',
    logo: '/sponsors/orbit.png', 
    link: 'https://www.orbitindia.net/', 
    type: 'others', 
    description: '' 
  },
  { 
    name: 'Arctictern Solutions', 
    fullName: 'Arctictern Solutions',
    logo: '/sponsors/ARCTICTERN.png', 
    link: 'https://www.ARCTICTERN.com/', 
    type: 'others', 
    description: '' 
  },
  { 
    name: 'Book Paradise', 
    fullName: 'Book Paradise',
    logo: '/sponsors/bookParadise.png', 
    link: 'https://booksparadise.in/', 
    type: 'others', 
    description: '' 
  },
  { 
    name: 'S K Publishers', 
    fullName: 'S K Publishers',
    logo: '/sponsors/sk.png', 
    link: '#', 
    type: 'others', 
    description: '' 
  },
];

const SponsorCard: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => {
  const tierStyle = tierColors[sponsor.type];
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={sponsor.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group w-64 transform transition-all duration-300 hover:scale-102 m-4`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`h-72 rounded-xl bg-white border-2 ${tierStyle.border} shadow-lg ${tierStyle.shadow} hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col relative`}
        style={{ boxShadow: isHovered ? '0 10px 25px rgba(0, 0, 0, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.08)' }}
      >
        {/* Logo container */}
        <div className="flex-1 p-5 flex items-center justify-center bg-white">
          <div className="w-full h-32 relative flex items-center justify-center overflow-hidden">
            {sponsor.logo.startsWith('http') ? (
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-h-full max-w-full object-contain transition-transform duration-500"
                style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={160}
                  height={120}
                  objectFit="contain"
                  className="transition-transform duration-500"
                  style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                />
              </div>
            )}
          </div>
        </div>
        
        {/* Name container */}
        <div className={`p-4 bg-gradient-to-r ${tierStyle.gradient} transition-all duration-300 group-hover:bg-opacity-95`}>
          <h3 className="text-white text-center font-semibold text-xl">{sponsor.name}</h3>
          {/* Full name shown on hover */}
          <div 
            className="text-white text-center text-lg mt-1 opacity-80 h-8 overflow-hidden"
          >
            {sponsor.fullName || sponsor.name}
          </div>
        </div>
      </div>
    </a>
  );
};

const SponsorGroup: React.FC<{ 
  type: SponsorType; 
  sponsors: Sponsor[];
  showDivider?: boolean;
}> = ({ type, sponsors, showDivider = true }) => {
  if (sponsors.length === 0) return null;
  
  const tierStyle = tierColors[type];
  const displayName = type === 'in association with' 
    ? 'In Association With' 
    : type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="mb-12">
      {/* Section Heading */}
      {showDivider ? (
        <div className="flex items-center mb-8">
          <h2 
            className={`text-transparent bg-clip-text ${tierStyle.heading} text-4xl font-bold mr-4`}
          >
            {displayName}
          </h2>
          <div className={`h-1 flex-grow ${tierStyle.hr} rounded-full`}></div>
        </div>
      ) : (
        <div className="text-center mb-8">
          <h2 
            className={`text-transparent bg-clip-text ${tierStyle.heading} text-4xl font-bold inline-block mx-auto`}
          >
            {displayName}
          </h2>
        </div>
      )}
      
      {/* Sponsors grid */}
      <div className="flex flex-wrap justify-center items-stretch">
        {sponsors.map((sponsor) => (
          <SponsorCard key={`${sponsor.name}-${sponsor.type}`} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};

const Sponsorship: React.FC = () => {
  // Group sponsors by type for 2023
  const groupedSponsors2023: Record<SponsorType, Sponsor[]> = {
    platinum: [],
    diamond: [],
    gold: [],
    silver: [],
    others: [],
    'in association with': [],
  };

  SponsorsData2023.forEach((sponsor) => {
    groupedSponsors2023[sponsor.type].push(sponsor);
  });

  // Group sponsors by type for 2024
  const groupedSponsors2024: Record<SponsorType, Sponsor[]> = {
    platinum: [],
    diamond: [],
    gold: [],
    silver: [],
    others: [],
    'in association with': [],
  };

  SponsorsData2024.forEach((sponsor) => {
    groupedSponsors2024[sponsor.type].push(sponsor);
  });

  // Common style for section headers
  const sectionHeaderStyle = "relative overflow-hidden mb-16 rounded-xl";
  const gradientOverlayStyle = "absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90";
  const blobStyle1 = "absolute -left-20 top-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob";
  const blobStyle2 = "absolute -right-20 bottom-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000";
  const contentStyle = "relative z-10 py-10 px-6 text-center";

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 2024 Sponsors Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Main heading with animated gradient background */}
        <div className={sectionHeaderStyle}>
          <div className={gradientOverlayStyle}></div>
          <div className={blobStyle1}></div>
          <div className={blobStyle2}></div>
          
          <div className={contentStyle}>
            <h1 className="text-white text-5xl font-bold mb-2">Sponsors of 2024</h1>
            <p className="text-blue-100 text-lg">Our esteemed partners in making this event possible</p>
          </div>
        </div>
        
        {/* Display sponsors by tier */}
        {Object.entries(groupedSponsors2024).map(([type, sponsors]) => 
          sponsors.length > 0 ? (
            <SponsorGroup 
              key={type} 
              type={type as SponsorType} 
              sponsors={sponsors} 
            />
          ) : null
        )}
      </section>
      
      {/* 2023 Sponsors Section - using the same blue gradient styling as 2024 section */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section heading - now using the same style as the 2024 section */}
          <div className={sectionHeaderStyle}>
            <div className={gradientOverlayStyle}></div>
            <div className={blobStyle1}></div>
            <div className={blobStyle2}></div>
            
            <div className={contentStyle}>
              <h2 className="text-white text-5xl font-bold mb-2">Sponsors of CSITSS-2023</h2>
              <p className="text-blue-100 text-lg">Special thanks to our previous supporters</p>
            </div>
          </div>
          
          {/* Display 2023 sponsors by tier */}
          {Object.entries(groupedSponsors2023).map(([type, sponsors]) => 
            sponsors.length > 0 ? (
              <SponsorGroup 
                key={type} 
                type={type as SponsorType} 
                sponsors={sponsors} 
              />
            ) : null
          )}
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;