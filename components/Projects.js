import React from "react";
import Image from "next/image";
import carey from "../assets/carey.png";
import ds from "../assets/ds.png";
import sliit from "../assets/sliit.png";
import ProjectComponent from "./ProjectComponent";

import { projects } from "../data/Projects";

import { motion } from "framer-motion";

const slideLeft = {
  hidden: { x: -400 },
  show: {
    x: 0,
  },
};

const slideRight = {
  hidden: { x: 400 },
  show: {
    x: 0,
  },
};

const popReveal = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
  },
};

function Projects() {
  return (
    <div className="container py-20 mx-auto" id="projects">
      <h1 className="text-3xl font-bold self-center text-center text-gray-900 mb-4 ">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 w-4/5 mt-10 mx-auto h-auto ">
        {projects.map((e, i) => {
          return (
            <motion.div
              key={i}
              variants={popReveal}
              initial="hidden"
              whileInView="show"
              transition={{
                ease: "easeInOut",
                duration: 1.4,
                delay: i / 10,
              }}
              viewport={{ once: true }}
            >
              <ProjectComponent
                title={e.title}
                desc={e.description}
                image={e.images[0]}
                technologies={e.technologies}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
