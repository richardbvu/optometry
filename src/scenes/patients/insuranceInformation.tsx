import { Link, NavLink } from "react-router-dom";
import RequestAppointment from "../../shared/requestAppointment";
import InsuranceOptions from "../../assets/InsuranceOptions.png";

type Props = {};
const InsuranceInformation = (props: Props) => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Insurance Information</h1>
            <p className="text-2xl text-gray-400">
              Dr. Nancy Imamoto Optometry works with many insurance carriers and
              payment plans.
              {/* CONTROL + SHIFT + L = FIND ALL INSTANCES */}
            </p>
            <p>
              To see if we work with your insurance carrier or vision care plan,
              please{" "}
              <span className="font-bold hover:underline hover:underline-offset-2">
                <Link to={`/contact`}>call our office</Link>
              </span>{" "}
              for assistance. Our friendly and informed staff will be happy to
              answer any questions you may have.
            </p>
            <div className="rounded border-[1px] border-gray-50 p-5">
              <img src={InsuranceOptions} alt="insurance-options" />
            </div>
          </div>
          {/* RIGHT SIDE BAR */}
          <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
            <div className="mb-[100px] flex w-[200px] flex-col gap-4">
              <div className="text-nowrap text-lg hover:text-primary-500">
                <Link to={`/patients`}>Patients</Link>
              </div>
              <div className="font-bold hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"."}>Insurance Information</NavLink>
                </div>
              </div>
              <div className="hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"/patients/patient-forms"}>
                    Patient Forms
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
export default InsuranceInformation;
