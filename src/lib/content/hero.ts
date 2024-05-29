import { HeroSectionType } from '@/lib/types/sections'
import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
    subtitle: 'Hi, my name is',
    title: 'Meenakshi Panchal.',
    tagline: 'I create Dynamic & visually pleasing Web Apps and Mobile Apps.',
    description:
    "I'm a driven Software Developer with expertise in React Native, Firebase, and Google APIs. I excel in creating innovative, user-friendly mobile applications and optimizing code for advanced functionalities. I'm eager to leverage my skills to deliver high-quality mobile solutions.   ",
    specialText: 'Currently available for a job & freelance',
    cta: {
        title: 'see my resume',
        url: `/${resumeFileName}`,
        hideInDesktop: true,
    },
};