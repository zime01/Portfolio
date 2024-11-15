import { HiHome, HiOutlinePresentationChartBar, HiUser } from "react-icons/hi";

//import { MdDarkMode } from "react-icons/md";

import { NavLink } from "react-router-dom";
//import ToggleMode from "./ToggleMode";
//import { useDarkMode } from "../context/DarkModeContext";

//import { MdLightMode } from "react-icons/md";
import ToggleMode from "./ToggleMode";

export default function Navbar() {
  //const { toggleDarkMode } = useDarkMode();
  return (
    <div className="flex items-center justify-center md:justify-between lg:justify-between mb-12 max-w-[62.5rem] my-0 mx-auto">
      <p className="text-sm md:text-base lg:text-xl text-[var(--color-text-primary)]">
        @zime_01
      </p>
      <ul className="flex items-center md:justify-center  ">
        <li className="text-[var(--color-text-primary)] font-semibold text-sm md:text-base  lg:text-xl m-5 p-2 hover:text-[var(--color-text-h)] hover:border-b-2 hover:border-[var(--color-text-h)] transition-all duration-100 border-b-2 border-transparent">
          <NavLink to="/" className="flex items-center justify-center gap-1 ">
            <HiHome className="inline" />
            Home
          </NavLink>
        </li>
        <li className="text-[var(--color-text-primary)] font-semibold text-sm md:text-base lg:text-xl m-5 p-2 hover:text-[var(--color-text-h)] hover:border-b-2 hover:border-[var(--color-text-h)] transition-all duration-100 border-b-2 border-transparent">
          <NavLink
            to="/about"
            className="flex items-center justify-center gap-1"
          >
            <HiUser className="" />
            About
          </NavLink>
        </li>
        <li className="text-[var(--color-text-primary)] font-semibold text-sm md:text-base lg:text-xl m-5 p-2 hover:text-[var(--color-text-h)] hover:border-b-2 hover:border-[var(--color-text-h)] transition-all duration-100 border-b-2 border-transparent">
          <NavLink
            to="/projects"
            className="flex items-center justify-center gap-1"
          >
            <HiOutlinePresentationChartBar />
            Projects
          </NavLink>
        </li>
        <li>
          {/* <Link onClick={toggleDarkMode}>
            <MdLightMode className="text-[var(--color-text-primary)] w-6 h-6" />
          </Link> */}
          <ToggleMode />
        </li>
      </ul>
    </div>
  );
}
