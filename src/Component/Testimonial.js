import React from 'react';
import { BsFillChatHeartFill } from "react-icons/bs";
import review1 from '../Assets/review1.jpg';
import review2 from '../Assets/review2.jpg';

const testimonials = [
  {
    name: 'John Doe',
    location: 'New York, NY',
    review: 'This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!',
    image: review1,
  },
  {
    name: 'Jane Smith',
    location: 'Los Angeles, CA',
    review: 'Incredible experience! The support I received was exactly what I needed, and the resources are top-notch. Truly life-changing.',
    image: review2,
  },
];

const Testimonial = () => {
  return (
    <div id='testimonial' className='bg-[#f7f8fc] pb-16 md-flex md:flex-row pt-30'
    
    >
      <div className='container mx-auto px-10 pt-9'>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif mb-3 text-gray-800">
            What Our Clients Say
          </h2>
          <p className="text-lg mb-12 md:w-1/2 mx-auto text-gray-600">
            Hear from some of our satisfied clients about how our services have positively impacted their lives and well-being.
          </p>
        </div>
        
        <div className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8'>
          {
            testimonials.map((testimonial, index) => (
              <div key={index} className='relative bg-white rounded-lg p-8 flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='absolute top-[-25px] left-1/2 transform -translate-x-1/2'>
                  <BsFillChatHeartFill className='text-purple-400 text-4xl' />
                </div>
                <div className='flex flex-col space-y-4'>
                  <p className='text-lg text-gray-700 mb-4'>{testimonial.review}</p>
                  <div className='flex items-center'>
                    <img 
                      src={testimonial.image} 
                      alt='Reviewer' 
                      className='w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mr-4' 
                    />
                    <div>
                      <p className='font-semibold text-gray-800'>{testimonial.name}</p>
                      <p className='text-gray-600'>{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
