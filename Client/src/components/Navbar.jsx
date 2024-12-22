import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [del, setDel] = useState(false);
  const navigate = useNavigate();

  const handleCart = () => {
    const user = localStorage.getItem("Users ID:") || "";
    console.log(user);
    if (user == "") {
      alert("Log in to access cart");
      navigate("/");
    } else {
      navigate("/cart");
    }
  };

  const handleLogOut = () => {
    navigate("/");
    localStorage.clear();
    console.log("After deletion:", localStorage.getItem("Users ID:")); // Should print null
  };

  console.log();
  return (
    <div class="max-w-[1640] mx-auto flex justify-between items-center p-4">
      <div class="flex items-center">
        <div onClick={() => setNav(!nav)} class="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <Link to="/">
          <h1 class="text-2xl sm:text-3xl lg:text-4xl px-2">
            Best <span class="font-bold">Eats</span>
          </h1>
        </Link>
        <div class="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p
            onClick={() => setDel(false)}
            class={!del ? "bg-black text-white rounded-full p-2" : "p-2"}
          >
            Delivery
          </p>
          <p
            onClick={() => setDel(true)}
            class={del ? "bg-black text-white rounded-full p-2" : "p-2"}
          >
            Pickup
          </p>
        </div>
      </div>

      <div class="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:2-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          class="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      <button
        onClick={handleCart}
        class="bg-black text-white hidden md:flex rounded-full items-center py-2"
      >
        <BsFillCartFill size={20} s />
      </button>

      {/* Mobile Menu */}
      {nav ? (
        <div class="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        class={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          class="absolute right-4 top-4 cursor-pointer"
        />
        <h2 class="text-2xl p-4">
          Best <span class="font-bold">Eats</span>
        </h2>
        <nav>
          <ul class=" flex flex-col p-4 text-gray-800">
            <Link to="userLogin">
              <li class="text-xl py-4 flex">
                <FaUser size={25} class="mr-4" /> Log In
              </li>
            </Link>
            <li class="text-xl py-4 flex">
              <TbTruckDelivery size={25} class="mr-4" /> Orders
            </li>
            <li class="text-xl py-4 flex">
              <MdFavorite size={25} class="mr-4" /> Favorites
            </li>
            <li class="text-xl py-4 flex">
              <FaWallet size={25} class="mr-4" /> Wallet
            </li>
            <li class="text-xl py-4 flex">
              <MdHelp size={25} class="mr-4" /> Help
            </li>
            <li class="text-xl py-4 flex">
              <AiFillTag size={25} class="mr-4" /> Promotions
            </li>
            <li class="text-xl py-4 flex">
              <BsFillSaveFill size={25} class="mr-4" /> Best Ones
            </li>
            <li class="text-xl py-4 flex">
              <AiFillTag size={25} class="mr-4" /> Invite Friend
            </li>
            <li class="text-xl py-4 flex" onClick={handleLogOut}>
              <CiLogout size={25} class="mr-4" /> Log Out
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
