import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'String Lab Technology Solutions Private Limited',
    location: 'India',
    description:
      'Intern | Sep 2024 - Dec 2024\n- Developed and managed WordPress-based blogs and front-end website features.\n- Led a project on OHLC Candle data for stock market analysis, integrating APIs to collect stock details.\n- Supervised junior interns and coordinated teamwork for project execution.\n- Tech Used: WordPress, API Integration, Data Analysis',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Sep 2024 - Dec 2024',
  },
  {
    title: 'AI-Driven Chatbot for Real-World Applications',
    location: 'Project',
    description:
      '- Implemented secure authentication with hashing, ensuring 100% data integrity in MySQL.\n- Reduced response time by 40% through optimized database interactions.\n- Enabled dynamic interactions, improving chatbot accuracy by 30%.\n- Tech Stack: PHP, AIML, MySQL, HTML, CSS, JavaScript, Bootstrap',
    icon: React.createElement(BookIcon),
    date: 'Dec 2024',
  },
  {
    title: 'E-Commerce Website Development',
    location: 'Project',
    description:
      '- Designed and deployed a fully functional e-commerce platform with 50+ product categories.\n- Optimized UI/UX, increasing user engagement by 25%.\n- Integrated a secure payment gateway, reducing cart abandonment by 20%.\n- Deployed on Netlify, achieving 99.9% uptime for seamless access.\n- Improved site responsiveness and loading speed, reducing bounce rate by 35%.\n- Tech Stack: HTML, CSS, JavaScript, React.js, Netlify',
    icon: React.createElement(BookIcon),
    date: 'Nov 2024',
  },
  {
    title: 'Lovely Professional University',
    location: 'Punjab, India',
    description:
      'Bachelor of Technology - Computer Science and Engineering; CGPA: 6.47\nAugust 2022 - Pursuing',
    icon: React.createElement(BookIcon),
    date: 'Aug 2022 - Present',
  },
  {
    title: 'Guru Gobind Singh Public School',
    location: 'Kamre, Ranchi',
    description:
      'Intermediate; Percentage: 72.5%\nApril 2020 - March 2022',
    icon: React.createElement(BookIcon),
    date: 'Apr 2020 - Mar 2022',
  },
  {
    title: 'Guru Gobind Singh Public School',
    location: 'Kamre, Ranchi',
    description:
      'Matriculation; Percentage: 85.5%\nApril 2018 - March 2020',
    icon: React.createElement(BookIcon),
    date: 'Apr 2018 - Mar 2020',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Audit Master',
    description: `Audit Master is a platform that streamlines the process of obtaining legal expertise and resources. It automates tasks like GAP Analysis, GAP Reporting, Due Diligence & more.`,
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'SCRUM Methodology'],
    imageUrl: auditMasterImg,
    link: 'https://auditmaster.ai/',
  },
    // {
    //   title: 'Demo Automation of accounting documents processing',
    //   description:
    //     'Upload any receipt or invoice (even a crumpled one from your pocket) and watch our AI accurately extract its data.',
    //   tags: ['TypeScript', 'React', 'Docker', 'Next.js', 'GraphQL', 'Tailwind'],
    //   imageUrl: accountingImg,
    //   link: 'https://demo.grantonai.cz/',
    // },
  {
    title: 'FileDrive',
    description:
      'A platform for decentralized file storage with robust user management.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Convex',
      'Clerk',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: filedriveImg,
    link: 'https://github.com/KetanMishra/File-Driver.git',
  },
  // {
  //   title: 'Portfolio',
  //   description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
  //   tags: [
  //     'React',
  //     'TypeScript',
  //     'Next.js',
  //     'Framer Motion',
  //     'Cloudinary',
  //     'React Email',
  //     'Tailwind',
  //   ],
  //   imageUrl: portfolioImg,
  //   link: 'https://github.com/bbyc4kes/portfolio',
  // },

  {
    title: 'Surge',
    description:
      'Service that allows users to build and manage their own websites with integrated payment processing.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'MySQL',
      'Clerk',
      'Stripe Connect',
      'Shadcn',
      'Tailwind',
    ],
    imageUrl: surgeImg,
    link: 'https://github.com/KetanMishra/surge.git',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  // ['Framer', '/svgs/framer.svg'],
  // ['Shadcn', '/svgs/shadcnui.svg'],
  // ['Headless', '/svgs/brand-headlessui.svg'],
  // ['Redux', '/svgs/redux-original.svg'],
  // ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['PostgreSQL', '/svgs/postgresql.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  // ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  // ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  // ['Cloudinary', '/svgs/cloudinary.svg'],
  // ['Golang', '/svgs/golang.svg'],
  // ['Docker', '/svgs/Docker.svg'],
  // ['Clerk', '/svgs/clerk.svg'],
  // ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  // ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  // ['', '/svgs/etc.svg'],
] as const;
