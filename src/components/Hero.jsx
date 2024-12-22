import React from "react";

const Hero = () => {
  return (
    <div class="max-w-[1640px]- mx-autp p-4">
      <div class="max-h-[500px] relative">
        <div class="absolute w-full h-full text-gray-200 max-h-[200] bg-black/60 flex flex-col justify-center">
          <h1 class="px-4 text-4xl sm:text-5xl md:text-gxl lg:text-7xl font-bold">
            The <span class="text-orange-500">Best</span>
          </h1>
          <h1 class="px-4 text-4xl sm:text-5xl md:text-gxl lg:text-7xl font-bold">
            <span class="text-orange-500">Foods</span> Delivered
          </h1>
        </div>
        <img
          class=" w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
