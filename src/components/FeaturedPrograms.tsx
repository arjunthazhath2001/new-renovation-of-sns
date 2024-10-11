import React from 'react';
import { ExpandableCardDemo2 } from './ExpandableCardDemo2';
import { ExpandableCardDemo1 } from './ExpandableCardDemo1';

export default function FeaturedPrograms() {
  return (
    <div className='bg-transparent w-full min-h-screen flex flex-col items-center justify-center space-y-4 sm:space-y-8 relative'>
      {/* Title Section */}
      <div className="w-full text-center">
        <span className="sm:text-3xl md:text-4xl text-2xl lg:text-5xl xl:text-7xl font-extrabold text-black dark:text-white">Featured <span className='text-yellow-400'>Programs</span> </span>
      </div>




    {/* CHANGE THE MAIN UI COMPONENT HERE */}

      <div className="w-full max-w-7xl px-4 md:px-0 grid sm:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/* First column of 5 cards */}
        <div className="flex flex-col sm:gap-4">
          <ExpandableCardDemo1/>
          
        </div>
        {/* Second column of 5 cards */}
        <div className="flex flex-col sm:gap-4">
          <ExpandableCardDemo2/>    
        </div>
      </div>

      </div>
  )
}