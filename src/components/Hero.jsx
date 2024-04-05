import React from "react";

const Hero = () => {
  return (
    <section className="py-64 min-h-screen dark:bg-gray-900 dark:text-white ">
      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 self-center">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            The best or nothing
          </h1>
          <p className="mb-8 text-lg lg:text-xl xl:text-2xl font-light dark:bg-gray-900 dark:text-white">
            The Mercedes-Benz Slogan is “The Best or Nothing,” and it certainly embodies the quality of the vehicles the brand provides even today. From the infamous S-Class to the powerful GLS, this brand has plenty of vehicles that give luxury vehicle shoppers here in Peoria an excellent driving experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-medium text-lg transition duration-150 ease-in-out transform hover:scale-105">
              Get started
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg font-medium text-lg text-white hover:bg-gray-700 transition duration-150 ease-in-out transform hover:scale-105 ">
              Speak to Sales
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 lg:flex hidden">
          <img
            src="https://images.dealer.com/ddc/vehicles/2021/Mercedes-Benz/E-Class/Sedan/perspective/front-left/2021_76.png"
            alt="Mercedes-Benz E-Class"
            className="max-w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
