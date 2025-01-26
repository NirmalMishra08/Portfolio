import project1 from "./projects/project-1.jpg"
import project2 from "./projects/project-2.jpg"
import project3 from "./projects/project-3.jpg"
import project4 from "./projects/project-4.jpg"



export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];
export const PROJECTS = [
  {
    title: "Mingle - Social Media Platform",
    image: project1, // Replace with your project image URL or import
    description:
      "A dynamic social media platform featuring posting, commenting, real-time messaging, and secure user authentication.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary"],
  },
  {
    title: "BookNook - Book Selling Website",
    image: project2, // Replace with your project image URL or import
    description:
      "An online platform for buying and accessing free and premium books, with features like secure login, encrypted passwords, and a course library.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Samvad - Debate Platform",
    image: project3, // Replace with your project image URL or import
    description:
      "A debate platform that allows team-based debates with features such as assigning credibility markers to winners.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Chat Application",
    image: project4, // Replace with your project image URL or import
    description:
      "A real-time chat application enabling users to send instant messages with features like typing indicators and online/offline status updates.",
    technologies: ["React", "Node.js", "WebSocket", "Express", "MongoDB"],
  },
];
