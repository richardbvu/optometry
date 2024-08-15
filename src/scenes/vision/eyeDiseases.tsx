import { Link, NavLink } from "react-router-dom";
import RequestAppointment from "../../shared/requestAppointment";

type Props = {};
const EyeDiseases = (props: Props) => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Eye Diseases</h1>
            <p className="text-2xl text-gray-400">
              A quick look at some of the most common eye diseases diagnosed and
              often treated at Dr. Richard Imamoto Optometry in Torrance
            </p>
            <p>
              “Eye diseases” is a blanket term that refers to a host of diseases
              relating to the function of the eye. Below we describe some of the
              more common types of eye diseases and how they are generally
              treated. For more in-depth information, please speak with your eye
              care provider at Dr. Richard Imamoto Optometry.
            </p>
            <hr className="my-5" />
            <p className="text-2xl">Conjunctivitis (Pink Eye)</p>
            <p>
              Conjunctivitis, also known as pink eye, is an infection or
              inflammation of the conjunctiva – the thin, protective membrane
              that covers the surface of the eyeball and inner surface of the
              eyelids. Caused by bacteria, viruses, allergens and other
              irritants like smoke and dust, pink eye is highly contagious and
              is usually accompanied by redness in the white of the eye and
              increased tearing and/or discharge.
            </p>
            <p>
              While many minor cases improve within two weeks, some can develop
              into serious corneal inflammation and threaten sight. If you
              suspect conjunctivitis, visit your eye care provider at Dr.
              Richard Imamoto Optometry for an examination and treatment.
            </p>
            <p className="text-2xl">Diabetic Eye Disease</p>
            <p>
              Diabetic eye disease is a general term for a group of eye problems
              that can result from having type 1 or type 2 diabetes, including
              diabetic retinopathy, cataracts and glaucoma.
            </p>
            <p>
              Often there are no symptoms in the early stages of diabetic eye
              disease, so it is important that you don’t wait for symptoms to
              appear before having a comprehensive eye exam. Early detection and
              treatment of diabetic eye disease will dramatically reduce your
              chances of sustaining permanent vision loss.
            </p>
            <p className="text-2xl">Glaucoma</p>
            <p>
              Often called “the silent thief of sight,” glaucoma is an increase
              in the intraocular pressure of the eyes, which causes damage to
              the optic nerve with no signs or symptoms in the early stages of
              the disease. If left untreated, glaucoma can lead to a decrease in
              peripheral vision and eventually blindness.
            </p>
            <p>
              While there is no cure for glaucoma, there are medications and
              surgery available that can help halt further vision loss. Early
              detection and regular eye exams are vital to slowing the progress
              of the disease.
            </p>
            <p className="mt-10">
              Dr. Richard Imamoto Optometry has the experience and equipment
              necessary to provide treatment, consultation and referrals for the
              vision correction procedures and surgeries detailed above at our
              office in Torrance.{" "}
              <span className="font-bold hover:underline hover:underline-offset-2">
                <Link to={`/appointments`}>Request an appointment</Link>
              </span>{" "}
              with your eye care provider, and we will be in touch with you
              shortly.
            </p>
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
              <div className="hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"/vision/contacts"}>Contacts</NavLink>
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
              <div className="font-bold hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"."}>Eye Diseases</NavLink>
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
export default EyeDiseases;
