import { Link, NavLink } from "react-router-dom";
import RequestAppointment from "../../shared/requestAppointment";

type Props = {};
const EyeConditions = (props: Props) => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Eye Conditions</h1>
            <p className="text-2xl text-gray-400">
              Below are brief descriptions of the various eye conditions we
              commonly see and treat at Dr. Richard Imamoto Optometry in
              Torrance.
            </p>
            <p>
              There are many different types of eye conditions that could be
              affecting your eyesight or could have long-term consequences if
              not treated properly or promptly. We list some of the more common
              conditions below. If you think you or someone in your family has
              one of these conditions, please contact Dr. Richard Imamoto
              Optometry in Torrance for an exam and recommendations.
            </p>
            <hr className="my-5" />
            <p className="text-2xl">Amblyopia (Lazy Eye)</p>
            <p>
              Lazy eye, medically known as amblyopia, is a loss or lack of
              development of vision, usually in one eye. This degenerative
              process usually begins with an inherited condition and appears
              during infancy or early childhood. Lazy eye needs to be diagnosed
              between birth and early school age since it is during this period
              that the brain “chooses” its visual pathway and may ignore the
              weaker eye permanently.
            </p>
            <p>
              Lazy eye is not always easy to recognize since a child with worse
              vision in one eye does not necessarily have lazy eye. Because of
              this, it is recommended that all children, including those with no
              symptoms, have a comprehensive eye examination by the age of three
              and sooner if there is a family history of any eye condition or
              disease. If you suspect a problem, or need to set up your child’s
              first eye examination.
            </p>
            <p className="text-2xl">Blepharitis</p>
            <p>
              Blepharitis is a general term for an inflammation of the eyelid
              and eyelashes. It is among the most common and stubborn eye
              conditions usually resulting from poor eyelid hygiene, a low-grade
              bacterial infection (usually staphylococcal), an allergic reaction
              and/or abnormalities in oil gland function.
            </p>
            <p>
              Like some other skin conditions, blepharitis can be controlled but
              not cured. The main goals in treating it are to reduce the amount
              of bacteria along the lid margin and open plugged glands. Contact
              Dr. Richard Imamoto Optometry to assess the severity of your
              problem and the best treatment method.
            </p>
            <p className="text-2xl">Cataracts</p>
            <p>
              A cataract is a clouding of the eye’s normally clear lens, which
              leads to a progressive blurring or dimming of vision. It is the
              world’s leading cause of blindness and among the most common
              conditions related to aging – by age 65, you have a 50 percent
              chance of developing a cataract, and, by age 75, it jumps to 70
              percent.
            </p>
            <p>
              A cataract starts out small and initially has little or no effect
              on vision. As the cataract progresses, it becomes harder to read
              and perform other normal tasks. In the early stages, your doctor
              may recommend stronger eyeglasses and adjusting your lighting to
              reduce glare. When cataracts disrupt your daily life, your doctor
              may recommend cataract-removal surgery, which is one of the most
              frequent and successful procedures done in the U.S.
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
              <div className="font-bold hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"."}>Eye Conditions</NavLink>
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
export default EyeConditions;
