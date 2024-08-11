import {
  CalendarDaysIcon,
  XMarkIcon,
  Bars3Icon,
  DivideIcon,
} from "@heroicons/react/24/solid";
import Link from "./Link";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import { SelectedPage } from "../../shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const index = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav className="bg-gray-20">
      {/* <div className="w-full md:mt-8"> */}
      <div className="w-full md:pt-9">
        <div className="mx-auto flex flex-row items-center justify-between rounded-lg bg-white px-7 py-5 md:w-4/6">
          {/* LEFT SIDE */}
          <div className="mx-auto flex select-none flex-col md:mr-10 md:basis-3/5">
            <div className="text-3xl">DR. RICHARD OPTOMETRY</div>
            <div className="text-nowrap text-lg font-light text-gray-400">
              MEMBER{" "}
              <span className="font-medium text-secondary-400">
                VISION SOURCE
              </span>{" "}
              NETWORK
            </div>
          </div>
          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <div className="flex basis-2/5 items-center justify-end gap-4">
              <a href="tel:3104565590" className="text-nowrap text-lg">
                (310) 456-5590
              </a>
              <button className="flex flex-row rounded border-2 border-slate-200 px-3 py-2 text-lg transition duration-[1000ms] ease-out hover:border-black">
                <div className="flex gap-2">
                  <CalendarDaysIcon className="h-7 w-7" />
                  <p>Appointments</p>
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
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <div className="text-nowrap"></div> */}
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Vision"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Promotions"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Patients"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div className="mx-auto flex justify-around bg-primary-300 md:w-5/6">
            <div className="flex basis-4/5 items-center justify-evenly">
              <div className="">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className="">
                <a
                  className="px-16 py-4 transition duration-300 hover:text-white"
                  href="tel:3104565590"
                >
                  Call Us
                </a>
              </div>
              <div className="">
                <Link
                  page="Appointments"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
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
            <div className="flex flex-col items-center underline underline-offset-4">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Vision"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Promotions"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Patients"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default index;
