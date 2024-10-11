"use client";
import React from "react";

export function SparklesPreview() {
  return (
    <div className="w-full bg-transparent flex flex-col pt-24 items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-3xl text-[20px] lg:text-6xl font-extrabold text-center text-black dark:text-white relative z-20">
        OUR
      </h1>
      <h1 className="sm:text-8xl md:text-8xl text-[50px] lg:text-9xl font-extrabold text-center text-black dark:text-white relative z-20">
        ACADEMICS
      </h1>
      <div className="w-full sm:w-[30rem] md:w-[40rem] text-center h-5 relative">
        {/* Gradients */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-orange-600 dark:via-orange-500 to-transparent h-[2px] sm:w-2/4 w-3/4 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-orange-600 dark:via-orange-500 to-transparent h-px sm:w-2/4 w-3/4" />
        {/* Adjusting the yellow line's width for mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-yellow-500 dark:via-yellow-400 to-transparent h-[5px] sm:w-1/4 w-1/2 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-yellow-500 dark:via-yellow-400 to-transparent h-px sm:w-1/4 w-1/2" />
      </div>
      {/* Paragraph below the gradient line */}
      <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-center text-black dark:text-white relative z-20">
        Discover our world-class programs
      </p>
    </div>
  );
}
