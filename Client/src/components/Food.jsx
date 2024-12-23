import React, { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);
  console.log(data);

  //Filter Category
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter Price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  const addFood = (foodId) => {
    // Retrieve the current list of food IDs from localStorage or initialize an empty array
    const existingFoodIds = JSON.parse(localStorage.getItem("foodIds")) || [];

    // Add the new food ID to the list
    existingFoodIds.push(foodId);

    // Save the updated list of food IDs to localStorage
    localStorage.setItem("foodIds", JSON.stringify(existingFoodIds));

    console.log("Food ID saved:", foodId); // Logs the food ID that was saved
  };

  return (
    <div class=" w-[100%] m-auto px-4 py-12">
      <h1 class="text-orange-600 font-bold text-center ">
        Top Rated Menu Itmes
      </h1>

      {/* Filter Row */}
      <div class="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p class="font-bold text-gray-700">Fliter Type</p>
          <div class="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              class="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              class="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              class="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              class="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salad
            </button>
            <button
              onClick={() => filterType("chicken")}
              class="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p class="font-bold text-gray-700">Filter Price</p>
          <div class="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              class="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              class="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              class="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              class="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div class="grid gird-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            class="border shadow-lg rounded-b-lg hover:scale-105 duration-300"
          >
            <button
              onClick={() => addFood(data[index])} // Pass the food's ID to the function
              class="border-white bg-white text-black mx-2 absolute mt-3"
            >
              Order Now
            </button>
            <img
              src={item.image}
              alt={item.name}
              class="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div class="flex justify-between px-2 py-4">
              <p class="font-bold"></p>
              <p>
                <span class="m-1 border-orange-600 text-orange-600">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
