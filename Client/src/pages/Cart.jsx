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

  const handleDelete = (index) => {
    try {
      // Create a new array excluding the item at the specified index
      const updatedFood = food.filter((_, i) => i !== index);

      // Update the state with the new array
      setFood(updatedFood);

      // Update localStorage with the new array
      localStorage.setItem("foodIds", JSON.stringify(updatedFood));
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Failed to delete. Please try again.");
    }
  };

  const deleteAllItems = () => {
    try {
      // Clear the food array in the state
      setFood([]);

      // Remove the entire food list from localStorage
      localStorage.removeItem("foodids");

      alert("All items deleted successfully!");
    } catch (error) {
      console.error("Error deleting items:", error);
      alert("Failed to delete. Please try again.");
    }
  };
  const orderItems = () => {
    if (food.length === 0) {
      alert("No items to order!");
      return;
    }
    handleDelete(); // Delete all items after ordering
    alert("Order Successful");
  };
  return (
    <div>
      <Navbar />
      <h1 className="text-[43px] font-bold text-center">Cart</h1>
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
      <div className=" flex justify-evenly w-[100%]  items-center text-center mt-[100px]">
        <button
          onClick={deleteAllItems}
          className="w-[150px] h-[60px] rounded-full text-white bg-red-500"
        >
          Delete All
        </button>
        <button
          onClick={orderItems}
          className="border-none w-[150px] h-[60px] rounded-full text-white bg-black"
        >
          Order
        </button>
      </div>
    </div>
  );
};
export default Cart;
