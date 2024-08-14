import HeroImage from "../../assets/HeroImage.jpg";
import Card from "./cards/index";
import HomeInfo from "./homeInfo/index";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <section id="home" className="">
      <div className="w-full md:bg-gray-20">
        {/* <div className="mx-auto w-4/6 md:relative md:h-[330px]"> */}
        <div className="mx-auto w-4/6 bg-white md:relative md:h-[350px]">
          <div className="w-fit">
            <img
              className="h-full xs:hidden sm:hidden md:flex"
              src={HeroImage}
              alt="hero-image"
            />
          </div>

          {/* HOME TEXT  */}
          <div>
            <div className="left-[calc(43%-10px)] top-[calc(40%-120px)] md:absolute md:pr-3">
              <p className="text-5xl xs:mt-10 sm:mt-10 md:mr-5 md:mt-5 md:w-[400px]">
                Experience Modern Eye Care
              </p>
              <p className="mt-5 text-lg md:w-[90%]">
                Dr. Richard Optometry offers comprehensive eye care services and
                in-demand lenses and frames to Torrance and the surrounding
                communities.
              </p>
              {/* ACTION BUTTONS */}
              <div className="right-[calc(100%-315px)] top-[calc(100%+10px)] flex flex-row gap-10 xs:mt-10 sm:mt-10 md:absolute md:m-0">
                <div className="mx-auto flex w-[45%] items-center justify-center rounded bg-primary-300">
                  <div className="py-4 text-center transition duration-300 hover:text-white sm:w-[100px] md:w-[130px]">
                    <Link to={`appointments`}>Appointments</Link>
                  </div>
                </div>
                <div className="">
                  <p className="text-nowrap text-gray-400">OR GIVE US A CALL</p>
                  <a href="tel:3104565590" className="text-nowrap text-lg">
                    (310) 456-5590
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card />
      <HomeInfo />
    </section>
  );
};

export default Home;
