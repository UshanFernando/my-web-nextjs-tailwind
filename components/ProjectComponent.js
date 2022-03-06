import React from "react";
import Image from "next/image";
// import sample from "../assets/radiolk.jpg";

function ProjectComponent({ title, desc, image, technologies }) {
  return (
    <div class="flex justify-center h-full">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <Image
            src={image}
            class="rounded-none hover:scale-110 transition duration-150 ease-in-out"
          />
        </a>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p class="text-gray-700 text-base mb-4 leading-5 text-justify">
            {desc}
          </p>
          <h5 class="text-gray-900 text-sm font-medium mb-2">
            Technologies :<span class="text-blue-600"> {technologies}</span>
          </h5>
          <button
            type="button"
            class=" inline-block py-2.5  text-blue-500 font-medium text-xs leading-tight uppercase rounded hover: hover:text-green-500   active:text-orange-500 transition duration-150 ease-in-out"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
