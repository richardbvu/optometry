import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

type Props = {};
const About = (props: Props) => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex w-4/6 flex-row gap-[100px] bg-white p-6">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">About Dr. Richard Imamoto Optometry</h1>
            <p className="text-2xl">
              We are a licensed provider of quality vision care products and
              personalized optometric services in Torrance.
            </p>
            <p>
              Since 2015, Dr. Richard Imamoto Optometry has offered provider of
              quality vision care products and personalized optometric services
              to our patients in Torrance and the surrounding areas. Our
              experienced doctors and staff offer comprehensive vision
              examinations and are trained in the diagnosis and treatment of a
              wide array of eye diseases, conditions, and problems.
              {/* ADD IN LINKS */}
            </p>
            <p>
              In our mission to provide the best eye care services possible, our
              doctors use only the most advanced, state-of-the-art diagnostic
              technology and eye care products available. We are committed to
              educating our patients and providing personalized eye care
              services to the people of Torrance. At Dr. Richard Imamoto
              Optometry, you will find eye care professionals who genuinely care
              about your health and are dedicated to providing exceptional
              personal service to everyone who walks through our door.
            </p>
            <p>
              Schedule an appointment with an experienced eye care provider at
              our Torrance optometrist office and give your vision the level of
              care and attention it deserves.
            </p>
            <div className="flex flex-col gap-4 rounded border-[1px] border-gray-50 p-7">
              <div className="flex justify-between">
                <p>Doctors & Staff</p>
                <div>ARROW RIGHT</div>
              </div>
              <p>
                Meet the doctors and staff who make Dr. Richard Imamoto
                Optometry the leading provider of vision care products and
                services in Torrance, California.
              </p>
            </div>
          </div>
          {/* RIGHT SIDE BAR */}
          <div className="flex basis-1/5 flex-col md:ml-10 md:mt-5">
            <div className="mb-[100px]">
              <p className="text-lg">About Us</p>
              <NavLink
                className={({ isActive, isPending }) => {
                  return isActive ? "ml-5 font-bold" : isPending ? "" : "ml-5";
                }}
                to={"doctors-staff"}
              >
                Doctors & Staff
              </NavLink>
            </div>
            <div>
              <p>Request Appointment</p>
              <p>You can schedule your next appointment with us online!</p>
            </div>
            <div>
              <button className="flex flex-row rounded border-2 border-slate-200 px-3 py-2 text-lg transition duration-[1000ms] ease-out hover:border-black">
                <div className="flex gap-2">
                  <CalendarDaysIcon className="h-7 w-7" />
                  <Link to={`appointments`}>Schedule Now</Link>
                </div>
              </button>
            </div>
            <div>
              <a href="tel:3104565590" className="text-nowrap text-lg">
                (310) 456-5590
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
