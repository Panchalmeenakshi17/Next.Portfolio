import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Sanjog - The Matrimony App',
      description:
        'A platform that redefines the way individuals find their life partners.',
      tasks:
        'I developed this project particularly on the by planning, communicating with my Team-mate, gathering data, implementing UI & pages, and integrating real-time data fetching with filtering functionality.',
      url: 'https://github.com/Kunalprajapati1/vivah',
      img: 'https://i.postimg.cc/G3SDTtVq/dd.jpg',
      tags: ['ReactJS', 'MongoDB', 'TailwindCSS','Express.js', 'RestFul APIs'],
    },
    {
      id: getId(),
      name: 'Unity of Youth Web-App',
      description: 'An AI-Powered Leads Generation Platform.',
      tasks:
        'As a Freslancer, I strategically planned project milestones, led a cross-functional team, established a design system, developed the website, and integrated Database - Mongodb for storing Volunteers Data and the Blood Donor Data.',
      url: 'https://unityofyouthfoundation.netlify.app/',
      img: 'https://i.postimg.cc/QtzMC9C7/Screenshot-2024-05-30-001026.png',
      tags: ['ReactJS', 'MongoDB', 'TailwindCSS','Express.js', 'RestFul APIs'],
    },
    {
      id: getId(),
      name: 'Need4Need',
      description: 'The AI-powered platform which creates a bridge between Donators and the NGOs.',
      tasks:
        'Implemented AI for automatically finding the nearest NGO according to the Pincode entered by the donator and sending all the details of the Donator directly to the nearest NGO over Gmail.',
      url: 'https://65b6579d213eee5ccc80d049--radiant-biscuit-40b4e9.netlify.app/',
      img: 'https://i.postimg.cc/JnHsbc9x/Screenshot-2024-05-30-001653.png',
      tags: ['ReactJS', 'MongoDB', 'TailwindCSS','Express.js', 'RestFul APIs','Google Maps'],
    },
  ],
};

export default featuredProjectsSection;
