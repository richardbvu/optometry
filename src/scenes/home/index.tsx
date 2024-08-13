import { motion } from "framer-motion";
import HeroImage from "../../assets/HeroImage.jpg";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
// import Link from "../navbar/Link";
import Card from "./cards/index";
import HomeInfo from "./homeInfo/index";
import { Link } from "react-router-dom";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="w-full md:bg-gray-20"
      >
        {/* PADDING BOTTOM FOR HOME TO LOOK GOOD */}
        <div className="relative mx-auto w-4/6">
          {isAboveMediumScreens ? (
            // <img className="w-full" src={HeroImage} alt="hero-image" />
            // <img className="w-full" src={HeroImage} alt="hero-image" />
            <img className="w-full" src={HeroImage} alt="hero-image" />
          ) : (
            ""
          )}
          {/* HOME TEXT  */}
          {isAboveMediumScreens ? (
            <div className="">
              <div className="absolute left-[calc(43%-10px)] top-[calc(40%-120px)]">
                {/* <p className="right-[50px] top-[50px] z-40 w-[400px] text-5xl md:absolute"> */}
                {/* <p className="right-[5%] top-[25px] z-40 w-[400px] text-5xl md:absolute"> */}
                <p className="text-5xl">Experience Modern Eye Care</p>
                {/* <p className="absolute right-[5%] top-[110px] z-40 mt-5 w-[400px] text-lg"> */}
                <p className="mt-5 w-[95%] text-lg">
                  Dr. Richard Optometry offers comprehensive eye care services
                  and in-demand lenses and frames to Torrance and the
                  surrounding communities. Click or call to connect, and access
                  the quality of vision care you deserve.
                </p>
                {/* ACTION BUTTONS */}
                {/* <div className="absolute right-[12%] top-[280px] flex flex-row gap-10"> */}
                <div className="absolute right-[calc(100%-315px)] top-[calc(100%+10px)] flex flex-row gap-10">
                  <div className="mx-auto flex w-[45%] items-center justify-center rounded bg-primary-300">
                    <div className="w-[130px] py-4 text-center transition duration-300 hover:text-white">
                      <Link to={`appointments`}>Appointments</Link>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-nowrap text-gray-400">
                      OR GIVE US A CALL
                    </p>
                    <a href="tel:3104565590" className="text-nowrap text-lg">
                      (310) 456-5590
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-10">
              <div className="flex flex-col items-center justify-center">
                <p className="z-40 flex justify-center text-nowrap text-3xl text-gray-500">
                  Experience Modern Eye Care
                </p>
                <p className="z-40 mt-5 w-full text-center text-2xl text-gray-400">
                  Dr. Richard Optometry offers comprehensive eye care services
                  and in-demand lenses and frames to Torrance and the
                  surrounding communities. Click or call to connect, and access
                  the quality of vision care you deserve.
                </p>
                {/* ACTION BUTTONS */}
                <div className="mt-10 flex flex-col gap-4">
                  <div className="rounded bg-primary-300 px-[30px] text-center">
                    <div className="w-[130px] py-4 text-center transition duration-300 hover:text-white">
                      <Link to={`appointments`}>Appointments</Link>
                    </div>
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
      </motion.div>
      <Card />
      <HomeInfo />
    </section>
  );
};

export default Home;
