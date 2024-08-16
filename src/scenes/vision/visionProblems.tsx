import { Link, NavLink } from "react-router-dom";
import RequestAppointment from "../../shared/requestAppointment";

const VisionProblems = () => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Vision Problems</h1>
            <p className="text-2xl text-gray-400">
              A concise guide to some of the most common vision problems treated
              at Dr. Richard Imamoto Optometry in Torrance
            </p>
            <p>
              There are many different types of vision problems that could be
              affecting your eyesight. But, for the purposes of this guide, we
              will be focusing on four of the most common causes of impaired
              vision. These, along with many other vision impairments, are
              treated with care and precision by the eye care providers at Dr.
              Richard Imamoto Optometry in Torrance.
            </p>
            <hr className="my-5" />
            <p className="text-2xl">Astigmatism</p>
            <p>
              Astigmatism is an uneven or irregular curvature of the cornea or
              lens, which results in blurred or distorted vision. Other symptoms
              of astigmatism include the need to squint, eye strain from
              squinting, headaches and eye fatigue.
            </p>
            <p>
              In reality, most people have some degree of astigmatism, which is
              usually present at birth and is believed to be hereditary. In
              minor cases, treatment may not be required but is certainly
              beneficial. Moderate to severe astigmatism can be treated with
              corrective eyewear or LASIK surgery.
            </p>
            <p className="text-2xl">Hyperopia (Farsightedness)</p>
            <p>
              Farsightedness, medically known as hyperopia, refers to vision
              that is good at a distance but not at close range. Farsightedness
              occurs when the eyeball is shorter than normal, as measured from
              front to back, or when the cornea has too little curvature. This
              reduces the distance between the cornea and retina, causing light
              to converge behind the retina, rather than on it.
            </p>
            <p>
              If you are mildly farsighted, your eye care provider may not
              recommend corrective treatment at all. However, if you are
              moderately or severely hyperopic, you may have several treatment
              options available, including eyeglasses, contacts, LASIK and
              photorefractive keratectomy (PRK). Your eye care provider at Dr.
              Richard Imamoto Optometry will help you determine the best
              treatment option for you.
            </p>
            <p className="text-2xl">Myopia (Nearsightedness)</p>
            <p>
              Nearsightedness, medically known as myopia, refers to vision that
              is good at close range but not at a distance. It generally occurs
              because the eyeball is too “long” as measured from front to back.
            </p>
            <p>
              Nearsightedness is diagnosed during routine eye exams and possible
              treatments include eyeglasses, contacts, acrylic corneal implants,
              LASIK, radial keratotomy (RK) and photorefractive keratotomy
              (PRK). Your eye care provider will suggest the best treatment
              option for you.
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
              <div className="hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"/vision/eye-diseases"}>Eye Diseases</NavLink>
                </div>
              </div>
              <div className="font-bold hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"."}>Vision Problems</NavLink>
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
export default VisionProblems;
