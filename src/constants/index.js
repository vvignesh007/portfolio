
import boxing from "../assets/boxing.png"
import port from '../assets/image.png'
import eeg from '../assets/eeg.gif'

export const HERO_CONTENT = `I'm a passionate and dedicated Full stack Developer with a strong focus on building 
responsive and visually appealing web interfaces. Proficient in HTML5, CSS, Bootstrap, Tailwind CSS, JavaScript, and React.js, 
I combine creativity with technical skills to deliver seamless and engaging user experiences.

I am now actively seeking a full-time fullstack developer role where I can apply my knowledge, grow as a professional, and 
contribute to impactful and innovative projects.".`;

export const ABOUT_TEXT = `I'm a detail-oriented and passionate Full stack Developer (Fresher) with hands-on experience in building responsive web interfaces using HTML, CSS, JavaScript, and React.js. I also bring cross-platform development knowledge with Flutter and Dart, backed by academic projects and internship experience.

My background includes developing real-world solutions such as a seizure recognition system using machine learning and a boxing management platform, showcasing my ability to integrate functionality with intuitive UI/UX design. I'm skilled in tools like Git, Figma, MySQL, and have experience in server-side troubleshooting, domain configurations, and DNS management through my role as a Website Troubleshoot Engineer.

Having recently completed my Bachelor’s in Computer Science Engineering (2024), I’m now eager to contribute to innovative teams in a front-end or full-stack development role, where I can continue to learn, grow, and deliver impactful solutions.`;

export const EXPERIENCES = [
  {
    year: "April 2023 - September 2023",
    role: "Flutter Developer Intern",
    company: "ROSETTE  SMART  LIFE—MINDSTACK  TECHNOLOGIES  PVT  LTD",
    description: `•	Engaged in the development of a cutting-edge water bottle with built-in Bluetooth connectivity, aimed at enhancing user health by facilitating optimal nutrition, hydration, and additional personalized services. Responsible for spearheading the front-end development of the mobile application utilizing Flutter and Dart, encompassing UI design and the comprehensive implementation of user-centric features.`,
    technologies: ["Flutter", "firebase", "Figma","Node js"],
  },
  {
    year: "August 2024 - January 2025",
    role: "Website troubleshooting engineer",
    company: "UnifyCx pvt LTD",
    description: ` Improved website uptime and reliability by quickly identifying and resolving critical server and domain issues,
 contributing to a measurable improvement in client satisfaction.Reduced DNS propagation delays by performing in-depth log analysis and implementing faster resolution strategies,
 improving domain availability during migrations.Increased email deliverability success rate by correctly configuring SPF, DKIM, and DMARC records, reducing bounce
 rates and improving trust with email clients.Achieved reduction in average server load time through proactive optimization of hosting environments and server
 configurations.Provided expert-level support for technical escalations, resolving issues efficiently and effectively.`,
    technologies: ["VPS-DEDI Hosting", "cPanel/WHM", "CentOS","Alma Linux","DNS Propagation"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio-website",
    image: port,
    source:"https://github.com/vvignesh007/portfolio-website-Vite-",
    description: "This is a dynamic portfolio website built using the React.js framework.It showcases my technical skills, educational background, and development journey.The site includes detailed sections for my internships, personal and academic projects.Interactive and responsive design ensures a smooth experience across all devices.Explore to learn more about my expertise, creativity, and passion for coding.",
    technologies: ["ReactJs", "CSS", "HTML", "Bootstrap","Javascript"],
  },
  {
    title: "Epilepsy-Seizure-Recognition-using-machine-learning",
    image: eeg,
    source: "https://github.com/vvignesh007/Epilepsy-Seizure-Recognition-using-machine-learning",
    description:"Developed a deep learning model using Recurrent Neural Networks (RNN), specifically Long Short-Term Memory(LSTM), to analyze EEG signals for real-time seizure prediction.",
    technologies: ["HTML", "CSS", "PHP", "Python"],
  },
  {
    title: "Boxing Management system ",
    image: boxing,
    source: "https://github.com/vvignesh007/BoxingSchool-management-system",
    description:"Developed a deep learning model using Recurrent Neural Networks (RNN), specifically Long Short-Term Memory(LSTM), to analyze EEG signals for real-time seizure prediction.",
    technologies: ["HTML", "CSS", "PHP","Javascript", "Bootstrap","SQL"],
  }
];

export const CONTACT = {
  address: "udupi-karnataka ",
  phoneNo: "+91-7259266475 ",
  email: "vvsvignesh7@gmail.com",
};