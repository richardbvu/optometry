import { Link, NavLink } from "react-router-dom";
import RequestAppointment from "../../shared/requestAppointment";
import HyperTextBox from "../../shared/hyperTextBox";

const Patients = () => {
  return (
    <section>
      <div className="w-full bg-gray-20">
        <div className="mx-auto flex gap-[50px] bg-white p-6 xs:flex-col sm:flex-col md:w-4/6 md:flex-row">
          {/* LEFT CONTENT */}
          <div className="flex basis-3/5 flex-col gap-3">
            <h1 className="text-3xl">Patient Resources</h1>
            <p className="text-2xl text-gray-400">
              Your source for insurance information and patient forms for Dr.
              Richard Imamoto Optometry in Torrance
            </p>
            <p>
              For your convenience, we have created the following pages to
              provide you with a list of some of the insurance carriers we
              accept at our Torrance office as well as several forms to save you
              time at your next appointment. Please click on one of the links
              below to learn more.
            </p>
            <HyperTextBox
              page="insurance-information"
              title="Insurance Information"
              text="A list of some of the insurance carriers we accept, including contact information."
            />
            <HyperTextBox
              page="patient-forms"
              title="Patient Forms"
              text="Print and fill out before your next visit to save you time."
            />
          </div>
          {/* RIGHT SIDE BAR */}
          <div className="flex basis-1/5 flex-col rounded border-[1px] border-gray-50 p-10 md:ml-5">
            <div className="mb-[100px] flex w-[200px] flex-col gap-4">
              <div className="text-nowrap text-lg font-bold hover:text-primary-500">
                <Link to={`.`}>Patients</Link>
              </div>
              <div className="hover:text-primary-500">
                <div className="ml-5">
                  <NavLink to={"/patients/insurance-information"}>
                    Insurance Information
                  </NavLink>
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
export default Patients;
