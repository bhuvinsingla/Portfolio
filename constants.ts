import { ExperienceItem, ProjectItem, SkillCategory, CertificateItem, AwardItem } from './types';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Bhuvin Singla",
  role: "Full Stack Developer",
  email: "bhuvinsingla@gmail.com",
  phone: "+91 7355635544",
  location: "Mohali, India",
  github: "https://github.com/bhuvinsingla",
  linkedin: "https://www.linkedin.com/in/bhuvin-singla/",
  summary: "Full Stack Developer with a strong foundation in building scalable web applications, blockchain solutions, and AI integrations. Proven track record of delivering robust solutions using React, Next.js, Node.js, and Solidity. Passionate about solving complex problems and creating intuitive user experiences."
};

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: PERSONAL_INFO.github, icon: Github },
  { label: 'LinkedIn', href: PERSONAL_INFO.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
  { label: 'Phone', href: `tel:${PERSONAL_INFO.phone}`, icon: Phone },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: "Associate Trainee",
    company: "SmartData Enterprises Inc.",
    period: "09/2024 – Present",
    location: "Mohali",
    description: [
      "Built a video conferencing application using Socket.IO and browser Media Devices APIs for seamless real-time communication.",
      "Developed custom AI assistants using Vapi and LangChain, integrating sophisticated natural language workflows into web applications.",
      "Worked across modern frontend frameworks like Angular and Next.js to deliver highly responsive and scalable UI solutions."
    ]
  },
  {
    id: 'exp-2',
    role: "Industry Integrated On Job Training",
    company: "Antier Solutions",
    period: "07/2023 – 12/2023",
    description: [
      "Developed and deployed a custom NFT marketplace featuring wallet integration, token minting, and dynamic listings.",
      "Built and tested Solidity smart contracts (ERC-20 & ERC-721) ensuring secure on-chain logic and efficient token creation.",
      "Integrated Web3.js, Ethers.js, and smart contracts into React/Next.js applications with MetaMask and IPFS support."
    ]
  },
  {
    id: 'exp-3',
    role: "Trainee",
    company: "Salesforce",
    period: "04/2023 – 06/2023",
    description: [
      "Built and customized applications on the Salesforce platform, optimizing for specific business requirements.",
      "Worked on real-time solutions to improve user workflows and overall system efficiency.",
      "Achieved 65 badges and earned 50k points on Trailhead, demonstrating deep expertise in Salesforce tools."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: "AI Voice Assistant",
    description: "Created a real-time AI assistant integrating voice and conversational AI models to enhance user interaction.",
    techStack: ["Vapi", "LangChain", "AI Models"],
    features: [
      "Leveraged Vapi for robust voice interface and LangChain for intelligent task processing.",
      "Enabled conversational flows, tool invocation, and personalized user experiences across dynamic interfaces."
    ]
  },
  {
    id: 'proj-2',
    title: "Video Conferencing Platform",
    description: "Developed a Google Meet-style application facilitating real-time video communication.",
    techStack: ["Socket.IO", "Media Devices API", "Node.js"],
    features: [
      "Utilized Socket.IO for efficient signaling and Media Devices API for live audio/video streaming.",
      "Managed peer-to-peer connections and room-based interactions through a scalable Node.js backend."
    ]
  },
  {
    id: 'proj-3',
    title: "NFT Marketplace",
    description: "A decentralized platform for minting, buying, and selling NFTs with full blockchain integration.",
    techStack: ["Solidity", "Web3.js", "React.js", "IPFS", "MetaMask"],
    features: [
      "Built smart contracts (ERC-20, ERC-721) and deployed secure contract logic.",
      "Integrated Ethers.js and IPFS for decentralized storage and interaction.",
      "Delivered transparent asset listings and secure wallet interactions."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript", "Vite", "Tailwind CSS"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.IO", "API Integration"]
  },
  {
    category: "Blockchain",
    skills: ["Solidity", "ERC-20 Standards", "Smart Contracts", "Web3.js", "Ethers.js"]
  },
  {
    category: "AI & Tools",
    skills: ["Vapi", "LangChain", "Git", "GitHub", "Postman", "SQL", "MySQL"]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    title: "Adv. Web Development",
    issuer: "Coding Ninjas"
  },
  {
    title: "Blockchain Developer",
    issuer: "Antier Solutions"
  },
  {
    title: "5 Star Coder",
    issuer: "HackerRank"
  }
];

export const AWARDS: AwardItem[] = [
  {
    title: "The Great Indian Hackathon",
    description: "Won prize worth 10k amazon vouchers",
    detail: "Launched a project to connect surplus medications with those in need, enabling free distribution and supporting the community."
  }
];

export const EDUCATION = [
  {
    degree: "BE CSE",
    institution: "Chitkara University, Baddi",
    score: "8.88 CGPA",
    year: "2020-2024"
  },
  {
    degree: "Higher Secondary",
    institution: "DAV, Malerkotla",
    score: "78.8%",
    year: "2019-2020"
  }
];
