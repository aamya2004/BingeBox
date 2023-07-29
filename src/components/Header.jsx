import React, { useState } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { Link, NavLink } from 'react-router-dom';
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
    const [toggle,setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      path: "/",
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
      path: "/Search",
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
      path: "/",
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
      path: "/",
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
      path: "/",
    },
    {
      name: "SERIES",
      icon: HiTv,
      path: "/",
    },
  ];

  return (
    <div className="flex items-center gap-8 p-5 justify-between w-full ">
      <div className="flex gap-8 items-center">
        <img
          src="src/assets/logo.png"
          className="w-20 md:w-{115px} object-cover"
        />
        <div className=" hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} path={item.path}  />  
          )
          )}
        </div>

        <div className="flex  md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={" "} Icon={item.icon} />
          )}
        </div>

        <div className="flex  md:hidden " onClick={() =>setToggle(!toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
         {toggle? <div className="absolute mt-3 bg-[#121212]
          border-[1px] border-gray-700 p- px-5 py-4 ">
            {menu.map(
              (item, index) =>
                index > 2 && <HeaderItem name={item.name} Icon={item.icon} />
            )}
          </div> :null}
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full "
      />
    </div>
  );
};

export default Header;
