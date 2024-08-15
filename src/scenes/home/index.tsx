import { motion } from "framer-motion";
import HeroImage from "../../assets/HeroImage.jpg";
import Card from "./cards/index";
import HomeInfo from "./homeInfo/index";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <section id="home" className="">
      <div className="w-full md:bg-gray-20">
        <div className="mx-auto w-4/6 bg-white md:relative md:h-[350px]">
          <motion.div
            className="w-fit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <img
              className="h-full xs:hidden sm:hidden md:flex"
              src={HeroImage}
              alt="hero-image"
            />
          </motion.div>
          {/* HOME TEXT  */}
          <div>
            <div className="left-[calc(43%-10px)] top-[calc(40%-120px)] md:absolute md:pr-3">
              <p className="text-5xl xs:mt-10 xs:text-center sm:mt-10 sm:text-center md:mr-5 md:mt-5 md:w-[400px] md:text-start">
                Experience Modern Eye Care
              </p>
              <p className="mt-5 text-lg xs:text-center sm:text-center md:w-[90%] md:text-start">
                Dr. Richard Optometry offers comprehensive eye care services and
                in-demand lenses and frames to Torrance and the surrounding
                communities.
              </p>
              {/* ACTION BUTTONS */}
              <div className="right-[calc(100%-315px)] top-[calc(100%+10px)] flex gap-10 xs:mt-10 xs:flex-col xs:items-center xs:gap-5 sm:mt-10 sm:flex-col sm:items-center sm:gap-5 md:absolute md:m-0 md:flex-row">
                <div className="w-full">
                  <Link
                    className="flex items-center justify-center rounded bg-primary-300 py-4 md:w-[150px]"
                    to={`/appointments`}
                  >
                    Appointments
                  </Link>
                </div>
                <div className="xs:mb-10 sm:mb-10 md:mb-0">
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
