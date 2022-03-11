import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

function Loading() {
  return (
    <div className="gradientBg w-screen h-screen justify-center items-center">
      <div className="h-40"></div>
      <div className="w-48 mx-auto">
        <Image src={logo} width="200px" height="200px" />
      </div>
      <h2 className="text-white text-4xl text-center font-semibold mb-2">
        www.Ushan.me
      </h2>
      <h2 className="text-white text-3xl text-center">Please Wait....</h2>
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center justify-center space-x-2 animate-pulse">
          <div className="bg-white p-2  w-8 h-8 rounded-full animate-bounce blue-circle"></div>
          <div className="bg-white p-2 w-8 h-8 rounded-full animate-bounce green-circle"></div>
          <div className="bg-white p-2  w-8 h-8 rounded-full animate-bounce red-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
