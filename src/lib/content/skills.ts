import { SkillsSectionType } from '@/lib/types/sections'
import { getId } from '@/lib/utils/helper'

export const skillsSection: SkillsSectionType = {
    title: 'what i do',
    skills: [
    {
        id: getId(),
        title: 'full stack development and Mobile Application Development',
        // animation lottie file: https://lottiefiles.com/
        lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
        },
        points: [
        'Building responsive websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
        'Building the frontend of the Mobile Applications - Android',
        'Building Designs for the Applciations and the web-applications on the Figma and Canva',
        ],
        softwareSkills: [
          // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        // { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
            name: 'typeScript',
            icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'MongoDB', icon: 'logos:mongodb' },
        { name: 'React Native', icon: 'logos:react' },
        { name: 'Firebase', icon: 'logos:firebase' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
          // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'figma', icon: 'logos:figma' }, // Corrected icon for Figma
        { name: 'canva', icon: 'simple-icons:canva' }, // 
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
        { name: 'expressjs', icon: 'simple-icons:express' },
        { name: 'expressjs', icon: 'simple-icons:github' },
        { name: 'expressjs', icon: 'simple-icons:git' },
        ],
    },
    {
        id: getId(),
        title: 'UI/UX designing',
        lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
        },
        points: [
        'Experience in designing user-friendly interfaces with figma',
        'Experience in developing design systems and style guides',
        'Providing user-friendly design solutions',
        ],
        softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'canva', icon: 'simple-icons:canva' },
         // 

        // { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        // { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
        ],
    },
    {
        id: getId(),
        title: 'Web Applications Development',
        lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
        },
        points: [
        'Experience in developing the single-page Applications with React.js',
        'Experience in developing RestFUL APIs for interation betweeen Frontend and backend',
        'Providing user-friendly responsive websites.',
        'Experience in developing the Full-Stack websites.',
        ],
        softwareSkills: [
        { name: 'React.js', icon: 'logos:react' },
        { name: 'expressjs', icon: 'simple-icons:express' },
        { name: 'MongoDB', icon: 'logos:mongodb' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'expressjs', icon: 'simple-icons:git' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },

        // { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        // { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
        ],
    },
    {
        id: getId(),
        title: 'Mobile Applications Development - Android',
        lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
        },
        points: [
        'Experience in developing user-friendly interfaces with React Native for andorid Applications',
        // 'Experience in developing design systems and style guides',
        'Experience in the database such as firestore of firebase for storing the real-time data of user.',
        ],
        softwareSkills: [
          { name: 'React Native', icon: 'logos:react' },
          { name: 'Firebase', icon: 'logos:firebase' },
          { name: 'expressjs', icon: 'simple-icons:git' },

        // { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        // { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
        ],
    },
    ],
};
