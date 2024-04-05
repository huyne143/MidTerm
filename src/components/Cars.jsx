import React, { useState } from "react";
import { cars } from "../data";

const Cars = () => {
  const [year, setYear] = useState("");
  const [filteredYear, setFilteredYear] = useState(cars);
  const uniqueYear = [...new Set(cars.map((car) => car.year))];

  const handleSearch = () => {
    const newFilteredCars = cars.filter((car) => year === "" || car.year.toString() === year);
    setFilteredYear(newFilteredCars);
  };

  const renderSingleCard = (car) => {
    return (
      <div
        key={car.id}
        className="mb-10 overflow-hidden rounded-lg shadow-lg transition duration-300 hover:shadow-xl bg-gray-800"
      >
        <img
          src={car.images}
          alt={car.name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h3>
            <a
              href={car.titleHref || "/#"}
              className="block mb-2 text-2xl font-semibold text-white hover:text-yellow-400"
            >
              {car.name}
            </a>
          </h3>
          <div className="flex flex-wrap items-center text-gray-400">
            {/* Icon and Text group */}
            {renderIconTextGroup(car.price, "Price")}
            {renderIconTextGroup(car.year, "Year")}
            {renderIconTextGroup(car.type, "Type")}
            {renderIconTextGroup(car.range, "Range")}
            {renderIconTextGroup(car.mode, "Mode")}
          </div>
          {car.Button && (
            <a
              href={car.btnHref || "#"}
              className="mt-4 inline-block rounded-full border border-yellow-400 py-2 px-6 text-lg font-medium text-white hover:bg-yellow-400 hover:text-gray-800"
            >
              {car.Button}
            </a>
          )}
        </div>
      </div>
    );
  };

  // Helper function to render icon and text group
  const renderIconTextGroup = (text, label) => (
    <div className="mr-4 mb-2 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        {/* SVG path based on label can go here */}
      </svg>
      <span className="text-lg font-semibold text-white">{text}</span>
    </div>
  );

  return (
    <section className="bg-gray-900 pt-20 pb-12 lg:pt-32 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <label htmlFor="year" className="block text-lg font-medium text-gray-300">Year</label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50"
          >
            <option value="">Select a year</option>
            {uniqueYear.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSearch}
          className="mb-4 rounded-md bg-yellow-400 py-2 px-4 text-gray-800 transition duration-200 ease-in-out hover:bg-yellow-500"
        >
          Search
        </button>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredYear.map((car) => renderSingleCard(car))}
        </div>
      </div>
    </section>
  );
};

export default Cars;
