import { Link, NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import RequestAppointment from "../../shared/requestAppointment";
import HyperTextBox from "../../shared/hyperTextBox";

type Props = {};
const Lenses = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section>
      <div className="w-full bg-gray-20">
        {isAboveMediumScreens ? (
          <div className="mx-auto flex w-4/6 flex-row gap-[50px] bg-white p-6">
            {/* LEFT CONTENT */}
            <div className="flex basis-3/5 flex-col gap-3">
              <h1 className="text-3xl">Lenses and Frames</h1>
              <p className="text-2xl text-gray-400">
                Dr. Richard Imamoto Optometry offers a number of cutting-edge
                vision care services and products at our optometrist office in
                Torrance.
                {/* CONTROL + SHIFT + L = FIND ALL INSTANCES */}
              </p>
              <p className="pb-5">
                To learn more about the specific products we offer and
                conditions we treat, please select one of the subcategories
                below and request an appointment with your eye care provider.
              </p>
              <HyperTextBox
                page="lenses"
                title="Lenses and Frames"
                text="Review the variety of lenses and frames available at our Gardena optometrist office."
              />
              <HyperTextBox
                title="Contacts"
                text="A list of options and information about the contact lenses offered at Dr. Nancy Imamoto Optometry."
              />
              <HyperTextBox
                title="Vision Correction"
                text="A brief illustration of some of the most common vision correction services offered at Dr. Nancy Imamoto Optometry."
              />
              <HyperTextBox
                title="Eye Conditions"
                text="Brief descriptions of the various eye conditions we commonly see, diagnose and treat at our office in Gardena, including lazy eye, cataracts and more."
              />
              <HyperTextBox
                title="Eye Diseases"
                text="A quick look at some of the most common eye diseases diagnosed, and often treated, at Dr. Nancy Imamoto Optometry, including pink eye, glaucoma and more."
              />
              <HyperTextBox
                title="Vision Problems"
                text="A concise guide to some of the most common vision problems diagnosed, and often treated, at our Gardena optometric office, including astigmatism, farsightedness and more."
              />
            </div>
            {/* RIGHT SIDE BAR */}
            <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
              <div className="mb-[100px] flex flex-col">
                <div className="mb-4 text-nowrap text-lg hover:text-primary-500">
                  <Link to={`/vision`}>Vision Care & Products</Link>
                </div>
                <div className="font-bold hover:text-primary-500">
                  <div className="ml-5">
                    <NavLink
                      // className={({ isActive, isPending }) => {
                      //   return isActive ? "ml-5 font-bold" : "";
                      // }}
                      to={"."}
                    >
                      Lenses and Frames
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* REQUEST APPOINTMENT */}
              <RequestAppointment />
            </div>
          </div>
        ) : (
          // MEDIA QUERY MEDIUM SCREENS
          <div className="mx-auto flex flex-row flex-col gap-[50px] bg-white p-6">
            {/* LEFT CONTENT */}
            <div className="flex basis-3/5 flex-col gap-3">
              <h1 className="text-3xl">About Dr. Richard Imamoto Optometry</h1>
              <p className="text-2xl text-gray-400">
                We are a licensed provider of quality vision care products and
                personalized optometric services in Torrance.
                {/* CONTROL + SHIFT + L = FIND ALL INSTANCES */}
              </p>
              <p>
                Since 2015, Dr. Richard Imamoto Optometry has offered provider
                of quality vision care products and personalized optometric
                services to our patients in Torrance and the surrounding areas.
                Our experienced{" "}
                <span className="font-bold hover:underline hover:underline-offset-2">
                  <Link to={`doctors-staff`}>doctors and staff</Link>
                </span>{" "}
                offer comprehensive vision examinations and are trained in the
                diagnosis and treatment of a wide array of{" "}
                <span className="font-bold hover:underline hover:underline-offset-2">
                  <Link to={``}>eye diseases</Link>
                </span>
                ,{" "}
                <span className="font-bold hover:underline hover:underline-offset-2">
                  <Link to={``}>conditions</Link>
                </span>
                , and{" "}
                <span className="font-bold hover:underline hover:underline-offset-2">
                  <Link to={``}>problems</Link>
                </span>
                .{/* ADD IN LINKS */}
              </p>
              <p>
                In our mission to provide the best eye care services possible,
                our doctors use only the most advanced, state-of-the-art
                diagnostic technology and eye care products available. We are
                committed to educating our patients and providing personalized
                eye care services to the people of Torrance. At Dr. Richard
                Imamoto Optometry, you will find eye care professionals who
                genuinely care about your health and are dedicated to providing
                exceptional personal service to everyone who walks through our
                door.
              </p>
              <p className="mb-5">
                Schedule an appointment with an experienced eye care provider at
                our Torrance optometrist office and give your vision the level
                of care and attention it deserves.
              </p>
              <HyperTextBox
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
                    <NavLink
                      // className={({ isActive, isPending }) => {
                      //   return isActive ? "ml-5 font-bold" : "";
                      // }}
                      to={"doctors-staff"}
                    >
                      Doctors & Staff
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* REQUEST APPOINTMENT */}
              <RequestAppointment />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Lenses;
