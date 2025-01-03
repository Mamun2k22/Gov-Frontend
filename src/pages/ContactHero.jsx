import React from 'react';
import wma from '../../src/assets/images/wma.png'

const ContactHero = () => {
    return (
      <div className='flex gap-2 lg:mx-10 mx-2'>
    
      <div className="  sm:px-10 px-8 lg:px-20 lg:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 lg:items-center">
          <div>
          <div class="mb-8 flex items-center justify-center md:justify-start gap-4">
                <div className="w-8 h-2.5 rounded-md border border-black"></div>
                <h1 class="text-base text-red-600 font-medium">CONTACT</h1>
              </div>
            <h1 className="block text-2xl font-extrabold sm:text-2xl lg:text-[33px] lg:leading-relaxed dark:text-white mt-6 lg:w-10/12 w-11/12">
             Our expertise extends beyond aesthetics, encompassing Information Security and Digital Forensics to fortify your digital assets. {" "}
            </h1>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded p-2 h-auto w-full lg:h-full lg:w-full"
              src={wma}
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default ContactHero;