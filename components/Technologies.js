import React from "react";
// import siReact from 'simple-icons/icons/react';
import Icon, {
  Amazonaws,
  Android,
  Arduino,
  Bootstrap,
  Cplusplus,
  CssThree,
  Firebase,
  Flutter,
  Git,
  Googlecloud,
  Html5,
  Java,
  Mongodb,
  Mysql,
  Nextdotjs,
  Nodedotjs,
  Python,
  Reactivex,
  ReactJs,
  Tailwindcss,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const techLogoVr = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};

const techLogoContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const techLogoItem = {
  hidden: { scale: 0 },
  show: {scale: 1, transition: { ease: "anticipate", duration: 1 } },
};

const viewportOnce = true;

const iconWrapperStyle = "hover:animate-pulse cursor-pointer";
const iconTextClass = "text-center leading-4 mt-2";
const iconClass = "mx-auto";
const size = 60;
function Technologies() {
  return (
    <div>
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 md:grid-cols-5 gap-8 w-3/5 my-20 mx-auto"
        variants={techLogoContainer}
        initial="hidden"
        whileInView="show"
        // animate="show"
        viewport={{ once: viewportOnce }}
        transition={{ duration: 1 }}
      >
        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <ReactJs
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="React"
          />
          <p className={iconTextClass}> ReactJS</p>
        </motion.div>

        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Nodedotjs
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="React"
          />
          <p className={iconTextClass}> NodeJS</p>
        </motion.div>
        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Mongodb
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="React"
          />
          <p className={iconTextClass}> MongoDB</p>
        </motion.div>
        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Html5
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="React"
          />
          <p className={iconTextClass}> HTML5</p>
        </motion.div>
        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <CssThree
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="CSS 3"
          />
          <p className={iconTextClass}> CSS 3</p>
        </motion.div>
        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Bootstrap
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="CSS 3"
          />
          <p className={iconTextClass}> Bootstrap</p>
        </motion.div>
        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Tailwindcss
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="Tailwind CSS"
          />
          <p className={iconTextClass}> Tailwindcss</p>
        </motion.div>
        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Nextdotjs
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="NextJS"
          />
          <p className={iconTextClass}> NextJS</p>
        </motion.div>

        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Android
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="Android"
          />
          <p className={iconTextClass}> Android</p>
        </motion.div>

        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Java
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="Java"
          />
          <p className={iconTextClass}> Java</p>
        </motion.div>

        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <ReactJs
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="React Native"
          />
          <p className={iconTextClass}> React Native</p>
        </motion.div>
        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Flutter
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="Flutter"
          />
          <p className={iconTextClass}> Flutter</p>
        </motion.div>
        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Firebase
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="Firebase"
          />
          <p className={iconTextClass}> Firebase</p>
        </motion.div>

        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Mysql
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="My SQL"
          />
          <p className={iconTextClass}> My SQL</p>
        </motion.div>


        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Cplusplus
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="C++"
          />
          <p className={iconTextClass}> C++</p>
        </motion.div>

        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Arduino
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="Arduino"
          />
          <p className={iconTextClass}> Arduino</p>
        </motion.div>

        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Python
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="Python"
          />
          <p className={iconTextClass}> Python</p>
        </motion.div>

        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Git
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="Git"
          />
          <p className={iconTextClass}> Git</p>
        </motion.div>

        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Amazonaws
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="AWS"
          />
          <p className={iconTextClass}> AWS</p>
        </motion.div>
        <motion.div className={iconWrapperStyle} variants={techLogoItem}>
          <Googlecloud
            className={iconClass}
            color="#3c3c3c"
            size={size}
            title="Google Cloud"
          />
          <p className={iconTextClass}> Google Cloud</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
