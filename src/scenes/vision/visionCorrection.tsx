import { Link, NavLink } from "react-router-dom";
import RequestAppointment from "../../shared/requestAppointment";

type Props = {};
const VisionCorrection = (props: Props) => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Vision Correction</h1>
            <p className="text-2xl text-gray-400">
              Dr. Richard Imamoto Optometry in Torrance provides treatment,
              consultation and referrals for these common vision correction
              surgeries and procedures.
            </p>
            <p>
              Vision correction is a general term used to describe a variety of
              optometric techniques for correcting less-than-perfect vision. For
              your convenience, we have included a brief description of some of
              the most common vision correction procedures offered at Dr.
              Richard Imamoto Optometry in Torrance. For more specific
              information about lenses and frames or contacts, please visit
              their respective pages.
            </p>
            <hr className="my-5" />
            <p className="text-2xl">Corneal Reshaping (Orthokeratology)</p>
            <p>
              Orthokeratology is a procedure for correcting myopia
              (nearsightedness) and mild astigmatism by gently reshaping the
              cornea with special contact lenses, which the patient places in
              his or her eyes overnight. When successful, patients will
              experience clear vision during the day without contact lenses or
              eyeglasses. However, the results are temporary, so the patient
              must continue to wear the lenses regularly at night to maintain
              optimum results.
            </p>
            <p className="text-2xl">LASIK</p>
            <p>
              LASIK (Laser-Assisted in Situ Keratomileusis) is a surgical
              procedure that uses a laser beam to reshape the cornea. Patients
              who are nearsighted, farsighted or astigmatic may benefit from
              this type of procedure.
            </p>
            <p>
              While millions of patients have seen successful results from
              LASIK, the procedure is not right for everyone. Your optometrist
              will need to thoroughly examine your eyes to determine which type
              of vision correction best fits your needs.
            </p>
            <p className="text-2xl">Low Vision Therapy</p>
            <p>
              Low vision is a general term that refers to a partial loss of
              vision that cannot be adequately corrected with eyeglasses,
              contact lenses, medications or surgery. Common causes of low
              vision include macular degeneration, diabetic retinopathy,
              inherited retinal degenerative diseases, glaucoma and optic nerve
              atrophy.
            </p>
            <p>
              Low vision therapy typically includes an evaluation of the
              patient’s visual abilities, prescription of low vision devices and
              training in their use. The goal is to maximize the use of the
              patient’s available vision for reading, writing, hobbies and
              work-related tasks such as working at a computer.
            </p>
            <p>
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
              <div className="font-bold hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"."}>Vision Correction</NavLink>
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
export default VisionCorrection;
