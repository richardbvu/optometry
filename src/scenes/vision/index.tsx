import { Link, NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import RequestAppointment from "../../shared/requestAppointment";
import HyperTextBox from "../../shared/hyperTextBox";
import LensesOptions from "../../assets/LensesOptions.png";

type Props = {};
const Vision = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section>
      <div className="w-full bg-gray-20">
        {isAboveMediumScreens ? (
          <div className="mx-auto flex w-4/6 flex-row gap-[50px] bg-white p-6">
            {/* LEFT CONTENT */}
            <div className="flex basis-3/5 flex-col gap-3">
              <h1 className="text-3xl">Vision Care & Products</h1>
              <p className="text-2xl text-gray-400">
                A brief description of the types of lenses and variety of frames
                available at Dr. Richard Imamoto Optometry in Torrance.
                {/* CONTROL + SHIFT + L = FIND ALL INSTANCES */}
              </p>
              <p className="">
                Selecting your lenses and frames is a very personal choice. A
                wide variety of options are available that can be tailored to
                suit not only your medical needs but also your fashion
                preferences.
              </p>
              <p className="pb-5">
                Highlight your features, play with color, and augment vision for
                different functions such as reading, driving and playing sports.
                With all the choices available, the experience can be daunting
                without the right guidance. Dr. Nancy Imamoto Optometry in
                Gardena makes the choice easy.
              </p>
              <hr className="mb-5" />
              <div className="flex flex-col gap-5">
                <p className="text-2xl">Eyeglasses</p>
                <p>
                  Design, material and treatments are the three components that
                  make up a pair of prescription lenses. It is important to
                  select the right combination of these elements for your
                  particular visual needs and to always consult your eye care
                  professional.
                </p>
                <p>
                  The knowledgeable staff at Dr. Nancy Imamoto Optometry will
                  consider long-term wearing comfort, style, features and
                  function when suggesting a new pair of eyeglasses. The
                  eyeglasses become as unique as the person taking them home.
                </p>
                <p className="text-2xl">Eyeglass Lenses</p>
                <p>
                  Selecting the right eyeglass lens depends largely on its
                  function. From single vision lenses to progressive
                  polycarbonate lenses, we are happy to help you find what best
                  suits your needs. Regardless of your situation, your eye care
                  provider can help determine what types of lenses will work
                  best for you in terms of comfort, function and design.
                </p>
                <p className="text-2xl">Frame Styles</p>
                <p>
                  When choosing a frame, the shape and size of the frame should
                  enhance the color of your eyes, complement your skin tone and
                  play up the best features of your face shape. Most people need
                  more than one pair of glasses, such as one for everyday wear
                  and another for outdoor activities. Having different style
                  frames for different activities and moods makes wearing
                  glasses more fun.
                </p>
                <p className="text-2xl">Sunglasses</p>
                <p>
                  With the wide variety of lens options available, you can
                  customize your “sunnies” (sunglasses) to meet your visual,
                  protection, performance and comfort needs. Sunglasses protect
                  your eyes from harmful ultraviolet (UV) radiation, which is
                  present even on cloudy days. Quality sunwear provides 100
                  percent UV protection and can significantly reduce the risk of
                  vision problems caused by sunlight such as cataracts and
                  retinal damage.
                </p>
                <p>
                  Glare, an issue that makes it difficult to see objects clearly
                  by washing out colors and details, can be combated by
                  polarized lenses. Looking at a scene with polarized lenses,
                  you’ll notice the colors are deeper, richer and bolder, and
                  details are clearer and more distinct. Polarized lenses also
                  help reduce squinting, which, in turn, reduces eye fatigue,
                  tension and eyestrain.
                </p>
                <p className="text-2xl">Anti-Reflective Lenses</p>
                <p>
                  Wearers of prescription glasses and sunglasses commonly
                  encounter annoying glare and reflections caused by light
                  bouncing off their lenses. This glare makes it more difficult
                  to see, especially at night. Anti-reflective lenses reduce
                  these reflections allowing more light to pass through to your
                  eyes.
                </p>
                <p>
                  All lens surfaces naturally reflect light and this reflection
                  can prevent between seven to 14 percent of the light needed
                  for optimal vision. Wearing non-AR lenses is like trying to
                  read a book in a dimly lit room. Since AR lenses allow more
                  light to reach your eyes by reducing reflections, it’s like
                  turning up the lights in a room, making it easier to see.
                </p>
                <p>
                  Lenses and frames are a very necessary and personal choice.
                  Dr. Nancy Imamoto Optometry in Gardena, California has the
                  experience to guide you toward eyewear selections that are
                  comfortable and that work to complement your face. For help,{" "}
                  <Link
                    className="font-bold underline underline-offset-4"
                    to={`/appointments`}
                  >
                    request an appointment
                  </Link>{" "}
                  with your eye care provider and we’ll be in touch with you
                  shortly.
                </p>
                <div className="rounded border-[1px] border-gray-50 p-5">
                  <img src={LensesOptions} alt="lenses-options" />
                </div>
              </div>
            </div>
            {/* RIGHT SIDE BAR */}
            <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
              <div className="mb-[100px] flex flex-col">
                <div className="mb-4 text-nowrap text-lg font-bold hover:text-primary-500">
                  <Link to={`/vision`}>Vision Care & Products</Link>
                </div>
                <div className="hover:text-primary-500">
                  <div className="ml-5">
                    <NavLink
                      // className={({ isActive, isPending }) => {
                      //   return isActive ? "ml-5 font-bold" : "";
                      // }}
                      to={"lenses"}
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
export default Vision;
