import React from "react";

const packages = [
  {
    name: 'Bronze Package',
    price: '$99',
    description: 'Ideal for individuals or businesses looking to get started with mental wellness.',
    features: [
      'Access to basic wellness resources',
      'Weekly mental wellness tips',
      'Community support group access',
    ],
  },
  {
    name: 'Silver Package',
    price: '$199',
    description: 'Ideal for individuals or businesses looking to level up their mental wellness journey.',
    features: [
      'Access to basic wellness resources',
      'Weekly mental wellness tips',
      'Community support group access',
    ],
  },
  {
    name: 'Gold Package',
    price: '$299',
    description: 'Perfect for individuals or businesses who want full access to advanced mental wellness tools.',
    features: [
      'Access to basic wellness resources',
      'Weekly mental wellness tips',
      'Community support group access',
    ],
  },
];

const Pricing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="pricing" className="bg-[#f7f8fc] pt-30">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif mb-3 text-gray-800">
            Perfect for Small & Large Brands
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        
        {/* Packages */}
        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg p-6 flex-1 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{pkg.name}</h3>
              <hr className="w-24 text-primary border-purple-700 mb-4" />
              <p className="text-3xl font-bold mb-4 text-gray-900">
                {pkg.price}
                <span className="text-lg font-normal text-gray-600">/mo</span>
              </p>
              <p className="text-lg mb-4 text-gray-700">{pkg.description}</p>
              <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-lg mb-2">{feature}</li>
                ))}
              </ul>
              <button
                onClick={handleScrollToContact}
                className="bg-green-400 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
