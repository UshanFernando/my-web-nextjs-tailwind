import React from "react";
import Image from "next/image";
// import sample from "../assets/radiolk.jpg";

function ProjectComponent({ title, desc, image, technologies }) {
  return (
    <div className="flex justify-center  mb-10 h-full max-w-sm">
      <div className="rounded-lg shadow-lg bg-white ">
        <center className="mt-2">
          <Image
            src={image}
            className="rounded-none hover:scale-110 transition duration-150 ease-in-out "
            height={200}
            width={360}
            objectFit='cover'
          />
        </center>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4 leading-5 text-justify">
            {desc}
          </p>
          <h5 className="text-gray-900 text-sm font-medium mb-2">
            Technologies :<span className="text-blue-600"> {technologies}</span>
          </h5>
          <button
            type="button"
            className=" inline-block py-2.5  text-blue-500 font-medium text-xs leading-tight uppercase rounded hover: hover:text-green-500   active:text-orange-500 transition duration-150 ease-in-out"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectComponent;
