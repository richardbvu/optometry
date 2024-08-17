import {
  CalendarDaysIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav className="bg-gray-20">
      <div className="w-full md:pt-9">
        <div className="mx-auto flex justify-between rounded-t-lg bg-white px-6 py-5 md:w-4/6">
          {/* LEFT SIDE */}
          <div className="xs:mx-auto sm:mx-auto md:mx-0">
            <Link to={`/`}>
              <div className="text-3xl">DR. RICHARD OPTOMETRY</div>
              <div className="text-nowrap text-lg font-light text-gray-400">
                MEMBER{" "}
                <span className="text-secondary-400 font-medium">
                  VISION SOURCE
                </span>{" "}
                NETWORK
              </div>
            </Link>
          </div>
          {/* RIGHT SIDE */}
          <div className="items-center justify-end gap-4 xs:hidden sm:hidden md:flex">
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
        </div>
      </div>

      {/* NAVBAR LINKS */}
      <div className="mx-auto w-full">
        {isAboveMediumScreens ? (
          <div className="mx-auto flex items-center justify-around bg-primary-300 py-4 md:w-4/6">
            <div className="w-fit text-center transition duration-300 hover:text-white">
              <div className="">
                <NavLink
                  to={`/`}
                  className={({ isActive }) =>
                    isActive
                      ? "z-0 bg-primary-500 px-[20px] py-[18px] text-white"
                      : "z-0 bg-primary-300 px-[20px] py-4"
                  }
                >
                  Home
                </NavLink>
              </div>
            </div>
            <div className="w-fit text-center transition duration-300 hover:text-white">
              <div>
                <NavLink
                  to={`about`}
                  className={({ isActive }) =>
                    isActive
                      ? "z-0 bg-primary-500 px-6 py-[17px] text-white"
                      : "z-0 bg-primary-300 px-6 py-4"
                  }
                >
                  About
                </NavLink>
              </div>
            </div>
            <div className="w-fit text-center transition duration-300 hover:text-white">
              <div>
                <NavLink
                  to={`vision`}
                  className={({ isActive }) =>
                    isActive
                      ? "z-0 bg-primary-500 px-6 py-[17px] text-white"
                      : "z-0 bg-primary-300 px-6 py-4"
                  }
                >
                  Vision
                </NavLink>
              </div>
            </div>
            <div className="w-fit text-center transition duration-300 hover:text-white">
              <div>
                <NavLink
                  to={`promotions`}
                  className={({ isActive }) =>
                    isActive
                      ? "z-0 bg-primary-500 px-6 py-[17px] text-white"
                      : "z-0 bg-primary-300 px-6 py-4"
                  }
                >
                  Promotions
                </NavLink>
              </div>
            </div>
            <div className="w-fit text-center transition duration-300 hover:text-white">
              <div>
                <NavLink
                  to={`patients`}
                  className={({ isActive }) =>
                    isActive
                      ? "z-0 bg-primary-500 px-6 py-[17px] text-white"
                      : "z-0 bg-primary-300 px-6 py-4"
                  }
                >
                  Patients
                </NavLink>
              </div>
            </div>
            <div className="w-fit text-center transition duration-300 hover:text-white">
              <div>
                <NavLink
                  to={`contact`}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-primary-500 px-6 py-[17px] text-white"
                      : "bg-primary-300 px-6 py-4"
                  }
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          // NAVLINKS - MEDIA QUERY
          <div className="mx-auto flex justify-around bg-primary-300 md:w-5/6">
            <div className="flex basis-4/5 items-center justify-evenly">
              <div className="">
                <a
                  className="px-66 py-4 transition duration-300 hover:text-white"
                  href="tel:3104565590"
                >
                  Call Us
                </a>
              </div>
              <div className="w-fit text-center transition duration-300 hover:text-white">
                <NavLink
                  to={`appointments`}
                  className={({ isActive }) =>
                    isActive
                      ? "z-0 bg-primary-500 px-6 py-[17px] text-white"
                      : "z-0 bg-primary-300 px-6 py-4"
                  }
                >
                  Appointments
                </NavLink>
              </div>
            </div>
            <button
              className="px-6 py-4 transition duration-300 hover:text-white"
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
              <div className="mx-auto flex flex-col items-center justify-around gap-8 bg-primary-300 md:w-4/6">
                <Link to={"/"}>
                  <div
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    className="h-fit w-fit text-center underline underline-offset-8 transition duration-300 hover:text-white"
                  >
                    Home
                  </div>
                </Link>
                <Link to={"about"}>
                  <div
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    className="h-fit w-fit text-center underline underline-offset-8 transition duration-300 hover:text-white"
                  >
                    About
                  </div>
                </Link>
                <Link to={"vision"}>
                  <div
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    className="h-fit w-fit text-center underline underline-offset-8 transition duration-300 hover:text-white"
                  >
                    Vision
                  </div>
                </Link>
                <Link to={"promotions"}>
                  <div
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    className="h-fit w-fit text-center underline underline-offset-8 transition duration-300 hover:text-white"
                  >
                    Promotions
                  </div>
                </Link>
                <Link to={"patients"}>
                  <div
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    className="h-fit w-fit text-center underline underline-offset-8 transition duration-300 hover:text-white"
                  >
                    Patients
                  </div>
                </Link>
                <Link to={"contact"}>
                  <div
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    className="h-fit w-fit text-center underline underline-offset-8 transition duration-300 hover:text-white"
                  >
                    Contact
                  </div>
                </Link>
                <Link to={"appointments"}>
                  <div
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                    className="h-fit w-fit text-center underline underline-offset-8 transition duration-300 hover:text-white"
                  >
                    Appointments
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
