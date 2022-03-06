import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/logo.png";
import Image from "next/image";

import scrollIntoView from "scroll-into-view-if-needed";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  let skills;
  let profile;
  let education;
  let experience;
  let contact;
  let projects;
  let home;
  useEffect(() => {
    skills = document.getElementById("skills");
    profile = document.getElementById("profile");
    education = document.getElementById("education");
    experience = document.getElementById("experience");
    contact = document.getElementById("contact");
    projects = document.getElementById("projects");
    home = document.getElementById("home");
  }, []);
  return (
    <nav className="bg-gradient-to-l from-gray-700 via-gray-800 to-gray-900 bg-opacity-80 fixed z-[10000] w-screen sm:mr-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div
              className="flex-shrink-0 w-12 h-12 cursor-pointer"
              onClick={() =>
                scrollIntoView(home, {
                  scrollMode: "if-needed",
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              <Image className="w-8 h-8" src={logo} />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() =>
                    scrollIntoView(profile, {
                      scrollMode: "if-needed",
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  About Me
                </a>

                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() =>
                    scrollIntoView(education, {
                      scrollMode: "if-needed",
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  Education
                </a>

                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() =>
                    scrollIntoView(experience, {
                      scrollMode: "if-needed",
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  Experience
                </a>

                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() =>
                    scrollIntoView(skills, {
                      scrollMode: "if-needed",
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  Skills
                </a>

                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() =>
                    scrollIntoView(projects, {
                      scrollMode: "if-needed",
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  Projects
                </a>
                <a
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() =>
                    scrollIntoView(contact, {
                      scrollMode: "if-needed",
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="mr-6 bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Reports
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Nav;
