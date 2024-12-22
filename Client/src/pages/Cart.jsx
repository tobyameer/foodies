import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaRegTrashAlt } from "react-icons/fa";
// import { data } from "../data/data";

const Cart = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("foodIds")) || [];
    console.log("LocalStorage data:", data);
    setFood(data);
  }, []);

  const handleDelete = (foodIndex) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    try {
      const updatedFood = [...food];
      updatedFood.splice(foodIndex, 1); // Remove item at the given index
      setFood(updatedFood); // Update state
      localStorage.setItem("foodIds", JSON.stringify(updatedFood)); // Update localStorage
      alert("Deleted successfully");
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete. Please try again.");
    }
  };

  const deleteItem = () => {
    if (food.length === 0) {
      alert("All items deleted successfully!");
      return;
    }

    const item = food[0]; // Get the first item in the list
    const itemConfirm = window.confirm(`Delete item: ${item.name}?`);

    if (itemConfirm) {
      const updatedFood = [...food];
      updatedFood.shift(); // Remove the first item
      setFood(updatedFood); // Update state
      localStorage.setItem("foodids", JSON.stringify(updatedFood)); // Update localStorage
      deleteItem(); // Continue deleting the next item
    } else {
      alert("Stopped deleting items.");
    }
  };
  return (
    <div>
      <Navbar />
      {food.length > 0 ? (
        food.map((item, index) => (
          <div
            key={index}
            className="flex mx-[100px] mt-[50px] shadow-xl hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt=""
              className="min-w-[200px] h-[200px] object-cover"
            />

            <div className="flex flex-row gap-5 w-[fill] justify-between items-center">
              <div className=" ml-[40px]">
                <h1 className="text-[30px] font-semibold">{item.name}</h1>
                <p className="text-[35px]">{item.price}</p>
              </div>

              <div className=" mr-[100px]">
                <button
                  onClick={() => handleDelete(index)}
                  className="ml-2 text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mt-10">No food available</p>
      )}
      <div className="text-center mt-10">
        <button
          onClick={deleteItem}
          className="h-[40px] rounded-full text-white bg-red-500 px-5"
        >
          Delete All
        </button>
        <button className="h-[40px] mt-[20px] rounded-full text-white bg-black">
          Order
        </button>
      </div>
    </div>
  );
};
export default Cart;
