import { FaCode } from 'react-icons/fa';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { VscServerProcess } from 'react-icons/vsc';
import EComarce from '../assets/images/projects/EComarce.png';
import HireHub from '../assets/images/projects/Hire-Hub.png';
import projectFive from '../assets/images/projects/projectFive.png';
import projectFour from '../assets/images/projects/projectFour.png';
import projectOne from '../assets/images/projects/projectOne.png';
import projectTwo from '../assets/images/projects/projectTwo.png';

const featuresData = [
  {
    id: 1,
    icon: FaCode, // Just reference the component here, don't use JSX syntax
    title: 'Full Stack Development',
    des: 'I utilize the MERN stack to develop high-quality web applications, seamlessly integrating frontend and backend components for superior user interaction.',
  },
  {
    id: 2,
    icon: HiOutlineDesktopComputer,
    title: 'Frontend Development',
    des: 'In front-end development, I specialize in creating user-friendly interfaces with React , Next And Tailwind CSS for seamless experiences across devices.',
  },
  {
    id: 3,
    icon: VscServerProcess,
    title: 'Backend Development',
    des: 'In backend development, I create efficient server-side solutions with Node.js, Express.Js, for Database MongoDB, ensuring seamless integration with front-end systems.',
  },
];

const ProjectsData = [
  {
    id: 1,
    img: EComarce,
    title: 'E-Comarce',
    github: 'https://github.com/Himanshu8825/E-Comarce2.git',
    liveLink: 'https://e-comarce-2.onrender.com/shop/home',
    description:
      "'E-Comarce' is my MERN stack creation, using Tailwind CSS , Shad Cn , and Redux. Seamlessly list and manage Products for sale  on this robust platform, offering an intuitive user experience.",
  },
  {
    id: 2,
    img: HireHub,
    title: 'Hire-Hub',
    github: 'https://github.com/Himanshu8825/Job-Portal.git',
    liveLink: 'https://job-portal-kpvv.onrender.com/',
    description:
      "'Hire-Hub' is my MERN stack project, using Tailwind CSS , Shad Cn , and Redux .  You can add a job and also students apply their job according to their skills . offering an intuitive user experience. ",
  },
  {
    id: 3,
    img: projectTwo,
    title: 'Food Delivery',
    github: 'https://github.com/Himanshu8825/FoodDeleveryProject.git',
    liveLink: 'https://fooddelevery-z5mv.onrender.com/',
    description:
      "'Food Delivery' is my MERN stack project, featuring an admin panel for efficient management. Enjoy seamless ordering and tracking for an enhanced dining experience.",
  },
  {
    id: 4,
    img: projectOne,
    title: 'Real Estate',
    github: 'https://github.com/Himanshu8825/RealEstate.git',
    liveLink: 'https://verma-estate.onrender.com/',
    description:
      "'Real Estate' is my MERN stack creation, using Tailwind CSS, Firebase, and Redux. Seamlessly list and manage properties for sale or rent on this robust platform, offering an intuitive user experience.",
  },
  {
    id: 5,
    img: projectFive,
    title: 'Portfolio',
    github: 'https://github.com/Himanshu8825/Portfolio.git',
    liveLink: 'https://portfolio-wine-tau-25.vercel.app/',
    description:
      'Portfolio project leveraging React.js and Tailwind CSS for dynamic UI. Designed to optimize user experience with intuitive navigation and modern aesthetics.',
  },
  {
    id: 6,
    img: projectFour,
    title: 'Razor pay',
    github: 'https://github.com/Himanshu8825/Razorpay-Front-End.git',
    liveLink: 'https://profound-queijadas-e68ae3.netlify.app/',
    description:
      "'RazorPay Clone' is my project, replicating RazorPay's functionality with HTML and Tailwind CSS. Seamlessly handle payments and transactions with a sleek, responsive interface.",
  },
];

export { featuresData, ProjectsData };
