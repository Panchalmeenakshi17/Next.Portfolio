'use client'

import React, { useState } from 'react';

const certificates = [
  {
    id: 1,
    image: 'https://i.postimg.cc/Z5MFfTcT/Screenshot-2024-08-05-161759.png',
    link: 'https://www.coursera.org/account/accomplishments/records/ZMAY4FC9HWDC'
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/fTkV8Yg9/Screenshot-2024-08-05-162029.png',
    link: 'https://i.postimg.cc/fTkV8Yg9/Screenshot-2024-08-05-162029.png'
  },
  {
    id: 4,
    image: 'https://i.postimg.cc/PqMfXqRH/Screenshot-2024-08-05-162732.png',
    link: 'https://unstop.com/certificate-preview/bc4c74bb-cbca-403d-8c31-80541be99b91?utm_campaign='
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/Zn5WtNbX/Screenshot-2024-08-05-161924.png',
    link: 'https://coursera.org/share/8e21b92f4c4751e54b776741ab9e276a'
  },
  {
    id: 5,
    image: 'https://i.postimg.cc/fTkV8Yg9/Screenshot-2024-08-05-162029.png',
    link: 'https://i.postimg.cc/fTkV8Yg9/Screenshot-2024-08-05-162029.png'
  },
  {
    id: 6,
    image: 'https://i.postimg.cc/25CbFgpz/Screenshot-2024-08-05-163449.png',
    link: 'https://i.postimg.cc/25CbFgpz/Screenshot-2024-08-05-163449.png'
  },
  {
    id: 7,
    image: 'https://i.postimg.cc/0ysdFWg4/Screenshot-2024-08-05-165740.png',
    link: 'https://i.postimg.cc/0ysdFWg4/Screenshot-2024-08-05-165740.png'
  }
  // Add more certificates as needed
];

const Cert: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(prevState => !prevState);
  };

  return (
    <div className=' mt-16'>
      <h1 className='text-center text-4xl'>Certifications and Awards</h1>
      <div className="flex grid grid-cols-2 gap-4 overflow-hidden mt-10 w-full">
        {certificates.slice(0, 2).map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img
              src={cert.image}
              alt={`Certificate ${cert.id}`}
              className="h-[300px] w-full object-cover  "
            />
          </a>
        ))}
      </div>
      {showMore ? (
        <div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {certificates.slice(2, 7).map((cert) => (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={cert.image}
                  alt={`Certificate ${cert.id}`}
                  className="w-full h-[300px] object-cover"
                />
              </a>
            ))}
          </div>
          <button 
            onClick={toggleShowMore}
           className="mt-10 mx-auto block border-[#38bdf8] border-2 hover:bg-[#38bff826] transition ease-in-out text-white  py-2 px-4 rounded"
          >
           <h1 className=' text-sm text-[#38bdf8] p-2 font-mono'>
          Show Less

            </h1>
          </button>
        </div>
      ) : (
        <button 
          onClick={toggleShowMore}
          className="mt-10 mx-auto block border-[#38bdf8] hover:bg-[#38bff826] transition ease-in-out border-2 text-white  py-2 px-4 rounded"
        >
            <h1 className=' text-sm text-[#38bdf8]  p-2 font-mono'>
          Show More

            </h1>
        </button>
      )}
    </div>
  );
};

export default Cert;
