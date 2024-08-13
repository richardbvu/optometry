import {
  CalendarDaysIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import { SelectedPage } from "../../shared/types";
import { Link, NavLink } from "react-router-dom";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const index = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav className="bg-gray-20">
      <div className="w-full md:pt-9">
        <div className="mx-auto flex justify-between rounded-t-lg bg-white px-7 py-5 md:w-4/6">
          {/* LEFT SIDE */}
          {isAboveMediumScreens ? (
            <div className="flex flex-col md:mr-10">
              <Link to={`/`}>
                <div className="text-3xl">DR. RICHARD OPTOMETRY</div>
                <div className="text-nowrap text-lg font-light text-gray-400">
                  MEMBER{" "}
                  <span className="font-medium text-secondary-400">
                    VISION SOURCE
                  </span>{" "}
                  NETWORK
                </div>
              </Link>
            </div>
          ) : (
            <div className="mx-auto flex flex-col md:mr-10">
              <Link to={`/`}>
                <div className="text-3xl">DR. RICHARD OPTOMETRY</div>
                <div className="text-nowrap text-lg font-light text-gray-400">
                  MEMBER{" "}
                  <span className="font-medium text-secondary-400">
                    VISION SOURCE
                  </span>{" "}
                  NETWORK
                </div>
              </Link>
            </div>
          )}
          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <div className="flex items-center justify-end gap-4">
              <a href="tel:3104565590" className="text-nowrap text-lg">
                (310) 456-5590
              </a>
              <button className="flex flex-row rounded border-2 border-slate-200 px-3 py-2 text-lg transition duration-[1000ms] ease-out hover:border-black">
                <div className="flex gap-2">
                  <CalendarDaysIcon className="h-7 w-7" />
                  <Link to={`appointments`}>Appointments</Link>
                </div>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* NAVBAR LINKS */}
      <div className="mx-auto w-full">
        {isAboveMediumScreens ? (
          <div className="mx-auto flex items-center justify-around bg-primary-300 md:w-4/6">
            <div className="w-[130px] py-4 text-center transition duration-300 hover:cursor-pointer hover:text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary-500 px-9 py-4 font-bold" : ""
                }
                to={"/"}
              >
                Home
              </NavLink>
            </div>
            <div className="w-[130px] py-4 text-center transition duration-300 hover:cursor-pointer hover:text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary-500 px-9 py-4 font-bold" : ""
                }
                to={"about"}
              >
                About
              </NavLink>
            </div>
            <div className="w-[130px] py-4 text-center transition duration-300 hover:cursor-pointer hover:text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary-500 px-9 py-4 font-bold" : ""
                }
                to={"vision"}
              >
                Vision
              </NavLink>
            </div>
            <div className="w-[130px] py-4 text-center transition duration-300 hover:cursor-pointer hover:text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary-500 px-4 py-4 font-bold" : ""
                }
                to={"promotions"}
              >
                Promotions
              </NavLink>
            </div>
            <div className="w-[130px] py-4 text-center transition duration-300 hover:cursor-pointer hover:text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary-500 px-7 py-4 font-bold" : ""
                }
                to={"patients"}
              >
                Patients
              </NavLink>
            </div>
            <div className="w-[130px] py-4 text-center transition duration-300 hover:cursor-pointer hover:text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-primary-500 px-7 py-4 font-bold" : ""
                }
                to={"contact"}
              >
                Contact
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex justify-around bg-primary-300 md:w-5/6">
            <div className="flex basis-4/5 items-center justify-evenly">
              <div className=""></div>

              <div className="">
                <a
                  className="px-16 py-4 transition duration-300 hover:text-white"
                  href="tel:3104565590"
                >
                  Call Us
                </a>
              </div>
              <div className="w-[150px] py-4 text-center transition duration-300 hover:cursor-pointer hover:text-white">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-primary-500 px-5 py-4 font-bold" : ""
                  }
                  to={"appointments"}
                >
                  Appointments
                </NavLink>
              </div>
            </div>
            <button
              className="px-5 py-4 transition duration-300 hover:cursor-pointer hover:text-white"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        )}
        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed bottom-0 right-0 z-[100] h-full w-[300px] bg-primary-300 drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="m-6 flex justify-end p-4">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col items-center">
              <div className="mx-auto flex flex-col items-center justify-around bg-primary-300 md:w-4/6">
                <div
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  className="w-[130px] py-4 text-center underline underline-offset-8 transition duration-300 hover:text-white"
                >
                  <Link to={"/"}>Home</Link>
                </div>
                <div
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  className="w-[130px] py-4 text-center underline underline-offset-8 transition duration-300 hover:text-white"
                >
                  <Link to={"about"}>About</Link>
                </div>
                <div
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  className="w-[130px] py-4 text-center underline underline-offset-8 transition duration-300 hover:text-white"
                >
                  <Link to={"vision"}>Vision</Link>
                </div>
                <div
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  className="w-[130px] py-4 text-center underline underline-offset-8 transition duration-300 hover:text-white"
                >
                  <Link to={"promotions"}>Promotions</Link>
                </div>
                <div
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  className="w-[130px] py-4 text-center underline underline-offset-8 transition duration-300 hover:text-white"
                >
                  <Link to={"patients"}>Patients</Link>
                </div>
                <div
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  className="w-[130px] py-4 text-center underline underline-offset-8 transition duration-300 hover:text-white"
                >
                  <Link to={"contact"}>Contact</Link>
                </div>
                <div
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  className="w-[130px] py-4 text-center underline underline-offset-8 transition duration-300 hover:text-white"
                >
                  <Link to={"appointments"}>Appointments</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default index;
