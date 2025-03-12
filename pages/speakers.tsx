import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

type SpeakerType = {
  id: number;
  name: string;
  designation: string;
  topic?: string;
  imageLink: string;
};

// Placeholder component for speaker image with loading state and fixed dimensions
const SpeakerImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  
  return (
    <div className="relative h-48 w-48 overflow-hidden rounded-full bg-blue-50">
      {!error ? (
        <div className="h-full w-full">
          {/* Using img tag instead of Next.js Image component to avoid dimensions issues */}
          <img
            src={src}
            alt={alt}
            className={`h-full w-full object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setError(true);
              setIsLoading(false);
            }}
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-blue-100">
          <span className="text-3xl font-bold text-blue-500">
            {alt.split(' ').map(word => word[0]).join('')}
          </span>
        </div>
      )}
    </div>
  );
};

const SpeakerCard = ({ speaker }: { speaker: SpeakerType }) => {
  return (
    <div className="group flex flex-col items-center">
      <div className="relative mb-4 transform overflow-hidden rounded-full transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-lg">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-70 blur-sm transition-all duration-300 group-hover:opacity-100"></div>
        <div className="relative">
          <SpeakerImage src={speaker.imageLink} alt={speaker.name} />
        </div>
      </div>
      
      <h3 className="text-center text-2xl font-bold text-blue-800 transition-colors duration-300 group-hover:text-blue-600">
        {speaker.name}
      </h3>
      
      <p className="mt-2 text-center text-base text-gray-600">
        {speaker.designation}
      </p>
      
      {speaker.topic && (
        <div className="mt-3 flex items-center justify-center">
          <span className="rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 shadow-sm transition-all duration-300 group-hover:bg-blue-100">
            {speaker.topic}
          </span>
        </div>
      )}
    </div>
  );
};

const SectionHeading = ({ 
  children, 
  gradientFrom, 
  gradientTo, 
  gradientVia 
}: { 
  children: React.ReactNode; 
  gradientFrom: string; 
  gradientTo: string; 
  gradientVia?: string;
}) => {
  return (
    <div className="relative mb-16 flex justify-center">
      <h2 className={`relative z-10 text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradientFrom} ${gradientVia || ''} ${gradientTo}`}>
        {children}
      </h2>
      <div className="absolute bottom-0 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transform translate-y-6"></div>
    </div>
  );
};

const Speakers = () => {
  const keynoteSpeakers: SpeakerType[] = [
    {
      id: 1,
      name: 'Sri. S S Iyengar',
      designation: 'Distinguished University Professor, Florida International University (FIU), Miami',
      imageLink: '/speakers/ss_iyenger.jpeg', 
    },
    {
      id: 2,
      name: 'Chaitra Vedullapalli',
      designation: 'Cofounder & CMO, Meylah',
      imageLink: '/speakers/chaitra_v.jpeg', 
    },
    {
      id: 3,
      name: 'Prof. Dr.-Ing. Vinod Rajamani',
      designation: 'Professor, University of Applied Sciences and Arts Dortmund',
      imageLink: 'https://www.fh-dortmund.de/kontakt-daten/Rajamani-Vinod.php.media/82194/Vinod-Rajamani_Portrait.jpg.scaled/3312b7eed140ac54332cfc22f82c192c.jpg',
    },
  ];

  const aiForAllSpeakers: SpeakerType[] = [
    {
      id: 4,
      name: 'Mr. Raj Pagaku',
      designation: 'VP Engineering, Security Business Unit, Juniper Networks India Pvt Ltd, Bengaluru, India',
      topic: 'Inclusive AI: Shaping the Future for Everyone',
      imageLink: 'https://media.licdn.com/dms/image/v2/D5603AQHYe3rt7tTUZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690629699833?e=1735776000&v=beta&t=kILq2XM2fufTdX-vVWqQWYw2E8EJGwS_sSRuuxW5dfs',
    },
    {
      id: 5,
      name: 'Dr. Nagaraju G',
      designation: 'Director, Ophthalmology, Minto Eye Hospital, BMCRI, Bengaluru',
      topic: 'AI in Health Care',
      imageLink: 'https://mhbmcri.karnataka.gov.in/storage/pdf-files/DrNagraj.jpg',
    },
  ];

  const digitalTransformationSpeakers: SpeakerType[] = [
    {
      id: 6,
      name: 'Dr. K B Shyam Prasad',
      designation: 'Momentive Performance Materials India Pvt Ltd, India Technology Centre, Bengaluru',
      topic: 'Accelerate Innovation through Digital Tools',
      imageLink: 'https://media.licdn.com/dms/image/v2/C5603AQH8tHEbqXh4dg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517713735746?e=1735776000&v=beta&t=PEUeA-D3bFctLoqUEMUQ_8IAL_IlunJ3RPc2rVHb9kI',
    },
    {
      id: 7,
      name: 'Mr. Abhi Anand',
      designation: 'Director (Financial Services Leader), PwC, Bagmane Tech Park, Bengaluru',
      topic: 'Sustainable AI Applications',
      imageLink: 'https://media.licdn.com/dms/image/v2/D5603AQHZ1kZTvzQ-tA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1692179908763?e=1735776000&v=beta&t=Rya_Qbez8e9baX4U9ZtaTIalpl8o95Z5xbyI_Gf_Q6Y',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* IEEE Conference Header */}
        <div className="mb-16 text-center">
      {/* <div className="mb-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-800">
        IEEE Conference
      </div> */}
          <h1 className="h-20 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
            Distinguished Speakers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
            Join us for insights from industry leaders and academic experts
          </p>
        </div>

        {/* Keynote Speakers Section */}
        <section className="mb-24">
          <SectionHeading 
            gradientFrom="from-blue-800" 
            gradientTo="to-blue-500"
            gradientVia="via-blue-600"
          >
            Keynote Speakers
          </SectionHeading>
          
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {keynoteSpeakers.map((speaker) => (
              <div 
                key={speaker.id} 
                className="transform rounded-2xl bg-white p-8 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
              >
                <SpeakerCard speaker={speaker} />
              </div>
            ))}
          </div>
        </section>

        {/* Invited Speakers Header */}
        <section className="mb-24">
          <SectionHeading 
            gradientFrom="from-blue-700" 
            gradientTo="to-blue-400"
          >
            Invited Speakers
          </SectionHeading>

          {/* AI for All Track */}
          <div className="mb-16">
            <div className="mb-12 flex justify-center">
              <span className="inline-block rounded-full bg-blue-100 px-6 py-2 text-2xl font-semibold text-blue-700">
                Track 1: AI for All
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              {aiForAllSpeakers.map((speaker) => (
                <div 
                  key={speaker.id} 
                  className="transform rounded-2xl bg-white p-8 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                >
                  <SpeakerCard speaker={speaker} />
                </div>
              ))}
            </div>
          </div>

          {/* Digital Transformation Track */}
          <div>
            <div className="mb-12 flex justify-center">
              <span className="inline-block rounded-full bg-blue-100 px-6 py-2 text-2xl font-semibold text-blue-700">
                Track 2: Digital Transformation
              </span>
            </div>
            
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              {digitalTransformationSpeakers.map((speaker) => (
                <div 
                  key={speaker.id} 
                  className="transform rounded-2xl bg-white p-8 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
                >
                  <SpeakerCard speaker={speaker} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Speakers;