import React from "react";
import { categories } from "../data/data";

const Categories = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12">
      <h1 className="text-2xl md:text-4xl text-orange-600 text-center">
        Top Reted Menu Items
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
        {categories.map((category) => (
          <div key={category.id} className="shadow-lg rounded-lg p-3 bg-gray-100 flex justify-between items-center">
            <h1 className="md:text-xl">{category.name}</h1>
            <img
              className=" w-10 sm:w-20 object-cover bg-cover rounded-t-lg"
              src={category.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
