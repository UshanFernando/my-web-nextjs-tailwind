import React from "react";
import Image from "next/image";

import fl from "../assets/freelancer.png";
import dp from "../assets/dpulz.jpg";
import {
  Facebook,
  Github,
  Gmail,
  Instagram,
  Linkedin,
  Stackoverflow,
  Twitter,
} from "@icons-pack/react-simple-icons";

import { motion } from "framer-motion";
const techLogoContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const techLogoItem = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { ease: "anticipate", duration: 1.4 } },
};

const popReveal = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const titleStyle = "text-center leading-4  mb-4 mt-2";
const aStyle = "w-24 cursor-pointer";
function ContactMe() {
  return (
    <div className="container sm:py-10 py-0 mx-auto " id="contact">
      <div className="max-w-screen-xl  px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Contact Me
            </h2>
            <motion.div
              className="text-gray-700 mt-8 w-4/5"
              variants={popReveal}
              initial="hidden"
              whileInView="show"
              transition={{
                ease: "easeInOut",
                duration: 1.4,
                delay: 0,
              }}
              viewport={{ once: true }}
            >
              Contact Me from any of the following platforms or simply fill the
              form and send me a message.
            </motion.div>
            <motion.div
              className="grid grid-cols-3 mt-12 gap-4 -ml-3 mr-5"
              variants={techLogoContainer}
              initial="hidden"
              whileInView="show"
              transition={{
                ease: "easeInOut",
                duration: 1.4,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <motion.a className={aStyle} variants={techLogoItem} href="https://mail.google.com/mail/u/0/?fs=1&to=ushansankalpafernando@gmail.com&tf=cm" target="_blank">
                <Gmail
                  className="mx-auto"
                  color="#3c3c3c"
                  size={48}
                  title="Gmail"
                />
                <p className={titleStyle}>Gmail</p>
              </motion.a>

              <motion.a className={aStyle} variants={techLogoItem} href="https://www.instagram.com/ushanfernando/?hl=en" target="_blank">
                <Instagram
                  className="mx-auto"
                  color="#3c3c3c"
                  size={48}
                  title="Instagram"
                />
                <p className={titleStyle}>Instagram</p>
              </motion.a>

              <motion.a className={aStyle} variants={techLogoItem} href="https://www.facebook.com/ushan.fernando.315" target="_blank">
                <Facebook
                  className="mx-auto"
                  color="#3c3c3c"
                  size={48}
                  title="Facebook"
                />
                <p className={titleStyle}>Facebook</p>
              </motion.a>

              <motion.a className={aStyle} variants={techLogoItem} href="https://github.com/UshanFernando" target="_blank">
                <Github
                  className="mx-auto"
                  color="#3c3c3c"
                  size={48}
                  title="Github"
                />
                <p className={titleStyle}>Github</p>
              </motion.a>

              <motion.a className={aStyle} variants={techLogoItem} href="https://www.linkedin.com/in/ushan-fernando/" target="_blank">
                <Linkedin
                  className="mx-auto"
                  color="#3c3c3c"
                  size={48}
                  title="Stackoverflow"
                />
                <p className={titleStyle}>Linkedin</p>
              </motion.a>

              <motion.a className={aStyle} variants={techLogoItem} href="https://stackoverflow.com/users/8342080/ushan-fernando" target="_blank">
                <Stackoverflow
                  className="mx-auto"
                  color="#3c3c3c"
                  size={48}
                  title="Stackoverflow"
                />
                <p className={titleStyle}>Stackoverflow</p>
              </motion.a>
            </motion.div>
          </div>
          <div className="mt-8 text-center"></div>
        </div>
        <div className="">
          <div>
            <span className="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">
              Message
            </span>
            <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button className="uppercase text-sm font-bold tracking-wide bg-yellow-400  p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-yellow-300 text-slate-700">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
