import { Link, NavLink } from "react-router-dom";
import RequestAppointment from "../../shared/requestAppointment";
import ContactsOptions from "../../assets/ContactsOptions.png";

type Props = {};
const Contacts = (props: Props) => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Contact Lenses</h1>
            <p className="text-2xl text-gray-400">
              Dr. Richard Imamoto Optometry in Torrance offers many options for
              contact lenses.
            </p>
            <p className="">
              There are a number of reasons why you might prefer contact lenses
              to standard eyewear: a glasses-free look, hassle-free vision
              correction, wearing non-prescription sunwear and goggles, or the
              convenience of not having to worry about misplacing your glasses.
              If you have a high prescription or astigmatism, contact lenses may
              provide more enhanced vision correction than glasses. Today, you
              can even replace your bifocal glasses with bifocal contact lenses.
            </p>
            <p className="pb-5">
              Your eye care provider can recommend the best contact lenses for
              you based on a complete eye examination and a review of your
              visual needs both at work and play. Since most people can wear
              more than one type of lens, it’s important to know what the
              choices are and the advantages and disadvantages to each.
            </p>
            <hr className="mb-5" />
            <div className="flex flex-col gap-5">
              <p className="text-2xl">Soft Lenses</p>
              <p>
                These lenses are comfortable to wear and must be replaced
                monthly, weekly or daily depending on the type you choose. Soft
                lenses are often recommended for sports because they fit closer
                to the eye and are more difficult to dislodge. They can provide
                correction for most prescriptions including astigmatism. Today,
                with the introduction of newer materials like silicone
                hydrogels, which allow more oxygen to the eye, patients find it
                easier than ever to wear soft lenses comfortably.
              </p>
              <p className="text-2xl">Gas-Permeable (GP) Lenses</p>
              <p>
                Made of moderately flexible plastics, GP lenses offer sharp
                vision and correct most vision problems. They are more durable
                than soft contact lenses and can be easier to handle and care
                for but require a longer adaptation period and consistent wear
                to maintain adaptation.
              </p>
              <p className="text-2xl">Multifocal Lenses</p>
              <p>
                In both soft and GP designs, multifocal lenses offer patients
                both distance and near vision correction just like a pair of
                bifocal glasses.
              </p>
              <p className="text-2xl">Color Contact Lenses</p>
              <p>
                Enhance your eye color or even change it completely. Colored
                contact lenses are fun and come in a variety of colors for both
                light and dark eyes.
              </p>
              <p className="text-2xl">Silicone Hydrogels</p>
              <p>
                Silicone hydrogels are soft contact lenses that have high oxygen
                permeability and are comparable to GP lenses.
              </p>
              <p>
                Regardless of the type of contact lenses you wear, an annual eye
                exam is recommended to ensure the continued good health of your
                eyes.{" "}
                <span className="font-bold hover:underline hover:underline-offset-2">
                  <Link to={`/appointments`}>Request an appointment</Link>
                </span>{" "}
                for an assessment and advice at Dr. Richard Imamoto Optometry in
                Torrance, and we will be in touch with you shortly.
              </p>
              <div className="rounded border-[1px] border-gray-50 p-5">
                <img src={ContactsOptions} alt="contacts-options" />
              </div>
            </div>
          </div>
          {/* RIGHT SIDE BAR */}
          <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
            <div className="mb-[100px] flex flex-col gap-4">
              <div className="text-nowrap text-lg hover:text-primary-500">
                <Link to={`/vision`}>Vision Care & Products</Link>
              </div>
              <div className="hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"/vision/lenses"}>Lenses and Frames</NavLink>
                </div>
              </div>
              <div className="font-bold hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"."}>Contacts</NavLink>
                </div>
              </div>
              <div className="hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"/vision/vision-correction"}>
                    Vision Correction
                  </NavLink>
                </div>
              </div>
              <div className="hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"/vision/eye-conditions"}>
                    Eye Conditions
                  </NavLink>
                </div>
              </div>
              <div className="hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"/vision/eye-diseases"}>Eye Diseases</NavLink>
                </div>
              </div>
              <div className="hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"/vision/vision-problems"}>
                    Vision Problems
                  </NavLink>
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
export default Contacts;
