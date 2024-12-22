import React from "react";
import { categories } from "../data/data.js";

const Category = () => {
  return (
    <div class="max-w-[1640px] m-auto px-4 py-12">
      <h1 class="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div class="grid grid-cols md:grid-cols-4 gap-6 py-6">
        {categories.map((items, index) => (
          <div
            key={index}
            class="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 class="font-bold sm:text-xl">{items.name}</h2>
            <img class="w-20" src={items.image} alt={items.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
