import radiolk1 from "../assets/radiolk.webp";
import trustpass from "../assets/trustpass.webp";
import fashion from "../assets/fashion.webp";
import slic from "../assets/slic.webp";
import automata from "../assets/automata.webp";
import bandlk from "../assets/bandlk.webp";
import pos from "../assets/pos.webp";

export const projects = [
  {
    title:
      "TrustPass - Blockchain Based Trusted Digital Identity Platform (Final Year Research Project)",
    description:
      " A trusted platform for Service providers and citizens to manage their identity authentications remotely without providing any identity proving documents.",
    technologies:
      "Android, Java, Machine Learning, Deep Learning, CNN, ExpressJS, ReactJS, Flask, Tensorflow, Tailwind CSS",
    images: [trustpass],
  },
  {
    title: "RadioLK",
    description:
      "Completely free mobile app that is capable of live streaming all Sri Lankan Radio Stations All Day through internet. App supports background streaming without any interruptions. ",
    technologies: "Flutter, Dart , NodeJS , ExpressJS , MongoDB",
    images: [radiolk1],
  },

  {
    title: "Fashion Store",
    description:
      "Completely functional e-commerce web app with user management , admin dashboard, product management. Developed using MERN stack",
    technologies: "React , ExpressJS , Mongo DB",
    images: [fashion],
  },

  {
    title: "BandLK",
    description: "Band. Lk is a mobile app for quickly finding and reserving music bands from different genres.",
    technologies: "Android, Java, Firebase",
    images: [bandlk],
  },
  {
    title: "Store Management System for Flash Electronics",
    description:
      "Complete point on sale system with Employee management, Product management, Salary management, Finance Management and Detailed Analytics.",
    technologies: "Java, JavaFX, MySql",
    images: [pos],
  },
  {
    title: "Automata",
    description:
      "Modular smart home system capable of controlling and monitoring home appliance in a smart way over WiFi. .",
    technologies:
      "Android, JAVA , Platform IO, Web Sockets , C++, C ,STM32 , ESP 8268",
    images: [automata],
  },
];
