import HeroImage from "../../assets/HeroImage.jpg";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import Link from "../navbar/Link";

import {
  CalendarDaysIcon,
  XMarkIcon,
  Bars3Icon,
  DivideIcon,
} from "@heroicons/react/24/solid";

const cards: Array<ClassType> = [
  { name: "Patient Forms", description: "Get the forms you need." },
];

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="">
      <div className="md:bg-gray-20 w-full">
        <div className="relative mx-auto w-4/6">
          {isAboveMediumScreens ? (
            // <img className="w-full" src={HeroImage} alt="hero-image" />
            <img className="w-full" src={HeroImage} alt="hero-image" />
          ) : (
            ""
          )}
          {/* HOME TEXT  */}
          {isAboveMediumScreens ? (
            <div className="">
              <div>
                {/* <p className="right-[50px] top-[50px] z-40 w-[400px] text-5xl md:absolute"> */}
                <p className="right-[5%] top-[25px] z-40 w-[400px] text-5xl md:absolute">
                  Experience Modern Eye Care
                </p>
                <p className="absolute right-[5%] top-[110px] z-40 mt-5 w-[400px] text-lg">
                  Dr. Richard Optometry offers comprehensive eye care services
                  and in-demand lenses and frames to Torrance and the
                  surrounding communities. Click or call to connect, and access
                  the quality of vision care you deserve.
                </p>
                {/* ACTION BUTTONS */}
                <div className="absolute right-[15%] top-[280px] flex flex-row gap-10">
                  <div className="bg-primary-300 mx-auto flex w-[100px] items-center justify-between">
                    <Link
                      page="Appointments"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  <div className="">
                    <p className="text-gray-400">OR GIVE US A CALL</p>
                    <a href="tel:3104565590" className="text-nowrap text-lg">
                      (310) 456-5590
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-[100px] left-[100px] z-40">
                  <div className="flex gap-20">
                    <div className="bg-white p-[100px]">BLOCK</div>
                    <div className="bg-white p-[100px]">BLOCK</div>
                    <div className="bg-white p-[100px]">BLOCK</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-10">
              <div className="flex flex-col items-center justify-center">
                <p className="z-40 flex justify-center text-3xl text-black">
                  Experience Modern Eye Care
                </p>
                <p className="z-40 mt-5 w-[400px] text-center text-2xl text-gray-400">
                  Dr. Richard Optometry offers comprehensive eye care services
                  and in-demand lenses and frames to Torrance and the
                  surrounding communities. Click or call to connect, and access
                  the quality of vision care you deserve.
                </p>
                {/* ACTION BUTTONS */}
                <div className="mt-10 flex flex-col gap-4">
                  <div className="bg-primary-300 py-4 text-center">
                    <Link
                      page="Appointments"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-gray-400">OR GIVE US A CALL</p>
                    <a href="tel:3104565590" className="text-nowrap text-lg">
                      (310) 456-5590
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
