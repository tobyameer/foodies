import React from "react";

const Cards = () => {
  return (
    <div class="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div class="rounded-xl relative">
        <div class="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p class="font-bold text-2xl px-2 pt-4">Sizzle, Stack, and Savor!</p>
          <p class="px-2">Burgers</p>
        </div>
        <img
          class="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div class="rounded-xl relative">
        <div class="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p class="font-bold text-2xl px-2 pt-4">In crust, we trust!</p>
          <p class="px-2">Pizza's</p>
        </div>
        <img
          class="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1349383878/photo/hawaiian-pizza-with-ham-and-pineapple.jpg?b=1&s=612x612&w=0&k=20&c=NIMBpMr4nLDfIhTfJ9aF23BQm6O5ZCGbKxgJBKVCF6g="
          alt=""
        />
      </div>
      <div class="rounded-xl relative">
        <div class="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p class="font-bold text-2xl px-2 pt-4">Chicken like Never Before!</p>
          <p class="px-2">Fried Chicken</p>
        </div>
        <img
          class="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/475705413/photo/barbecue-buffalo-chicken-wings.jpg?b=1&s=612x612&w=0&k=20&c=CJCfgZiZsmPRjgZ7FhM0hQvIAqQhgDykKAMN5DQaIoU="
          alt=""
        />
      </div>
    </div>
  );
};

export default Cards;
