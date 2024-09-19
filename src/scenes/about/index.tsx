import { Link, NavLink } from "react-router-dom";
import RequestAppointment from "../../shared/requestAppointment";
import HyperTextBox from "../../shared/hyperTextBox";

const About = () => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">About Dr. Richard Imamoto Optometry</h1>
            <p className="text-2xl text-gray-400">
              We are a licensed provider of quality vision care products and
              personalized optometric services in Torrance.
            </p>
            <p>
              Since 2015, Dr. Richard Imamoto Optometry has offered provider of
              quality vision care products and personalized optometric services
              to our patients in Torrance and the surrounding areas. Our
              experienced{" "}
              <span className="font-bold hover:underline hover:underline-offset-2">
                <Link to={`doctors-staff`}>doctors and staff</Link>
              </span>{" "}
              offer comprehensive vision examinations and are trained in the
              diagnosis and treatment of a wide array of{" "}
              <span className="font-bold hover:underline hover:underline-offset-2">
                <Link to={`/vision/eye-diseases`}>eye diseases</Link>
              </span>
              ,{" "}
              <span className="font-bold hover:underline hover:underline-offset-2">
                <Link to={`/vision/eye-conditions`}>conditions</Link>
              </span>
              , and{" "}
              <span className="font-bold hover:underline hover:underline-offset-2">
                <Link to={`/vision/vision-problems`}>problems</Link>
              </span>
              .
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
            <p className="mb-5">
              Schedule an appointment with an experienced eye care provider at
              our Torrance optometrist office and give your vision the level of
              care and attention it deserves.
            </p>
            <HyperTextBox
              page="doctors-staff"
              title="Doctors & Staff"
              text="Meet the doctors and staff who make Dr. Richard Imamoto
                    Optometry the leading provider of vision care products and
                    services in Torrance, California."
            />
          </div>
          {/* RIGHT SIDE BAR */}
          <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
            <div className="mb-[100px] flex flex-col">
              <div className="mb-4 text-lg font-bold hover:text-primary-500">
                <Link to={`/about`}>About Us</Link>
              </div>
              <div className="hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"doctors-staff"}>Doctors & Staff</NavLink>
                </div>
              </div>
            </div>
            {/* REQUEST APPOINTMENT */}
            <RequestAppointment />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
