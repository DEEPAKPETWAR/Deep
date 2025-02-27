import React from 'react';

const WorkingStep = () => {
  return (
    <div className='relative bg-cover bg-center py-12' style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <div className='absolute inset-0 bg-gray-100 bg-opacity-60'></div>
      <div className='relative container mx-auto px-4 py-20'>
        <div className='text-black text-center mb-20'>
          <h2 className='text-4xl font-bold font-serif mb-4'>
            How It Works
          </h2>
          <p className='text-lg md:w-2/3 mx-auto text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8'>
          {/* Step 1 */}
          <div className='relative bg-slate-600 text-center rounded-lg p-6 flex-1 hover:shadow-xl transition duration-300'>
            <div className='absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-green-400 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center'>
              1
            </div>
            <h3 className='text-xl font-semibold mt-16 text-white'>Fill a form</h3>
            <p className='text-white mt-4'>Step 1 description goes here, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Step 2 */}
          <div className='relative bg-slate-600 text-center rounded-lg p-6 flex-1 hover:shadow-xl transition duration-300'>
            <div className='absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-green-400 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center'>
              2
            </div>
            <h3 className='text-xl font-semibold mt-16 text-white'>Complete your profile</h3>
            <p className='text-white mt-4'>Step 2 description goes here, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Step 3 */}
          <div className='relative bg-slate-600 text-center rounded-lg p-6 flex-1 hover:shadow-xl transition duration-300'>
            <div className='absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-green-400 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center'>
              3
            </div>
            <h3 className='text-xl font-semibold mt-16 text-white'>Start your journey</h3>
            <p className='text-white mt-4'>Step 3 description goes here, lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingStep;
